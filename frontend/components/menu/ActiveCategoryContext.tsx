"use client";

import { createContext, useContext, useState, useEffect, useRef, useCallback, type ReactNode } from "react";

interface ActiveCategoryContextValue {
    activeCategoryId: string | null;
    setActiveCategoryId: (id: string | null) => void;
    categoryIds: string[];
    setCategoryIds: (ids: string[]) => void;
    // Bloqueia temporariamente o observer/scroll de sobrescrever a categoria ativa (usado ao clicar).
    lockObserver: () => void;
    isObserverLocked: () => boolean;
}

const ActiveCategoryContext = createContext<ActiveCategoryContextValue>({
    activeCategoryId: null,
    setActiveCategoryId: () => {},
    categoryIds: [],
    setCategoryIds: () => {},
    lockObserver: () => {},
    isObserverLocked: () => false,
});

export function useActiveCategory() {
    return useContext(ActiveCategoryContext);
}

export function ActiveCategoryProvider({ children }: { children: ReactNode }) {
    const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);
    const [categoryIds, setCategoryIds] = useState<string[]>([]);
    const lockTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const lockedRef = useRef(false);

    const lockObserver = useCallback(() => {
        lockedRef.current = true;
        // Limpa timeout anterior se existir
        if (lockTimeoutRef.current) {
            clearTimeout(lockTimeoutRef.current);
        }
        // Desbloqueia após 1s (tempo suficiente para o smooth scroll terminar)
        lockTimeoutRef.current = setTimeout(() => {
            lockedRef.current = false;
        }, 1000);
    }, []);

    const isObserverLocked = useCallback(() => lockedRef.current, []);

    return (
        <ActiveCategoryContext.Provider
            value={{ activeCategoryId, setActiveCategoryId, categoryIds, setCategoryIds, lockObserver, isObserverLocked }}
        >
            {children}
        </ActiveCategoryContext.Provider>
    );
}

export function CategorySectionObserver({ categoryIds }: { categoryIds: string[] }) {
    const { setActiveCategoryId, setCategoryIds, isObserverLocked } = useActiveCategory();

    // Registra os IDs das categorias no contexto
    useEffect(() => {
        setCategoryIds(categoryIds);
    }, [categoryIds, setCategoryIds]);

    // Define a primeira categoria como ativa por padrão
    useEffect(() => {
        if (categoryIds.length > 0) {
            setActiveCategoryId(categoryIds[0]);
        }
    }, [categoryIds, setActiveCategoryId]);

    // Observa as seções de categoria com IntersectionObserver
    // + detecta fim de página para ativar últimas categorias
    useEffect(() => {
        if (categoryIds.length === 0) return;

        const visibleEntries = new Map<string, IntersectionObserverEntry>();

        function getLastVisibleCategoryId(): string | null {
            for (let i = categoryIds.length - 1; i >= 0; i--) {
                const el = document.getElementById(categoryIds[i]);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    // A seção está pelo menos parcialmente visível na viewport
                    if (rect.top < window.innerHeight && rect.bottom > 0) {
                        return categoryIds[i];
                    }
                }
            }
            return null;
        }

        /**
         * Verifica se o usuário está no final (ou muito perto) da página.
         */
        function isAtBottom(): boolean {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight;
            const clientHeight = document.documentElement.clientHeight;
            return scrollTop + clientHeight >= scrollHeight - 50;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        visibleEntries.set(entry.target.id, entry);
                    } else {
                        visibleEntries.delete(entry.target.id);
                    }
                });

                // Não sobrescreve a categoria ativa durante um clique do usuário
                if (isObserverLocked()) return;

                // Se está no final da página, ativar a última categoria visível
                if (isAtBottom()) {
                    const lastId = getLastVisibleCategoryId();
                    if (lastId) {
                        setActiveCategoryId(lastId);
                        return;
                    }
                }

                // Caso normal: encontra a seção visível mais próxima do topo
                if (visibleEntries.size > 0) {
                    let topMostId: string | null = null;
                    let topMostTop = Infinity;

                    visibleEntries.forEach((entry, id) => {
                        const rect = entry.target.getBoundingClientRect();
                        if (rect.top < topMostTop) {
                            topMostTop = rect.top;
                            topMostId = id;
                        }
                    });

                    if (topMostId) {
                        setActiveCategoryId(topMostId);
                    }
                }
            },
            {
                // rootMargin negativo no topo para compensar a navbar sticky
                rootMargin: "-100px 0px -60% 0px",
                threshold: 0,
            },
        );

        // Listener de scroll para detectar fim de página
        function handleScroll() {
            // Não sobrescreve a categoria ativa durante um clique do usuário
            if (isObserverLocked()) return;

            if (isAtBottom()) {
                const lastId = getLastVisibleCategoryId();
                if (lastId) {
                    setActiveCategoryId(lastId);
                }
            }
        }

        // Observa cada seção de categoria pelo ID
        categoryIds.forEach((id) => {
            const element = document.getElementById(id);
            if (element) {
                observer.observe(element);
            }
        });

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            observer.disconnect();
            window.removeEventListener("scroll", handleScroll);
        };
    }, [categoryIds, setActiveCategoryId]);

    return null;
}

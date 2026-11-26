"use client"

import { useSyncExternalStore } from "react"

import { CATEGORY_STORAGE_KEY, CATEGORY_STORAGE_EVENT } from "@/services/category.services"
import { mockCategories } from "@/data/mock"
import type { Category } from "@/types/category"

// Inscrição para receber notificações de alterações
function subscribe(callback: () => void) {
    window.addEventListener("storage", callback)
    window.addEventListener(CATEGORY_STORAGE_EVENT, callback)

    return () => {
        window.removeEventListener("storage", callback)
        window.removeEventListener(CATEGORY_STORAGE_EVENT, callback)
    }
}


// Recupera os dados atuais do localStorage
function getSnapshot(): string | null {
    return localStorage.getItem(CATEGORY_STORAGE_KEY)
}


// valor inicial utilizando durante a renderização no servidor
function getServerSnapshot(): string | null {
    return null;
}

export function useCategories(restaurantId?: string) {
    const storedData = useSyncExternalStore(
        subscribe,
        getSnapshot,
        getServerSnapshot
    );

    let categories: Category[] = mockCategories


    if (storedData !== null) {
        try {
            const parsedData: unknown = JSON.parse(storedData);

            if (Array.isArray(parsedData)) {
                categories = parsedData as Category[];
            }

        } catch {
            categories = mockCategories
        }
    }

    return categories.filter(category => category.restaurantId === restaurantId)
}





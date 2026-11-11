"use client";

import { useActiveCategory } from "@/components/menu/ActiveCategoryContext";
import type { Category } from "@/types/category";
import { useCallback } from "react";

export default function CategoryNavBar({ categories }: { categories: Category[] }) {
    const { activeCategoryId, setActiveCategoryId, lockObserver } = useActiveCategory();

    const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, categoryId: string) => {
        e.preventDefault();
        // Ativa a categoria imediatamente e bloqueia o observer durante o scroll
        setActiveCategoryId(categoryId);
        lockObserver();
        const element = document.getElementById(categoryId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }, [setActiveCategoryId, lockObserver]);

    return (
        <nav className="sticky top-0 z-40 w-full mt-6 bg-[#fcf5e9] py-4 px-4 border-b border-gray-200/50 shadow-sm transition-all">
            <ul className="flex flex-row justify-start md:justify-center gap-3 overflow-x-auto whitespace-nowrap no-scrollbar pb-1">
                {categories.map(category => {
                    const isActive = activeCategoryId === category.id;

                    return (
                        <li
                            key={category.id}
                            className={`inline-block cursor-pointer border border-gray-800 rounded-3xl transition-colors ${
                                isActive
                                    ? "bg-[#003836] text-white"
                                    : "hover:bg-[#003836] text-[#003836] hover:text-white"
                            }`}
                        >
                            <a
                                href={`#${category.id}`}
                                onClick={(e) => handleClick(e, category.id)}
                                className="font-montserrat font-semibold block px-5 py-2 text-sm md:text-base transition-all duration-100"
                            >
                                {category.name}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

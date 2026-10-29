import { getMockCategoriesByRestaurant } from "@/data/mock"
import type { Category } from "@/types/category"

export default async function CategoryNavBar({ restaurantId }: { restaurantId: string }) {
    const categories: Category[] = getMockCategoriesByRestaurant(restaurantId)

    return (
        <nav className="sticky top-0 z-40 w-full mt-6 bg-[#fcf5e9] py-4 px-4 border-b border-gray-200/50 shadow-sm transition-all">
            <ul className="flex flex-row justify-start md:justify-center gap-3 overflow-x-auto whitespace-nowrap no-scrollbar pb-1">
                {categories.map(category => (
                    <li key={category.id} className="inline-block cursor-pointer border border-gray-800 rounded-3xl hover:bg-[#003836] text-[#003836] hover:text-white transition-colors ">
                        <a 
                            href={`#${category.id}`} 
                            className="font-montserrat font-semibold block px-5 py-2 text-sm md:text-base transition-all duration-100"
                        >
                            {category.name}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

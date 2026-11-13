import { getMockMenuBySlug, getMockCategoriesByRestaurant } from "@/data/mock"
import { categoryIcons } from "@/lib/category-icons";

interface CategoryListAdminProps {
    slug: string
}


export default async function CategoryListAdmin({ slug }: CategoryListAdminProps) {
    const mockMenu = getMockMenuBySlug(slug)
    console.log(mockMenu?.categories)
    const mockCategories = getMockCategoriesByRestaurant(mockMenu?.restaurant.id || "")

    


    return (
        <div className="w-full flex flex-col gap-3" >

            <div className="grid grid-cols-3 gap-5">
                {mockMenu?.categories.map((category) => {
                    const Icon = category.icon
                        ? categoryIcons[category.icon as keyof typeof categoryIcons]
                        : categoryIcons.utensils;

                    return (
                        <div key={category.id} className="flex flex-col p-8 border border-black/10 bg-white/60 rounded-3xl min-h-60 min-w-fit">
                            
                            {/* Ícone da categoria */}
                            <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-gray-100 text-green-900 mb-4">
                                <Icon size={24} strokeWidth={1.8} />
                            </div>

                            {/* Nome da categoria */}
                            <h2 className="text-2xl font-semibold font-montserrat">
                                {category.name}
                            </h2>

                            {/* Quantidade de produtos */}
                            <p className="text-md">
                                {category.products.length} produtos
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

import { getMockCategoriesByRestaurant, getMockMenuBySlug, getMockProductsByCategory } from "@/data/mock"
import ProductCard from "./ProductCard";

export default async function CategoryList({ slug }: { slug: string }) {
    const restaurant = getMockMenuBySlug(slug)
    const categories = getMockCategoriesByRestaurant(restaurant?.restaurant.id ?? "");
    const products = categories.flatMap(category => getMockProductsByCategory(category.id));

    return (
        <div className="flex flex-col px-4 md:px-8 pb-12 text-black w-full max-w-7xl mx-auto">
            {/* Categorias */}
            {categories.map(category => (
                <div key={category.id} id={category.id} className="flex flex-col gap-5 pt-6 scroll-mt-24 pb-20">
                    <div className="flex flex-row gap-4 items-center">
                        <h3 className="text-black text-lg md:text-xl font-genty whitespace-nowrap">{category.name}</h3>
                        <div className="flex-1 h-0.5 bg-slate-200 self-center"></div>
                        <h3 className="text-gray-500 text-xs md:text-sm text-right font-medium whitespace-nowrap">
                            {products.filter(product => product.categoryId === category.id).length} itens
                        </h3>
                    </div>

                    {/* Fallback de Produtos por categoria */}
                    {products.filter(product => product.categoryId === category.id).length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-8">
                            <h1 className="text-gray-500 text-sm md:text-lg font-montserrat">Nenhum produto cadastrado nessa categoria</h1>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full">
                            {products.filter(product => product.categoryId === category.id).map(product => (
                                <div key={product.id} className="w-full">
                                    <ProductCard product={product} category={category} />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

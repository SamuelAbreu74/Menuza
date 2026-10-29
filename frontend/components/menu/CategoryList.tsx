import Image from "next/image"
import { getMockCategoriesByRestaurant, getMockMenuBySlug, getMockProductsByCategory } from "@/data/mock"
import ProductCard from "./ProductCard";

export default async function CategoryList({ slug }: { slug: string }) {
    const restaurant = getMockMenuBySlug(slug)

    const categories = getMockCategoriesByRestaurant(restaurant?.restaurant.id ?? "");

    const products = categories.flatMap(category => getMockProductsByCategory(category.id));

    return (
        <div className="flex flex-col p-4 text-black">
            {/* Categorias */}
            {categories.map(category => (
                <div key={category.id} id={category.id} className="flex flex-col gap-5 p-4 mt-5">
                    <div className="flex flex-row gap-5">
                        <h3 className="text-black text-xl font-genty ">{category.name}</h3>
                        <div className="flex-1 h-0.5 bg-slate-300 self-center"></div>
                        <h3 className="text-black text-sm text-right font-bold ">{products.filter(product => product.categoryId === category.id).length} itens</h3>
                    </div>
                    {/* Fallback de Produtos por categoria */}
                    {products.filter(product => product.categoryId === category.id).length === 0 ? (
                        <div className="flex flex-col items-center justify-center ">
                            <h1 className="text-black text-lg font-montserrat">Nenhum produto cadastrado nessa categoria</h1>
                        </div>
                    ) : (
                        // Produtos
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 w-fit ">
                            {products.filter(product => product.categoryId === category.id).map(product => (
                                <div key={product.id}>
                                    <ProductCard product={product} />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}
import Image from "next/image"
import { getMockCategoriesByRestaurant, getMockMenuBySlug, getMockProductsByCategory } from "@/data/mock"

export default async function CategoryList({ slug }: { slug: string }) {
    const restaurant = getMockMenuBySlug(slug)

    const categories = getMockCategoriesByRestaurant(restaurant?.restaurant.id ?? "");

    const products = categories.flatMap(category => getMockProductsByCategory(category.id));

    return (
        <div className="flex flex-col p-4 text-black">
            {categories.map(category => (
                <div key={category.id} id={category.id} className="flex flex-col gap-5 p-4 mt-5">
                    <div className="flex flex-row gap-5">
                        <h3 className="text-black text-xl font-genty ">{category.name}</h3>
                        <div className="flex-1 h-0.5 bg-slate-300 self-center"></div>
                        <h3 className="text-black text-sm text-right font-bold ">{products.filter(product => product.categoryId === category.id).length} itens</h3>
                    </div>
                    {products.filter(product => product.categoryId === category.id).length === 0 ? (
                        <div className="flex flex-col items-center justify-center ">
                            <h1 className="text-black text-lg font-montserrat">Nenhum produto cadastrado nessa categoria</h1>
                        </div>
                    ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 w-fit ">
                        {products.filter(product => product.categoryId === category.id).map(product => (
                            <div key={product.id} className={`flex sm:gap-4 gap-2 justify-between  max-w-100 border border-gray-400 rounded-lg shadow-gray-400 shadow-lg p-6 mt-2 ${!product.available ? "opacity-50 grayscale" : ""}`}>
                                <div className="flex flex-col gap-6 justify-between">
                                    <div className="flex flex-col gap-2">
                                        <p className="font-genty">{product.name}</p>
                                        <p className="font-montserrat  sm:text-sm text-xs text-gray-600">{product.description}</p>
                                    </div>
                                    <p className="font-montserrat font-semibold text-md text-orange-800">{product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                                </div>
                                {product.imageUrl && <Image className="items-center object-cover rounded-xl w-40 h-40" src={product.imageUrl} alt={product.name} />}
                            </div>
                        ))}
                    </div>
                    )}
                </div>
            ))}
        </div>
    )
}
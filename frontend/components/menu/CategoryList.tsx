import { getMockCategoriesByRestaurant, getMockMenuBySlug, getMockProductsByCategory } from "@/data/mock"

export default async function CategoryList({ slug }: { slug: string }) {
    const restaurant = getMockMenuBySlug(slug)

    const categories = getMockCategoriesByRestaurant(restaurant?.restaurant.id ?? "");

    const products = categories.flatMap(category => getMockProductsByCategory(category.id));

    return (


        <div className="flex flex-col p-4 text-black">
            {categories.map(category => (
                <div key={category.id} className=" border border-slate-200 rounded-lg p-4 mt-5">
                    <div className="flex flex-row gap-5">
                        <h3 className="text-black text-xl font-bold ">{category.name}</h3>
                        <div className="flex-1 h-0.5 bg-slate-300 self-center"></div>
                        <h3 className="text-black text-sm text-right font-bold ">{products.filter(product => product.categoryId === category.id).length} itens</h3>
                    </div>

                    {products.filter(product => product.categoryId === category.id).map(product => (
                        <div key={product.id} className="w-fit border border-slate-200 rounded-lg p-4 mt-2">
                            <p>{product.name}</p>
                            <p>{product.description}</p>
                            <p>{product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}
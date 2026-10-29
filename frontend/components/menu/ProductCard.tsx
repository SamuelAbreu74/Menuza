import { Product } from "@/types/product"
import Image from "next/image"

export default function ProductCard({ product }: { product: Product }) {
    return (
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
    )
}
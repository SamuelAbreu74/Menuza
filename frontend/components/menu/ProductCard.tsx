"use client";
import { Product } from "@/types/product";
import Modal from "../ui/Modal";
import { useState } from "react";
import Image from "next/image";
import { Category } from "@/types/category";

export default function ProductCard({ product, category }: { product: Product, category: Category }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Função que controla a abertura do modal
    const handleCardClick = () => {
        if (product.available) {
            setIsModalOpen(true);
        }
    };

    return (
        <div
            key={product.id}
            onClick={handleCardClick}
            className={`flex sm:gap-4 justify-between max-w-100 border border-gray-400 rounded-lg shadow-gray-400 shadow-lg py-4 px-4 mt-2 
                ${!product.available ? "opacity-50 grayscale cursor-not-allowed" : "cursor-pointer"}`} >
            <div className="flex flex-col wrap-break-word justify-between gap-6">

                <div className="flex flex-col gap-2 wrap-break-word">
                    <p className="font-genty">{product.name}</p>
                    <p className="font-montserrat sm:text-sm text-xs text-gray-600">{product.description}</p>
                </div>
                <div className="flex flex-col md:flex-row justify-start md:justify-start items-start md:items-center gap-2">
                    <p className="font-montserrat font-semibold text-md text-orange-800">
                        {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                    </p>
                    {!product.available && (
                        <span className="text-gray-900 font-semibold font-montserrat text-sm bg-gray-400 rounded-xl p-2">Indisponível</span>
                    )}
                </div>

            </div>
            {product.imageUrl && (
                <Image
                    className="items-center object-cover rounded-xl w-40 h-35"
                    src={product.imageUrl}
                    alt={product.name}
                    width={100}
                    height={100}
                />
            )}


            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={category.name} image={product.imageUrl ?? undefined}>
                <div className="flex flex-col gap-1 pb-5 border-b border-gray-200 wrap-anywhere">
                    <h2 className="font-montserrat font-semibold text-3xl">{product.name}</h2>
                    <p className="font-montserrat text-sm text-gray-600">{product.description}</p>
                </div>
                <p className="font-montserrat font-semibold text-2xl pt-2 text-orange-800">
                    {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </p>
            </Modal>


        </div>
    );
}

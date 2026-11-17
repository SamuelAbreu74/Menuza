"use client"

import { getMockMenuBySlug } from "@/data/mock"
import { categoryIcons } from "@/lib/category-icons";
import { Pen, Trash, TriangleExclamationPoint } from "lucide-react";
import Button from "../ui/Button";
import { useState } from "react";
import DeleteModal from "../ui/DeleteModal";

interface CategoryListAdminProps {
    slug: string
    onEditCategory: (id: string) => void;
}


export default function CategoryListAdmin({ slug, onEditCategory }: CategoryListAdminProps) {
    const mockMenu = getMockMenuBySlug(slug)
    let categoriesCounter = 0;

    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);

    // Abrir modal de Delete
    const handleDelete = (id: string) => {
        setIsDeleteModalOpen(true)
        setSelectedCategoryId(id)
    }


    return (
        <div className="w-full flex flex-col gap-3" >
            <div className="grid grid-cols-3 gap-5">
                {/* Estado de lista vazia */}
                {mockMenu?.categories.length === 0 &&
                    <div className="col-span-3 flex justify-center items-center border border-black/10 bg-white/60 rounded-3xl shadow-xl min-h-60 min-w-fit">
                        <h1 className="text-2xl font-montserrat ">Nenhuma categoria encontrada</h1>
                    </div>
                }


                {/* Modal de Exclusão */}
                <DeleteModal isOpen={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)} title="Excluir Categoria?"  >
                    <div className="flex flex-col gap-5 ">
                        <div className="flex items-center gap-5 mt-5">
                            <TriangleExclamationPoint size={60} className="w-auto h-auto text-red-700 bg-red-100 rounded-full p-3" />
                            <p className="font-montserrat text-sm text-gray-600">A categoria <span className="font-bold text-black">{mockMenu?.categories.find((c) => c.id === selectedCategoryId)?.name}</span> será removida do cardápio. Esta ação não pode ser desfeita.</p>
                        </div>
                        <div className="flex w-full gap-5">
                            <Button className="flex-1 font-montserrat rounded-2xl hover:bg-gray-100" onClick={() => setIsDeleteModalOpen(false)}>Cancelar</Button>
                            <Button className="flex-1 bg-red-700 hover:bg-red-800 text-white font-semibold font-montserrat rounded-2xl" onClick={() => setIsDeleteModalOpen(false)}>Sim, excluir</Button>
                        </div>
                    </div>
                </DeleteModal>

                {mockMenu?.categories.map((category) => {
                    const Icon = category.icon
                        ? categoryIcons[category.icon as keyof typeof categoryIcons]
                        : categoryIcons.utensils;
                    categoriesCounter++
                    const categoriesCounterFormated = categoriesCounter.toString().padStart(2, '0')
                    return (
                        <div key={category.id} className="flex flex-col p-8 border border-black/10 bg-white/60 rounded-3xl min-h-60 min-w-fit">

                            {/* Ícone da categoria e contador */}
                            <div className="flex items-start justify-between">
                                <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-gray-100 text-green-900 mb-4">
                                    <Icon size={24} strokeWidth={1.8} />
                                </div>
                                <div>
                                    <p className="text-md font-montserrat font-extralight">{categoriesCounterFormated}</p>
                                </div>
                            </div>

                            {/* Nome da categoria */}
                            <h2 className="text-2xl font-medium font-montserrat">
                                {category.name}
                            </h2>

                            {/* Quantidade de produtos */}
                            <p className="text-md text-gray-600 font-montserrat font-extralight">
                                {category.products.length} produtos
                            </p>

                            {/* Linha */}
                            <div className="h-px bg-gray-200 mt-5 mb-5"></div>

                            <div className="flex items-center justfiy-center gap-5">
                                {/* botão de editar */}
                                <Button className="flex-1 gap-3 bg-gray-100 hover:bg-gray-200 rounded-xl font-medium text-sm font-montserrat" onClick={() => onEditCategory(category.id)}>
                                    <Pen size={20} />
                                    <p>Editar</p>
                                </Button>
                                {/* Botão de excluir */}
                                <Button className="hover:text-red-700 hover:bg-red-100 p-3.5 rounded-xl" onClick={() => handleDelete(category.id)}>
                                    <Trash size={20} strokeWidth={1.5} />
                                </Button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
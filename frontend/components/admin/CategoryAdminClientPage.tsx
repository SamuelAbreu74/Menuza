"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { CategoryIconName, categoryIcons } from "@/lib/category-icons";

import Button from "@/components/ui/Button";
import CategoryListAdmin from "@/components/admin/CategoryListAdmin";
import CreateAndEditCategoryModal from "@/components/ui/CreateAndEditCategoryModal";
import { getMockMenuBySlug } from "@/data/mock";
import { listAllCategories, createCategory, editCategory, deleteCategory } from "@/services/category.services";
import type { SubmitEvent } from "react";
import { useEffect } from "react";
import { useCategories } from "@/hooks/useCategories";

interface CategoryAdminClientPageProps {
    slug: string;
}

export default function CategoryAdminClientPage({
    slug,
}: CategoryAdminClientPageProps) {

    // Dados
    const restaurant = getMockMenuBySlug(slug);
    const restaurantId = restaurant?.restaurant.id;
    const categories = useCategories(restaurantId);

    // Estados para o input e categoria

    const [categoryName, setCategoryName] = useState("");
    const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);
    const [selectedIcon, setSelectedIcon] = useState<CategoryIconName>("utensils");

    // Estado do Modal
    const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);

    // Abrir modal de criação
    const handleCreateCategory = () => {
        setSelectedCategoryId(null);
        setCategoryName("");
        setSelectedIcon("utensils");
        setIsCategoryModalOpen(true);
    };

    // Abrir modal de edição
    const handleEditCategory = (id: string) => {
        const category = categories.find((category) => category.id === id);

        if (!category) return;


        setSelectedCategoryId(id);
        setCategoryName(category.name)
        setSelectedIcon(category.icon || "utensils");
        setIsCategoryModalOpen(true);

    };


    // Edita uma categoria
    const handleSubmitEditCategory = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!restaurant?.restaurant.id) return;

        const name = categoryName.trim()
        if (!name) return;

        editCategory(restaurant.restaurant.id, selectedCategoryId!, {
            name: name,
            icon: selectedIcon,
        })

        const category = categories.find((category) => category.id === selectedCategoryId);

        if (!category) return;


        handleCloseModal();
    }

    // Criar nova categoria
    const handleSubmitNewCategory = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!restaurant?.restaurant.id) return;

        const name = categoryName.trim()
        if (!name) return;

        // criar objeto da categoria
        createCategory(restaurant.restaurant.id, {
            name: name,
            icon: selectedIcon,
        });

        handleCloseModal();
    };

    // Deletar categoria
    const handleDeleteCategory = (id: string) => {
        if (!restaurant?.restaurant.id) return;

        deleteCategory(restaurant.restaurant.id, id);


    };

    // Fechar modal
    const handleCloseModal = () => {
        setIsCategoryModalOpen(false);
        setSelectedCategoryId(null);
    };



    useEffect(() => {
        if (!restaurant?.restaurant.id) return;

        listAllCategories(restaurant.restaurant.id);

        
    }, [restaurant?.restaurant.id])

    return (
        <div className="w-full flex flex-col gap-3 p-10">

            {/* Cabeçalho */}
            <div className="mb-10 flex justify-between items-end">
                <div className="flex flex-col gap-2">
                    <span className="uppercase font-bold text-sm text-orange-900">
                        Cardápio
                    </span>

                    <h1 className="text-4xl font-bold font-montserrat">
                        Categorias
                    </h1>

                    <p>
                        Organize o cardápio em seções. Elas aparecem na ordem abaixo para os clientes.
                    </p>
                </div>

                <Button
                    className="w-fit bg-green-900 text-white rounded-2xl hover:bg-green-800 gap-3 items-center justify-center"
                    onClick={handleCreateCategory}
                >
                    <Plus />
                    <p className="font-medium font-montserrat">
                        Nova categoria
                    </p>
                </Button>
            </div>

            {/* Lista de categorias */}
            <CategoryListAdmin
                slug={slug}
                categories={categories}
                onEditCategory={handleEditCategory}
                onDeleteCategory={handleDeleteCategory}
            />

            {/* Modal de criação e edição */}
            <CreateAndEditCategoryModal
                isOpen={isCategoryModalOpen}
                onClose={handleCloseModal}
                title={selectedCategoryId ? "Editar Categoria" : "Nova Categoria"}
            >
                <div className="flex flex-col gap-5">

                    <div>
                        <form onSubmit={selectedCategoryId ? handleSubmitEditCategory : handleSubmitNewCategory} className="flex flex-col gap-3">

                            <div>
                                <label htmlFor="" className="font-semibold">Nome da categoria: </label>
                                <div className="w-full rounded-2xl p-0.75 border-green-900 focus-within:ring-1 focus-within:ring-green-900 focus-within:outline-none transition-all ">
                                    {/* Caso editar, nome da categoria deve vir aqui com o value abaixo */}
                                    <input type="text" name="name" placeholder="Ex.: Pratos principais"
                                        value={categoryName}
                                        onChange={(event) => setCategoryName(event.target.value)}
                                        className="w-full text-lg rounded-2xl p-3 border border-gray-300 focus:outline-1 outline-green-900 transition-all " />
                                </div>
                            </div>

                            {/* Lista de ícones (lucide) */}
                            <div className="flex flex-col gap-5">

                                <div className="flex flex-col gap-2 ">
                                    <label htmlFor="" className="font-semibold">Ícone: </label>
                                    <div className="grid grid-cols-5 gap-2 flex-wrap">
                                        {(Object.keys(categoryIcons) as CategoryIconName[]).map((iconName) => {
                                            const Icon = categoryIcons[iconName];
                                            return (
                                                // o icone marcado durante a edição vai ser o icone atual

                                                <button
                                                    key={iconName}
                                                    type="button"
                                                    onClick={() => setSelectedIcon(iconName)}
                                                    className={`flex flex-col items-center justify-center gap-2 p-3 rounded-xl border transition-colors cursor-pointer ${selectedIcon === iconName
                                                        ? "border-green-900 bg-green-900 text-white"
                                                        : "border-gray-200 hover:bg-gray-100"
                                                        }`}
                                                >
                                                    <div className="p-2">
                                                        <Icon size={22} />
                                                    </div>
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                            <div className="flex w-full gap-5">
                                <Button
                                    className="flex-1 font-montserrat rounded-2xl hover:bg-gray-100"
                                    onClick={handleCloseModal}
                                    type="button"
                                >
                                    Cancelar
                                </Button>

                                <Button
                                    className="flex-1 bg-red-700 hover:bg-red-800 text-white font-semibold font-montserrat rounded-2xl"
                                    type="submit"
                                >
                                    Salvar
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </CreateAndEditCategoryModal>

        </div>
    );
}
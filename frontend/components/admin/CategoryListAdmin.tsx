import { getMockMenuBySlug } from "@/data/mock"
import { categoryIcons } from "@/lib/category-icons";
import { Pen, Trash } from "lucide-react";
import Button from "../ui/Button";

interface CategoryListAdminProps {
    slug: string
}


export default async function CategoryListAdmin({ slug }: CategoryListAdminProps) {
    const mockMenu = getMockMenuBySlug(slug)
    let categoriesCounter = 0;


    return (
        <div className="w-full flex flex-col gap-3" >
            <div className="grid grid-cols-3 gap-5">
                {/* Estado de lista vazia */}
                {mockMenu?.categories.length === 0 &&
                    <div className="col-span-3 flex justify-center items-center border border-black/10 bg-white/60 rounded-3xl shadow-xl min-h-60 min-w-fit">
                        <h1 className="text-2xl font-montserrat ">Nenhuma categoria encontrada</h1>
                    </div>
                }

                {mockMenu?.categories.map((category) => {
                    const Icon = category.icon
                        ? categoryIcons[category.icon as keyof typeof categoryIcons]
                        : categoryIcons.utensils;
                        categoriesCounter++
                        const categoriesCounterFormated = categoriesCounter.toString().padStart(2, '0')
                    return (
                        <div key={category.id} className="flex flex-col p-8 border border-black/10 bg-white/60 rounded-3xl min-h-60 min-w-fit">

                            {/* Ícone da categoria */}
                            <div className="flex items-start justify-between">
                                <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-gray-100 text-green-900 mb-4">
                                    <Icon size={24} strokeWidth={1.8} />
                                </div>
                                <div>
                                    <p className="text-md font-montserrat font-extralight">{categoriesCounterFormated}</p>
                                </div>
                            </div>

                            {/* Nome da categoria */}
                            <h2 className="text-2xl font-semibold font-montserrat">
                                {category.name}
                            </h2>

                            {/* Quantidade de produtos */}
                            <p className="text-md">
                                {category.products.length} produtos
                            </p>

                            {/* Linha */}
                            <div className="h-px bg-gray-200 mt-5 mb-5"></div>
                            
                            <div className="flex items-center justfiy-center gap-5">
                                {/* botão de editar */}
                                <Button className="gap-3 bg-gray-100 hover:bg-gray-200 font-medium text-sm font-montserrat">
                                    <Pen size={20} />
                                    <p>Editar</p>
                                </Button>
                                {/* Botão de excluir */}
                                <Button className="flex-1 hover:text-red-700 hover:bg-red-100 p-3.5">
                                    <Trash size={20} />
                                </Button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
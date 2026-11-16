import CategoryListAdmin from "@/components/admin/CategoryListAdmin"
import { Suspense } from "react";
import Button from "@/components/ui/Button";
import { Plus, PlusCircle } from "lucide-react";

interface AsyncCategoryPageAdminProps {
    params: Promise<{ slug: string }>;
}

async function AsyncCategoryPageAdmin({ params }: AsyncCategoryPageAdminProps) {
    const { slug } = await params;
    return <CategoryListAdmin slug={slug} />;
}


export default function CategoryPageAdmin({params}: {params: Promise<{slug: string}>}) {
    
    return (
        <div className="w-full flex flex-col gap-3 p-10">
            <div className="mb-10 flex justify-between items-end">
                <div className="flex flex-col gap-2">
                    <span className="uppercase font-bold text-sm text-orange-900">Cardápio</span>
                    <h1 className="text-4xl font-bold font-montserrat">Categorias</h1>
                    <p className="">Organize o cardápio em seções. Elas aparecem na ordem abaixo para os clientes</p>
                </div>
                <Button className="w-fit bg-green-900 text-white rounded-2xl hover:bg-green-800 gap-3 items-center justify-center">
                    <Plus />
                    <p className="font-medium font-montserrat">Nova categoria</p>
                </Button>
            </div>
            <Suspense fallback={
                <div className="w-full flex flex-col gap-3 p-30">Carregando categorias...</div>   
            }>
                <AsyncCategoryPageAdmin params={params} />
            </Suspense>
        </div>
    )
}
import CategoryListAdmin from "@/components/admin/CategoryListAdmin"
import { Suspense } from "react";

interface AsyncCategoryPageAdminProps {
    params: Promise<{ slug: string }>;
}

async function AsyncCategoryPageAdmin({ params }: AsyncCategoryPageAdminProps) {
    const { slug } = await params;
    return <CategoryListAdmin slug={slug} />;
}


export default function CategoryPageAdmin({params}: {params: Promise<{slug: string}>}) {
    
    return (
        <div className="w-full flex flex-col gap-3 p-30">
            <Suspense fallback={
                <div className="w-full flex flex-col gap-3 p-30">Carregando categorias...</div>   
            }>
                <AsyncCategoryPageAdmin params={params} />
            </Suspense>
        </div>
    )
}
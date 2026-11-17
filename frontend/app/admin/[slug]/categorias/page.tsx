import { Suspense } from "react";
import CategoryAdminClientPage from "@/components/admin/CategoryAdminClientPage";

interface CategoryPageAdminProps {
    params: Promise<{ slug: string }>;
}

async function AsyncCategoryPageAdmin({ params }: CategoryPageAdminProps) {
    const { slug } = await params;

    return <CategoryAdminClientPage slug={slug} />;
}

// Página principal
export default function CategoryPageAdmin({ params }: CategoryPageAdminProps) {
    return (
        <Suspense
            fallback={
                <div className="w-full p-10">
                    Carregando categorias...
                </div>
            }
        >
            <AsyncCategoryPageAdmin params={params} />
        </Suspense>
    );
}
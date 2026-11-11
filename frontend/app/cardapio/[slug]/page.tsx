import { Suspense } from "react";
import CategoryList from "@/components/menu/CategoryList";
import CategoryListSkeleton from "@/components/menu/CategoryListSkeleton";
import MenuHeader from "@/components/menu/MenuHeader";
import { getMockMenuBySlug, getMockCategoriesByRestaurant } from "@/data/mock";
import { redirect } from "next/navigation";
import CategoryNavBar from "@/components/menu/CategoryNavBar";
import { ActiveCategoryProvider } from "@/components/menu/ActiveCategoryContext";

interface CardapioProps {
    params: Promise<{
        slug: string;
    }>
}


export default async function Cardapio({ params }: CardapioProps) { 
    const { slug } = await params;
    const menu = getMockMenuBySlug(slug)

    if (!menu) {
        console.log("Cardapio não encontrado")
        return redirect("/cardapio");
    }

    const categories = getMockCategoriesByRestaurant(menu.restaurant.id);

    return (
        <ActiveCategoryProvider>
            <div className="flex flex-col justify-start  bg-background font-sans dark:bg-black text-white">
                <MenuHeader slug={slug} />
                <CategoryNavBar categories={categories} />
                <Suspense fallback={<CategoryListSkeleton />}>
                    <CategoryList slug={slug} />
                </Suspense>
            </div>
        </ActiveCategoryProvider>
    )
}

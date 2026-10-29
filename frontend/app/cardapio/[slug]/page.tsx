import { Suspense } from "react";
import CategoryList from "@/components/menu/CategoryList";
import CategoryListSkeleton from "@/components/menu/CategoryListSkeleton";
import MenuHeader from "@/components/menu/MenuHeader";
import { getMockMenuBySlug } from "@/data/mock";
import { redirect } from "next/navigation";
import CategoryNavBar from "@/components/menu/CategoryNavBar";

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

    return (
        <div className="flex flex-col justify-start  bg-background font-sans dark:bg-black text-white">
            <MenuHeader slug={slug} />
            <CategoryNavBar restaurantId={menu.restaurant.id} />
            <Suspense fallback={<CategoryListSkeleton />}>
                <CategoryList slug={slug} />
            </Suspense>
        </div>
    )
}
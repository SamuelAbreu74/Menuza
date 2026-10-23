import MenuHeader from "@/components/menu/menuHeader";
import { getMockMenuBySlug } from "@/data/mock";
import { redirect } from "next/navigation";
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
        <div className="flex flex-col flex-1 justify-start  bg-background font-sans dark:bg-black text-white">
            <MenuHeader slug={slug}/>
        </div>
    )
}
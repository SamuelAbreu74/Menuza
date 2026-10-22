import MenuHeader from "@/components/menu/menuHeader";

interface CardapioProps {
    params: Promise<{
        slug: string;
    }>
}


export default async function Cardapio({ params }: CardapioProps) {
    const { slug } = await params;

    return (
        <div className="flex flex-col flex-1 justify-start  bg-background font-sans dark:bg-black text-white">
            <MenuHeader />
            {/* <h1 className="text-2xl font-bold mb-8 mt-5 w-full border-t border-gray-500">Cardápio {slug}</h1> */}
        </div>
    )
}
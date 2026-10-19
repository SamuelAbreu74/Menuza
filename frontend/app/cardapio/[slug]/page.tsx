interface CardapioProps {
    params: Promise<{
        slug: string;
    }>
}


export default async function Cardapio({ params }: CardapioProps) {
    const { slug } = await params;

    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-green-950 font-sans dark:bg-black">
            <h1 className="text-white text-2xl font-bold mb-8">Cardápio {slug}</h1>
        </div>
    )
}
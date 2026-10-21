'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function BuscarCardapio() {
    const [nomeDoCardapio, setNomeDoCardapio] = useState("");
    const router = useRouter();

    // Leva o usuário para o cardápio do restaurante
    function handleCardapio(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault();

        const slug = nomeDoCardapio
            .trim()
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-|-$/g, "");

        if (!slug) {
            alert("Digite o nome do cardápio");
            return;
        }

        router.push(`/cardapio/${encodeURIComponent(slug)}`);
    }

    return (
        <div className="flex flex-1 flex-col items-center justify-center bg-orange-700 font-sans dark:bg-black">
            <h1 className="mb-8 text-2xl font-bold text-white">
                Digite o nome do seu cardápio
            </h1>

            <form className="flex w-full max-w-md flex-col items-center gap-2" onSubmit={handleCardapio}>
                <label className="mb-2 text-white" htmlFor="nome">
                    Nome do cardápio:
                </label>

                <input
                    className="w-full rounded-md bg-white p-2 text-black"
                    type="text"
                    name="nome"
                    id="nome"
                    value={nomeDoCardapio}
                    onChange={(event) => setNomeDoCardapio(event.target.value)}
                    placeholder="Ex.: Sabor da Vila"
                    required
                />

                <button className="w-full cursor-pointer rounded-md bg-green-500 p-2 text-white transition-colors hover:bg-green-600" type="submit">
                    Buscar
                </button>
            </form>
        </div>
    );
}
'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import { getMockMenuBySlug } from "@/data/mock";

export default function BuscarCardapio() {
    const [nomeDoCardapio, setNomeDoCardapio] = useState("");
    const [erroCardapio, setErroCardapio] = useState(false);
    const router = useRouter();

    // Leva o usuário para o cardápio do restaurante
    async function handleCardapio(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault();

        const restaurant = getMockMenuBySlug(nomeDoCardapio.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""));

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

        if (restaurant) {
            setErroCardapio(false);
            router.push(`/cardapio/${encodeURIComponent(slug)}`);
        } else {
            setErroCardapio(true);
        }
    }
    
    return (
        <div className="flex flex-1 flex-col items-center justify-center bg-cyan-950 font-sans dark:bg-black">

            <form className="flex w-full max-w-md flex-col items-center gap-2" onSubmit={handleCardapio}>
                <label className="mb-2 text-white" htmlFor="nome">
                    <h1 className="mb-2 text-2xl font-bold text-white">
                        Digite o nome do seu cardápio:
                    </h1>
                </label>

                {erroCardapio && (
                    <p className="text-red-500">Cardápio não encontrado</p>
                )}

                <input
                    className="w-full rounded-md bg-white p-2 text-black"
                    type="text"
                    name="nome"
                    id="nome"
                    value={nomeDoCardapio}
                    onChange={(event) => {
                        setNomeDoCardapio(event.target.value);
                        if (erroCardapio) setErroCardapio(false);
                    }}
                    placeholder="Ex.: Sabor da Vila"
                    required
                />


                <button className="w-full cursor-pointer rounded-md bg-blue-600 p-2 text-white transition-colors hover:bg-blue-700" type="submit">
                    Buscar
                </button>
            </form>
        </div>
    );
}
"use client"
import logo from '@/assets/icone.png'
import restaurant_fallback_profile from '../../assets/restaurant-profile-fallback.jpg'
import RestaurantImage from "../ui/RestaurantImage"
import { getMockMenuBySlug } from "../../data/mock"
import Link from 'next/link'
import { usePathname } from "next/navigation";

export default function SideBar({ slug }: { slug: string }) {

    const menu = getMockMenuBySlug(slug)
    const dybamicRestaurantSrc = menu?.restaurant.imageUrl || restaurant_fallback_profile;

    const pathname = usePathname();

    const isDashboardActive = pathname === "/admin";
    const isCategoriasActive = pathname.startsWith("/admin/categorias");
    const isProdutosActive = pathname.startsWith("/admin/produtos");
    const isQrCodeActive = pathname.startsWith("/admin/qr_code")

    // Exemplo aplicando classe condicional:
    // className={`flex items-center gap-2 px-3 py-3 rounded-2xl transition-colors ${
    //     isDashboardActive ? "bg-background text-green-900" : "hover:bg-background hover:text-green-900"
    // }`}


    return (
        <aside className="w-fit min-h-screen bg-green-900 text-white shadow-lg border-r rounded-r-2xl ">
            <div className="px-5 py-8">
                <div className="flex items-end gap-2 mb-10">
                    <img className='w-10 h-10' src={logo.src} alt="Logo Menuza" />
                    <h1 className="text-3xl font-genty ">Menuza</h1>
                </div>

                {/* Informações do restaurante */}
                <div className="flex items-center gap-2 w-60 px-3 py-2 mb-10 rounded-3xl bg-green-100/15 ">
                    {/* Imagem de perfil do restaurante */}
                    <div className=" flex w-15 h-15 items-center rounded-full overflow-hidden">
                        <RestaurantImage initialSrc={dybamicRestaurantSrc} fallbackSrc={restaurant_fallback_profile} />
                    </div>
                    {/* Nome do restaurante e o status */}
                    <div className="flex flex-col w-full justify-center">
                        <h3 className="flex font-genty text-md">Sabor da Vila</h3>
                        <p className="flex items-center text-xs font-montserrat gap-2"><span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span><span className="h-2 w-2 rounded-full bg-green-500"></span></span> Cardápio no ar</p>
                    </div>
                </div>

                {/* Navbar */}
                <nav className="flex flex-col w-full gap-2">
                    <h3 className="text-sm text-white/70 px-3 font-semibold uppercase font-montserrat mb-3" >Gerenciar</h3>

                    <div className="flex flex-col gap-2">
                        <Link href="/admin" className={`flex items-center gap-2 px-3 py-3 rounded-2xl hover:bg-background hover:text-green-900 transition-colors ${isDashboardActive ? "bg-background text-green-900" : ""}`}>
                            <svg fill="white" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M19 5v2h-4V5zM9 5v6H5V5zm10 8v6h-4v-6zM9 17v2H5v-2zM21 3h-8v6h8zM11 3H3v10h8zm10 8h-8v10h8zm-10 4H3v6h8z" />
                            </svg>
                            <span className="text-sm font-montserrat font-semibold">Dashboard</span>
                        </Link>
                    </div>
                    <div>
                        <Link href="/admin/categorias" className={`flex items-center gap-2 px-3 py-4 rounded-2xl hover:bg-background hover:text-green-900 transition-colors ${isCategoriasActive ? "bg-background text-green-900" : ""}`}>
                            {/* icone de categoria */}
                            <svg fill="white" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M6.5 10C7.3 10 8 9.3 8 8.5S7.3 7 6.5 7S5 7.7 5 8.5S5.7 10 6.5 10M9 6l7 7l-5 5l-7-7V6zm0-2H4c-1.1 0-2 .9-2 2v5c0 .6.2 1.1.6 1.4l7 7c.3.4.8.6 1.4.6s1.1-.2 1.4-.6l5-5c.4-.4.6-.9.6-1.4c0-.6-.2-1.1-.6-1.4l-7-7C10.1 4.2 9.6 4 9 4m4.5 1.7l1-1l6.9 6.9c.4.4.6.9.6 1.4s-.2 1.1-.6 1.4L16 19.8l-1-1l5.7-5.8z" />
                            </svg>
                            <span className="text-sm font-montserrat font-semibold">Categorias</span>
                        </Link>
                    </div>
                    <div>
                        <Link href="/admin/produtos" className={`flex items-center gap-2 px-3 py-4 rounded-2xl hover:bg-background hover:text-green-900 transition-colors ${isProdutosActive ? "bg-background text-green-900" : ""}`}>
                            {/* icone de produto */}
                            <svg fill="white" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M1 22c0 .54.45 1 1 1h13c.56 0 1-.46 1-1v-1H1zM8.5 9C4.75 9 1 11 1 15h15c0-4-3.75-6-7.5-6m-4.88 4c1.11-1.55 3.47-2 4.88-2s3.77.45 4.88 2zM1 17h15v2H1zM18 5V1h-2v4h-5l.23 2h9.56l-1.4 14H18v2h1.72c.84 0 1.53-.65 1.63-1.47L23 5z" />
                            </svg>
                            <span className="text-sm font-montserrat font-semibold">Produtos</span>
                        </Link>
                    </div>
                    <div>
                        <Link href="/admin/qr_code" className={`flex items-center gap-2 px-3 py-4 rounded-2xl hover:bg-background hover:text-green-900 transition-colors ${isQrCodeActive ? "bg-background text-green-900" : ""}`}>
                            {/* icone de Qr Code */}
                            <svg fill="white" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M3 11h2v2H3zm8-6h2v4h-2zm-2 6h4v4h-2v-2H9zm6 0h2v2h2v-2h2v2h-2v2h2v4h-2v2h-2v-2h-4v2h-2v-4h4v-2h2v-2h-2zm4 8v-4h-2v4zM15 3h6v6h-6zm2 2v2h2V5zM3 3h6v6H3zm2 2v2h2V5zM3 15h6v6H3zm2 2v2h2v-2z" />
                            </svg>
                            <span className="text-sm font-montserrat font-semibold">QR Code</span>
                        </Link>
                    </div>

                </nav>

            </div>


        </aside>
    )
}
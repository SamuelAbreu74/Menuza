import Image from 'next/image';
import logo from '@/assets/icone.png';
import restaurant_image from "@/assets/restaurant-profile-fallback.jpg"
import SearchBar from '@/components/ui/SearchBar';
import RestaurantImage from '@/components/ui/RestaurantImage';

import { getMockMenuBySlug } from '@/data/mock';


export default async function MenuHeader({ slug }: { slug: string }) {
    const menu = getMockMenuBySlug(slug)
    
    const dybamicRestaurantSrc = menu?.restaurant.imageUrl || restaurant_image;
    


    return (
        <header className='bg-[#003836] w-full flex flex-col justify-center items-center gap-5 mb-10 pt-5 border-b-white border-b'>
            {/* Logotipo do Menuza */}
            <div className="flex flex-row items-end">
                <Image src={logo} alt="Logo" width={40} />
                <h1 className="text-white text-3xl font-genty tracking-widest">Menuza</h1>
            </div>

            {/* Informações do restaurante */}
            <div className='flex flex-col md:items-center items-center justify-center gap-8 pr-5 pl-5 max-w-3xl'>
                <div className='flex flex-col md:flex-row md:items-center md:justify-center items-center gap-5'>
                    <RestaurantImage initialSrc={dybamicRestaurantSrc} fallbackSrc={restaurant_image} />
                    <h2 className='w-full text-5xl md:text-6xl font-genty'>{menu?.restaurant.name}</h2>
                </div>
                <p className='w-full md:text-center text-center text-xl md:text-2xl font-montserrat font-light'>{menu?.restaurant.description}</p>

                <div className='w-full flex flex-col  flex-wrap-reverse md:flex-row md:items-center items-center justify-center md:gap-10 gap-5'>
                    {/* Svg de relógio */}
                    <div className='flex flex-row gap-1  bg-green-500/70 rounded pl-3 pr-4 pt-2 pb-2 items-center'>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 7V12L14.5 10.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>

                        <p className='font-montserrat font-medium'>Ter a Dom | 11h às 23h</p>
                    </div>

                    {/* Svg de localização */}
                    <div className='flex flex-row gap-1 bg-green-500/70 rounded pl-3 pr-4 pt-2 pb-2 items-center'>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M10 11.5C11.933 11.5 13.5 9.933 13.5 8C13.5 6.067 11.933 4.5 10 4.5C8.067 4.5 6.5 6.067 6.5 8C6.5 9.933 8.067 11.5 10 11.5ZM10 6.5C10.8284 6.5 11.5 7.17157 11.5 8C11.5 8.82843 10.8284 9.5 10 9.5C9.17157 9.5 8.5 8.82843 8.5 8C8.5 7.17157 9.17157 6.5 10 6.5Z" fill="#ffffff"></path> <path fillRule="evenodd" clipRule="evenodd" d="M2.5 8.12313C2.5 12.3656 6.88183 19.5 10 19.5C13.1182 19.5 17.5 12.3656 17.5 8.12313C17.5 3.91715 14.1464 0.5 10 0.5C5.85362 0.5 2.5 3.91715 2.5 8.12313ZM15.5 8.12313C15.5 11.4027 11.7551 17.5 10 17.5C8.24487 17.5 4.5 11.4027 4.5 8.12313C4.5 5.0134 6.96668 2.5 10 2.5C13.0333 2.5 15.5 5.0134 15.5 8.12313Z" fill="#ffffff"></path> </g>
                        </svg>

                        <p className='font-montserrat font-medium '>Rua das Flores , 153 - Aquiraz</p>
                    </div>
                </div>
                <div className="w-full flex items-center justify-center translate-y-6.25">
                    <SearchBar />
                </div>
            </div>
        </header>
    );
}
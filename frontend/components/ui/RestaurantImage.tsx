"use client"
import { useState } from "react"
import Image, { StaticImageData } from "next/image"

interface RestaurantImageProps {
    initialSrc: string | StaticImageData;
    fallbackSrc: StaticImageData;
}

export default function RestaurantImage({ initialSrc, fallbackSrc } : RestaurantImageProps) {
    const [src, setSrc] = useState(initialSrc)
    return (
        <Image src={src} alt='restaurant-profile-image' onError={() => setSrc(fallbackSrc)} width={100} height={100} className="rounded-full aspect-square object-cover" />
    )
}
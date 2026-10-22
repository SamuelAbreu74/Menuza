import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Menuza",
  description: "Cardápio digital para pequenos restaurantes, cafés, lanchonetes e bares",
};


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (

    <html lang="pt-br" className="h-full antialiased">
      <head>

        <link href="https://db.onlinewebfonts.com/c/fea031a5eb1f633a622138fe25624d42?family=Genty+Sans" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Big+Shoulders:opsz,wght@10..72,100..900&family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Kumbh+Sans:wght,YOPQ@100..900,300&family=Lexend+Deca:wght@100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Outfit:wght@100..900&family=Red+Hat+Display:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet"></link>
      </head>
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}

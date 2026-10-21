import Image from 'next/image'
import logo from "../assets/icone.png"


export default function Home() {
  return (
    <main className="flex flex-col flex-1 items-center justify-center text-center bg-background font-sans dark:bg-background">
      <div className="flex gap-2 items-end">
        <Image src={logo} alt='logo-menuza' width={45} />
        <h1 className="text-4xl font-bold  text-black dark: ext-foreground">Menuza</h1>
      </div>
      <h2 className="text-2xl mb-8 text-black dark:text-foreground">O cardápio digital para o seu restaurante.</h2>
    </main>
  );
}

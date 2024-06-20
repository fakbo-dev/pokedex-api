import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { FaArrowRight } from "react-icons/fa"
const Header = () => {
    return (
        <header className="sticky top-0 z-30 ">
            <div className="container mx-auto  flex  flex-row justify-between  h-full items-center">
                {/* Logo */}
                <Link href="https://pokeapi.co/" target="_BLANK">
                    <Image src="/assets/logo.png" alt="logo" width={150} height={150} />
                </Link>

                {/* Text */}
                <div className="flex items-center justify-between">
                    <h1 className="mx-5 text-[25px] xl:h1">Fakbo dev</h1>
                </div>
                <Button variant="outline" className="py-6 px-4 xl:px-8">
                    <Link href="https://github.com/fakbo-dev" target="_BLANK" className="flex justify-evenly ">
                        Visita mi Github</Link>
                </Button>
            </div>
        </header>
    )
}

export default Header
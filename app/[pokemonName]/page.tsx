
// localhost:3000/pikachu

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa"
import { getPokemon } from "@/lib/PokemonAPi";
import PokemonImage from "@/components/PokemonImage";
import { Progress } from "@/components/ui/progress";
//pokemonName

//pokemonName = "pikachu" -> show the pikachu page
const PokemonPage = async ({ params }: { params: { pokemonName: string } }) => {
    // Object Destructuring
    const { pokemonName } = params;
    const pokemonObject = await getPokemon(pokemonName);

    return (
        <main>
            <div className="container mx-auto flex flex-col justify-center items-center mt-32 gap-8">

                {/* Back Link */}
                <Button className=""><Link href="/" className="flex items-center transition-all duration-300 gap-2">{<FaArrowLeft />} Volver atras</Link></Button>

                {/* Text */}
                <h2 className="h2">{pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}</h2>
                <div className="relative h-[300px] w-[300px]">
                    <PokemonImage
                        name={pokemonName}
                        image={pokemonObject.sprites.other["official-artwork"].front_default}
                    />
                </div>
                <h3>Weight: {pokemonObject.weight}</h3>
                {pokemonObject.stats.map((statsObject: any) => {
                    const statsName = statsObject.stat.name;
                    const statsValue = statsObject.base_stat;

                    return (
                        <div className="flex items-stretch w-[500px]" key={statsName}>
                            <h3 className="p-3 w-2/4">{statsName}: {statsValue}</h3>
                            <Progress value={statsValue} className="w-2/4 m-auto" />
                        </div>
                    )

                })}
            </div>
        </main>
    )
}

export default PokemonPage
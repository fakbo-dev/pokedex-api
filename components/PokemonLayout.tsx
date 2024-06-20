"use client"
// Hooks
import { useState } from "react"
// Components
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import PokemonCard from "./PokemonCard";

interface PokemonLayoutProps {
    pokemonList: any;
}

const PokemonLayout = ({ pokemonList }: PokemonLayoutProps) => {
    const [searchText, setSearchText] = useState("");

    // Filter the text
    const searchFilter = (pokemonList: any) => {
        return pokemonList.filter(
            (pokemon: any) => pokemon.name.toLowerCase().includes(searchText.toLowerCase())
        );
    }

    // Save the filtered array of objects
    const filteredPokemonList = searchFilter(pokemonList);


    return (
        <section className="relative mt-[80px] xl:mt-[130px]">
            <div className="container mx-auto xl:px-0">
                <div className="flex flex-col justify-center items-center gap-8">
                    {/* Text */}
                    <div className="flex flex-col text-center justify-center items-center">
                        <h1 className="h1 font-robotoSlab mb-5">Pokedex API</h1>
                        <h2 className="h2">Encuentra tu Pokemon!</h2>
                    </div>

                    {/* Search */}
                    <div className="flex  flex-col justify-center w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="pokemonName" className="text-2xl my-3">Nombre del Pokemon</Label>
                        <Input
                            type="text"
                            value={searchText}
                            id="pokemonName"
                            placeholder="bulbasaur, charmander, squirtle, pikachu..."
                            onChange={(e) => setSearchText(e.target.value)}
                            autoComplete="off"
                        />
                    </div>
                    <div className="grid text-center grid-cols-3 xl:grid-cols-3 gap-4 mb-48">
                        {filteredPokemonList.map((pokemon: any) => (
                            <PokemonCard name={pokemon.name} key={pokemon.name + "name"} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PokemonLayout;


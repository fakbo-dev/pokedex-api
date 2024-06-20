// Component
import PokemonLayout from "@/components/PokemonLayout";
import { getPokemonList } from "@/lib/PokemonAPi";

// Load in data.
// we can pass data from to a client component.


// text input: filter the pokemon card under it
// text input -> "use client" we need access to useState to handle the input
// when text is inputted -> filter through our current pokemon data.
// ("use client") pokemonLayout -> (text input, showing all the card that are the result of the search)

// we are going to get data for the 151 pokemon from a server component
// Pass the data to PokemonLayout

// steps to make the app

//1. create a pokemonLayout (and more components)
//2. load in data from Pokemon API (151 Original Pokemons)
//3. Pass in data to PokemonLayout, show all the pokemon from API call




const page = async () => {
    const pokemonList = await getPokemonList();
    return (
        <main className="max-w-[1920px] mx-auto">
            <PokemonLayout pokemonList={pokemonList} />
        </main>
    );
};

export default page;

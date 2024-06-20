import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
interface PokemonCardProps {
    name: string,
}

const PokemonCard = ({ name }: PokemonCardProps) => {
    return (
        <Link href={name} >
            <Card className="hover:bg-slate-500 transition-all ease-linear delay-75 border-2 py-0">
                <CardHeader>
                    {name}
                </CardHeader>
            </Card>
        </Link>
    )
}

export default PokemonCard
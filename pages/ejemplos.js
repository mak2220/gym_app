"use client"

import clientPromise from "../lib/mongodb";

export default function Ejemplos ({ejemplos}){
    return(
        <div className="min-h-screen bg-gray-100">
            <header className="bg-gradient-to-b from-green-700/80 to-green-300/50 text-black py-12 text-center">
                <h1 className="text-4xl font-bold">Ejemplos de Ejercicios</h1>
                <p className="mt-2 text-lg">
                    Estos son algunos de los ejercicios que te enseñaremos a realizar
                </p>
            </header>
            <main>
                <ul>
                {ejemplos.map((ejemplo)=>(
                    <li 
                        key={ejemplo._id}
                        className="text-black"
                    >
                        <h1>{ejemplo.ejercise}</h1>
                    </li>
                ))}
                </ul>
            </main>
        </div>
    )
}

export async function getServerSideProps() {
    try {
        const client = await clientPromise;
        const db = client.db("app_gym");

        const ejemplos = await db
            .collection("ejemplos")
            .find({})
            .sort({ _id: 1 })
            .limit(20)
            .toArray();

        return {
            props: { ejemplos: JSON.parse(JSON.stringify(ejemplos)) },
            
        };
    } catch (e) {
        console.error(e);
    }
}

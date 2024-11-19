"use client";

import clientPromise from "../lib/mongodb";
import Image from 'next/image';


export default function Staff ({staff}) {
    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-12 text-center">
                <h1 className="text-4xl font-bold">Conoce a Nuestro Equipo</h1>
                <p className="mt-2 text-lg">Profesionales apasionados por ayudarte a alcanzar tus metas</p>
            </header>

            <main className="py-12 px-6 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {staff.map((member) => (
            <div
                key={member._id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
            <Image
                src={member.image}
                alt={member.name}
                width={400}
                height={300}
                className="w-full h-64 object-cover"
            />
            <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800">{member.name}</h2>
                <p className="text-indigo-600 font-semibold">{member.title}</p>
                <p className="mt-4 text-gray-600">{member.description}</p>
            </div>
        </div>
        ))}
    </main>
</div>

    )
};

export async function getServerSideProps() {
    try {
        const client = await clientPromise;
        const db = client.db("app_gym");

        const staff = await db
            .collection("staff")
            .find({})
            .sort({ _id: -1 })
            .limit(20)
            .toArray();

        return {
            props: { staff: JSON.parse(JSON.stringify(staff)) },
            
        };
    } catch (e) {
        console.error(e);
    }
}


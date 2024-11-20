"use client";

// import clientPromise from "../lib/mongodb";
// import Image from 'next/image';

export default function Rutinas () {
    return (
        <h1>hola mundo</h1>
    )
};

// export async function getServerSideProps() {
//     try {
//         const client = await clientPromise;
//         const db = client.db("app_gym");

//         const staff = await db
//             .collection("rutinas")
//             .find({})
//             .sort({ _id: 1 })
//             .limit(20)
//             .toArray();

//         return {
//             props: { rutinas: JSON.parse(JSON.stringify(rutinas)) },
            
//         };
//     } catch (e) {
//         console.error(e);
//     }
// }


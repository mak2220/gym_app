"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function Login_btn() {
    const { data: session, status } = useSession();
    if (status === "loading") {
    return <div className="text-gray-500">Loading...</div>;
}

    if (session) {
    return (
        <>
        <div className="mb-2 text-gray-700 font-medium">
            Signed in as <span className="font-bold">{session.user?.email || "Unknown"}</span>
        </div>
        <button
            onClick={() => signOut()}
            aria-label="Cerrar sesión"
            className="px-3 py-2 border-2 bg-yellow-500 border-black text-black font-semibold rounded-lg hover:bg-black hover:text-yellow-500 hover:border-yellow-500 transition duration-200 lg:px-6 lg:py-3"
        >
            Sign out
        </button>
        </>
    );
    }

    return (
    <>
        <div className="mb-2 text-gray-700 font-medium">Not signed in</div>
        <button
        onClick={() => signIn()}
        aria-label="Iniciar sesión"
        className="px-3 py-2 border-2 bg-yellow-500 border-black text-black font-semibold rounded-lg hover:bg-black hover:text-yellow-500 hover:border-yellow-500 transition duration-200 lg:px-6 lg:py-3"
        >
        Sign in
        </button>
    </>
    );
}

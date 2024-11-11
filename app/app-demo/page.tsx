import React from "react";
import Image from "next/image";
import { testDatabaseConnection } from "../actions";
import Link from "next/link";
import Navbar from "../../components/Navbar";

export default async function Home() {
  const isConnected = await testDatabaseConnection();

  return (
    <main className="bg-[url('/image/bg-home.jpeg')] bg-cover bg-center min-h-screen">
      <Navbar/>
    </main>
  );
}

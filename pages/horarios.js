"use client"

export default function Horarios (){
    return(
        <div className="min-h-screen bg-gray-100">
            <header className="bg-gradient-to-b from-green-700/80 to-green-300/50 text-black py-12 text-center">
                <h1 className="text-4xl font-bold">Horarios</h1>
                <p className="mt-2 text-lg">
                    Elige el que mejor se adapta a tu día
                </p>
            </header>
            <main>
                <div class="overflow-x-auto">
                    <table class="table-auto border-collapse border w-full text-base text-black bg-white">
                        <thead>
                            <tr class="text-center">
                                <th class="px-4 py-2">Profesor</th>
                                <th class="px-4 py-2">Horas</th>
                                <th class="px-4 py-2">Tipo</th>
                            </tr>
                        </thead>
                    <tbody>
                        <tr class="hover:bg-gray-100">
                            <td class="px-4 py-2">Juan</td>
                            <td class="px-4 py-2">25</td>
                            <td class="px-4 py-2">España</td>
                        </tr>
                        <tr class="hover:bg-gray-100">
                            <td class="px-4 py-2">María</td>
                            <td class="px-4 py-2">30</td>
                            <td class="px-4 py-2">México</td>
                        </tr>
                        <tr class="hover:bg-gray-100">
                            <td class="px-4 py-2">Carlos</td>
                            <td class="px-4 py-2">28</td>
                            <td class="px-4 py-2">Argentina</td>
                        </tr>
                    </tbody>
                </table>    
            </div>
        </main>
    </div>
    )
}
import React from 'react'
import k1 from '../img/k1.png'

export default function Header() {
    return (
        <div>
            {/* mx-auto max-w-screen-xl */}
            <nav className='bg-[#6e90b9] border-gray-400 h-20 flex justify-around items-center'>
                <a href="#" class="flex items-center no-underline">
                    <img src={k1} class="mr-3 h-6 sm:h-9"  />
                    <span class="self-center text-xl font-semibold text-white">Corona App</span>
                </a>

                <div class="flex items-center lg:order-2">
                    <button class="text-white bg-primary-700  hover:bg-slate-300 focus:ring-4 focus:bg-gray-700 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2">Ülkelere Göre Covid Değerleri</button>
                    <button class="text-white bg-primary-700  hover:bg-slate-300 focus:ring-1  focus:bg-gray-700 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2">Kayda Geçmiş Tüm Corona Değerleri</button>
                    <button class="text-white bg-primary-700  hover:bg-slate-300 focus:ring-4  focus:bg-gray-700 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2">Kıtalara Göre Covid Değerleri</button>
                </div>
            </nav>
        </div>
    )
}

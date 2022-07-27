import React from 'react'
import k1 from '../img/k1.png'

export default function Header() {
    return (
        <div>
            <>
                <nav className='bg-[#6e90b9] border-gray-400 h-20 flex justify-center items-center '>
                    <img src={k1} width={70} />
                    <div>
                        <p className='text-center text-white text-3xl pl-4'>Corona App</p>
                    </div>
                </nav>

            </>
        </div>
    )
}

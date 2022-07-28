import React from 'react'
import k2 from '../img/k2.jpeg'

export default function Main() {
    return (
        <>
            <div class="pt-5 pl-5 row">
                <div class="col-md-3 cursor-pointer drop-shadow-lg border-0.5">
                    <img src={k2} width={350} height={200} className='pb-2' />
                    <p className='font-bold'>USA</p>
                    <p>TotalCase: 90,232,11</p>
                    <p>TotalDeath: 90,232,11</p>
                    <span className='bg-[#e6eaf6] rounded-full text-sm border-4'>#54,344,934</span>
                </div>

                   <div class="col-md-3 cursor-pointer">
                    <img src={k2} width={350} height={200} />
                    <p className='font-bold'>India</p>
                    <p>TotalCase: 90,232,11</p>
                    <p>TotalDeath: 90,232,11</p>
                </div>

                   <div class="col-md-3 cursor-pointer">
                    <img src={k2} width={350} height={200} />
                    <p className='font-bold'>Brazil</p>
                    <p>TotalCase: 90,232,11</p>
                    <p>TotalDeath: 90,232,11</p>
                </div>

                <div class="col-md-3 pb-20 cursor-pointer ">
                    <img src={k2} width={350} height={200} />
                    <p className='font-bold'>France</p>
                    <p>TotalCase: 90,232,11</p>
                    <p>TotalDeath: 90,232,11</p>
                </div>

                   <div class="col-md-3 cursor-pointer">
                    <img src={k2} width={350} height={200} />
                    <p className='font-bold'>UK</p>
                    <p>TotalCase: 90,232,11</p>
                    <p>TotalDeath: 90,232,11</p>
                </div>

                   <div class="col-md-3 cursor-pointer">
                    <img src={k2} width={350} height={200} />
                    <p className='font-bold'>Russia</p>
                    <p>TotalCase: 90,232,11</p>
                    <p>TotalDeath: 90,232,11</p>
                </div>

                   <div class="col-md-3 cursor-pointer">
                    <img src={k2} width={350} height={200} />
                    <p className='font-bold'>Turkey</p>
                    <p>TotalCase: 90,232,11</p>
                    <p>TotalDeath: 90,232,11</p>
                </div>

                   <div class="col-md-3 cursor-pointer">
                    <img src={k2} width={350} height={200} />
                    <p className='font-bold'>Greece</p>
                    <p>TotalCase: 90,232,11</p>
                    <p>TotalDeath: 90,232,11</p>
                </div>
            </div>

        </>

    )
}

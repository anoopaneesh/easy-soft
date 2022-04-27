import Image from "next/image"
import React from "react"
import logo from '../assets/images/hero1.png'
export const SectionOne:React.FC = () => {
    return (
        <div className="w-full px-8 md:px-0 md:w-2/3 mx-auto flex flex-col-reverse md:flex-row items-center">
            <div className="w-full md:w-1/2 flex flex-col space-y-4">
                <h1 className="text-center md:text-left text-2xl md:text-4xl font-bold">Discover & growth<br/> with analysis</h1>
                <p className="text-justify md:text-left text-sm text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit velit omnis iure perferendis debitis nisi atque magni sint autem nam tempore, quas sunt veritatis eveniet harum placeat at. Deserunt, hic.</p>
                <ul className="text-sm text-gray-800 list-disc ml-5">
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                </ul>
            </div>
            <div className="w-full md:w-1/2 p-10">
                <Image src={logo} objectFit="fill" alt="" />
            </div>
        </div>
    )
}

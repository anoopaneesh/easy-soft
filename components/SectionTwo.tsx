import Image from "next/image"
import React from "react"
import logo from '../assets/images/hero2.png'
export const SectionTwo:React.FC = () => {
    return (
        <div className="my-8 w-full px-8 md:px-0 md:w-2/3 mx-auto flex flex-col-reverse md:flex-row-reverse items-center">
            <div className="w-full md:w-1/2 flex flex-col space-y-4">
                <h1 className="text-center md:text-left text-2xl md:text-4xl font-bold">Serving information with security</h1>
                <p className="text-justify md:text-left text-sm text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit velit omnis iure perferendis debitis nisi atque magni sint autem nam tempore, quas sunt veritatis eveniet harum placeat at. Deserunt, hic.</p>
            </div>
            <div className="w-full md:w-1/2 md:mr-20">
                <Image src={logo} objectFit="fill" alt="" />
            </div>
        </div>
    )
}

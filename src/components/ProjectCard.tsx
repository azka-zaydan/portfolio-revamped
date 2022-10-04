/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { ProjProps } from '../pages/about'

const ProjectCard = ({ projName, link, logo, projLang }: ProjProps) => {
    return (
        <a href={link} className='flex text-center justify-center align-middle place-items-center lg:justify-start lg:text-left'>

            <div className='flex flex-shrink-0 w-full justify-center align-middle place-items-center relative bg-gray-900 rounded-lg p-[0.5em] my-2 text-white transition-all hover:shadow-2xl hover:bottom-4 hover:mb-2 hover:bg-white active:border active:border-black hover:text-black lg:hover:shadow-2xl lg:hover:mb-2 lg:hover:bottom-2 lg:hover:left-2 lg:hover:bg-white lg:hover:text-black lg:text-left'>
                {projName}
                <img src={logo} alt={projLang} className='w-8 mx-2' />
            </div>
        </a>
    )
}

export default ProjectCard
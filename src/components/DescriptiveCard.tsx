/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import { useThemeContext } from '../context/ThemeContext'
import { ProjPropsFull } from '../pages/projects'

const DescriptiveCard = ({ projName, link, projectDetails, projImg }: ProjPropsFull) => {

    const [isOpen, setIsOpen] = useState(false)
    const { currentTheme } = useThemeContext()

    return (
        <div className="block relative w-80 p-2 rounded-lg transition-all lg:hover:bottom-4 shadow-4xl lg:p-6 lg:hover:w-96 lg:hover:z-30">
            <div className='flex m-2'>
                <a href={link}>
                    <img src={projImg} alt={projName} className='w-[20rem]' />
                </a>
            </div>
            <div className='p-2 flex'>
                <p>{projName}</p>
                {isOpen ? (<button onClick={() => setIsOpen(false)} className={`${currentTheme} rounded-lg mx-2 px-2 text-center lg:hidden`}> = </button>) : (<button onClick={() => setIsOpen(true)} className={`${currentTheme} rounded-lg mx-2 px-2 text-center lg:hidden`}> = </button>)}
            </div>
            <div className={`description ${isOpen ? 'block' : 'hidden'} -mt-2 text-left px-2 lg:block`} >
                <hr className={`my-1 h-px border-0`} />
                <p>{projectDetails}</p>
            </div>
        </div>
    )
}

export default DescriptiveCard
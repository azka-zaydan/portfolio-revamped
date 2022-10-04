import React, { useState } from 'react'
import { ProjProps } from '../pages/about'
import { ProjPropsFull } from '../pages/projects'

const DescriptiveCard = ({ projName, link, logo, projLang, projectDetails, projImg }: ProjPropsFull) => {

    const [isOpen, setIsOpen] = useState(false)


    return (
        <div className="block relative w-80 bg-gray-900 p-2 rounded-lg text-white">
            <div className='flex m-2'>
                <a href={link}>
                    <img src={projImg} alt="img" className='w-[20rem]' />
                </a>
            </div>
            <div className='p-2 flex'>
                <p>{projName}</p>
                {isOpen ? (<button onClick={() => setIsOpen(false)} className='bg-slate-700 rounded-lg mx-2 px-2 text-white text-center lg:hidden'> = </button>) : (<button onClick={() => setIsOpen(true)} className='bg-slate-700 rounded-lg mx-2 px-2 text-white text-center lg:hidden'> = </button>)}
            </div>
            <div className={`description ${isOpen ? 'block' : 'hidden'} -mt-2 text-left px-2 lg:block`} >
                <hr className='my-1 h-px bg-gray-200 border-0 dark:bg-gray-700' />
                <p>{projectDetails}</p>
            </div>
        </div>
    )
}

export default DescriptiveCard
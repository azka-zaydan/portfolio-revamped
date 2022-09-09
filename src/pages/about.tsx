/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { NextPage } from 'next'
import React from 'react'
import Header from '../components/Header'

const About: NextPage = () => {
    const projs = [
        {
            projName: 'Bukalapak-Scraper',
            projLang: 'Python',
            link: 'https://github.com/azka1415/Bukalapak-Scraper',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg'
        },
        {
            projName: 'fastapi-mongo',
            projLang: 'Python',
            link: 'https://github.com/azka1415/fastapi-mongo',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg'
        },
        {
            projName: 'quiz-app-react',
            projLang: 'TypeScript',
            link: 'https://github.com/azka1415/quiz-app-react',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg'
        },
        {
            projName: 'netflix-clone',
            projLang: 'TypeScript',
            link: 'https://github.com/azka1415/netflix-clone',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg'
        },
        {
            projName: 'rest-ts',
            projLang: 'TypeScript',
            link: 'https://github.com/azka1415/rest-ts',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg'
        },
        {
            projName: 'fast-api',
            projLang: 'Python',
            link: 'https://github.com/azka1415/fast-api',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg'
        }
    ]
    return (
        <>
            <Header titleName='About' />

            <div className=" h-screen flex p-2 mx-auto">

                <div className="block absolute flex-shrink-0 right-4 left-4 top-[8rem] text-center m-auto shadow-xl p-4 bg-slate-200 rounded-lg transition-all ease-in-out md:p-10 md:text-xl md:absolute lg:absolute lg:block lg:left-[5rem] lg:p-16 lg:mx-20 lg:text-2xl lg:right-[70rem] lg:top-[20rem]">
                    <div className='lg:text-start text-center'>

                        <p>I'm <b> Azka Rafif Zaydan </b></p>
                        <p><code>Software Engineer</code> from Jakarta, Indonesia</p>
                    </div>
                    <div className='flex content-center justify-center lg:text-start lg:justify-start'>
                        <p className='pr-2 text-center'>I mainly use</p> <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="python logo" className='w-6 mr-1 md:w-8 lg:w-10' /> <p> for Back-End</p>
                    </div>
                    <div className='flex justify-center lg:justify-start'>
                        <p className='pr-2'>and</p><img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="react logo" className='w-6 mr-1 md:w-8 lg:w-10' /> <p> for Front-End</p>
                    </div>
                </div>
                <div className='absolute block flex-shrink-0 right-4 left-4 top-[20rem] my-auto lg:absolute lg:right-[5rem] lg:left-[60rem] lg:top-[15rem] lg:block lg:self-end lg:justify-end text-center lg:my-auto mx-auto shadow-xl p-4 bg-slate-200 rounded-lg transition-all ease-in-out md:p-10 md:text-xl lg:p-16 lg:mx-20 lg:text-2xl justify-center items-center align-middle w-max'>
                    <p>My Projects</p>
                    {projs.map(v => (
                        <a key={v.projName} href={v.link} className='flex text-center content-center space-y-8 justify-center align-middle place-items-center'>
                            <div className='flex flex-shrink-0 w-full justify-center align-middle place-items-center relative bg-gray-900 rounded-lg p-2 my-2 text-white transition-all hover:shadow-2xl hover:bottom-4 hover:mb-2 hover:bg-white active:border active:border-black hover:text-black lg:hover:shadow-2xl lg:hover:mb-2 lg:hover:bottom-2 lg:hover:left-2 lg:hover:bg-white lg:hover:text-black'>
                                {v.projName}
                                <img src={v.logo} alt={v.projLang} className='w-8 mx-2' />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </>
    )
}

export default About
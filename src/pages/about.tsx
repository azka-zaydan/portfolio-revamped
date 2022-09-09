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

            <div className=" h-screen container flex p-2 mx-auto">
                <div className="block text-center m-auto shadow-xl p-4 bg-slate-200 rounded-lg transition-all ease-in-out md:p-10 md:text-xl lg:p-16 lg:mx-20 lg:text-2xl">
                    <div className='lg:text-start'>

                        <p>I'm <b> Azka Rafif Zaydan </b></p>
                        <p><code>Software Engineer</code> from Jakarta, Indonesia</p>
                    </div>
                    <div className='flex content-center justify-center md:justify-start'>
                        <p className='pr-2'>I mainly use</p> <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="python logo" className='w-6 mr-1 md:w-8 lg:w-10' /> <p> for Back-End</p>
                    </div>
                    <div className='flex justify-center md:justify-start'>
                        <p className='pr-2'>and</p><img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="react logo" className='w-6 mr-1 md:w-8 lg:w-10' /> <p> for Front-End</p>
                    </div>
                </div>
                <div className='hidden lg:block lg:self-end lg:justify-end text-center my-auto mx-auto shadow-xl p-4 bg-slate-200 rounded-lg transition-all ease-in-out md:p-10 md:text-xl lg:p-16 lg:mx-20 lg:text-2xl'>
                    <p>My Projects</p>
                    <div className='container content-center justify-center bg-[#111827]'>
                        {projs.map(v => (
                            <a key={v.projName} href={v.link} className='text-center content-center'>
                                <div className='flex relative bg-[#111827] rounded-lg p-2 my-2 text-white transition-all hover:shadow-2xl hover:p-8 hover:left-4 hover:bg-white hover:text-black'>
                                    {v.projName}
                                    <img src={v.logo} alt={v.projLang} className='w-8 mx-2' />
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
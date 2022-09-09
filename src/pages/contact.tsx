/* eslint-disable react/no-unescaped-entities */
import { NextPage } from 'next'
import Image from 'next/image'
import React from 'react'
import Header from '../components/Header'

const Contact: NextPage = () => {

    const socialMedia = [
        {
            name: 'LinkedIn',
            imgSource: 'https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg',
            alt: 'linkedIn logo',
            username: 'Azka Rafif Zaydan',
            href: 'https://www.linkedin.com/in/azka-rafif-zaydan-55b9931a3/'
        },
        {
            name: 'Instagram',
            imgSource: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg',
            alt: 'instagram logo',
            username: 'azkarafifz',
            href: 'https://www.instagram.com/azkarafifz/'
        },
        {
            name: 'Github',
            imgSource: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg',
            alt: 'github logo',
            href: 'https://github.com/azka1415'
        },
    ]

    return (
        <>
            <Header titleName='Contact' />

            <div className="h-screen flex container px-auto mx-auto">
                <div className='grid gap-10 grid-cols-3 grid-rows-1 mx-auto my-auto bg-slate-200 p-4 rounded-lg text-center shadow-xl'>
                    {socialMedia.map(v => (
                        <a href={v.href} key={v.name}>
                            <div className='text-white rounded-lg px-2 py-2 transition-all ease-in-out hover:bg-slate-200 border hover:border-slate-600 hover:shadow-lg md:p-5 lg:p-10 relative hover:bottom-2' key={v.name}>
                                <Image src={v.imgSource} width={80} height={50} alt={v.alt} objectFit='contain' />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Contact
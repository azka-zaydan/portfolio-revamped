/* eslint-disable react/no-unescaped-entities */
import { NextPage } from 'next'
import React from 'react'
import ContactCard from '../components/ContactCard'
import Header from '../components/Header'
import Layout from '../components/Layout'
import { useThemeContext } from '../context/ThemeContext'
export interface ContactProps {
    name: string
    imgSource: string
    alt: string
    href: string
}

const Contact: NextPage = () => {
    const { currentTheme } = useThemeContext()
    const socialMedia: ContactProps[] = [
        {
            name: 'LinkedIn',
            imgSource: 'https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg',
            alt: 'linkedIn logo',
            href: 'https://www.linkedin.com/in/azka-rafif-zaydan-55b9931a3/'
        },
        {
            name: 'Instagram',
            imgSource: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg',
            alt: 'instagram logo',
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
            <Layout>

                <div className={`grid gap-10 grid-cols-3 grid-rows-1 mx-auto my-auto bg-inherit ${currentTheme} p-4 rounded-lg text-center shadow-xl`}
                >
                    {socialMedia.map(v => (
                        <ContactCard key={v.href} alt={v.alt} href={v.href} imgSource={v.imgSource} name={v.name} />
                    ))}
                </div>
            </Layout>
        </>
    )
}

export default Contact
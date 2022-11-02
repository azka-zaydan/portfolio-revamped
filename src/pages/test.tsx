/* eslint-disable @next/next/no-img-element */
import { NextPage } from 'next'
import React, { useState } from 'react'
import Layout from '../components/Layout'
import { useThemeContext } from '../context/ThemeContext'
import { ProjPropsFull } from './projects'





export default function TestPage() {

    const projs: ProjPropsFull[] = [
        {
            projName: 'Bukalapak-Scraper',
            projLang: 'Python',
            link: 'https://github.com/azka1415/Bukalapak-Scraper',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
            projectDetails: 'Web Scraper made with Python for the e-commerce site Bukalapak',
            projImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzsYQqgSiCpOpsY83Juj2kUSoi25392L2vgA&usqp=CAU',
        },
        {
            projName: 'fastapi-mongo',
            projLang: 'Python',
            link: 'https://github.com/azka1415/fastapi-mongo',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
            projectDetails: 'API made with FastAPI and MongoDB',
            projImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzsYQqgSiCpOpsY83Juj2kUSoi25392L2vgA&usqp=CAU',
        },
        {
            projName: 'quiz-app-react',
            projLang: 'TypeScript',
            link: 'https://github.com/azka1415/quiz-app-react',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
            projectDetails: 'Fun quiz app made with React and TypeScript',
            projImg: 'https://i.imgur.com/EbbuDmR.png',
        },
        {
            projName: 'netflix-clone',
            projLang: 'TypeScript',
            link: 'https://github.com/azka1415/netflix-clone',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
            projectDetails: 'Netflix Clone made with NextJS and TypeScript',
            projImg: 'https://cdn.dribbble.com/users/5056181/screenshots/14801201/netflix_home_page.png',
        },
        {
            projName: 'rest-ts',
            projLang: 'TypeScript',
            link: 'https://github.com/azka1415/rest-ts',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
            projectDetails: 'RestAPI made with Express and TypeScript',
            projImg: 'https://miro.medium.com/max/720/1*1reV249DP4NRz3QzRyFIHQ.png',
        },
        {
            projName: 'Portfolio Site',
            projLang: 'TypeScript',
            link: 'https://github.com/azka1415/portfolio-revamped',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
            projectDetails: 'My Portfolio Site',
            projImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzsYQqgSiCpOpsY83Juj2kUSoi25392L2vgA&usqp=CAU',
        }
    ]
    const { currentTheme } = useThemeContext()
    const [num, setNum] = useState(projs.length - 1)

    return (
        <Layout>
            <div className={'bg-gray-900 text-white text-center p-2 rounded-lg'}>
                <p> Hi guys </p>
                <p>tihs is the test page</p>
            </div>
            <div className={`p-4 ${currentTheme} shadow-2xl space-y-2 w-80`}>
                <img src={projs[num]?.projImg} alt="img" className='w-80' />

                {projs.map((v) => (

                    <button onClick={() => setNum(projs.reverse().indexOf(v))} key={v.projName} className={`p-[0.3rem] rounded-full opacity-50 hover:opacity-100 bg-gray-600 mx-2`} ></button>
                ))}
                <p>{projs[num]?.projectDetails}</p>
                <div className={`space-x-52 ${currentTheme}`}>
                    {num > 0 ?
                        <>
                            {num === projs.length - 1 ? null :
                                <button onClick={() => setNum(prev => prev + 1)} className='opacity-25 hover:opacity-100'>Back</button>
                            }
                            < button onClick={() => setNum(prev => prev - 1)} className='opacity-25 hover:opacity-100'>Next</button>
                        </>
                        : <button onClick={() => setNum(prev => prev + 1)} className='opacity-25 hover:opacity-100'>Back</button>}
                </div>
            </div>
            {/* <div>
                {notes.map((v: any) => (
                    <p key={v.title}>{v.title}</p>
                ))}
            </div> */}


        </Layout >
    )
}



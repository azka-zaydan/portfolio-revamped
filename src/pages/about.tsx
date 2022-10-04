/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { NextPage } from 'next'
import React from 'react'
import Header from '../components/Header'
import Layout from '../components/Layout'

const About: NextPage = () => {

    return (
        <>
            <Header titleName='About' />

            <Layout>

                <div
                    className="flex md:block bg-slate-200 rounded-lg mx-2 p-2 md:p-4 lg:p-8 transition-all ease-in-out md:text-xl lg:text-2xl shadow-2xl"
                >
                    <div className='lg:text-start text-center'>

                        <p>I'm <b> Azka Rafif Zaydan </b></p>
                        <p className=''><code className=''>Software Engineer</code> from Jakarta, Indonesia</p>
                    </div>
                    <div className='flex flex-wrap justify-center m-auto'>
                        <p className='text-center'>I mainly use</p>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="python logo" className='hidden md:flex px-1 w-6 md:w-8 lg:w-10' />
                        <p className='md:hidden mr-1 ml-1'>Python</p>
                        <p> for Back-End</p>
                        <p className='text-center mr-1 ml-1'>and</p>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="react logo" className='hidden md:flex w-6 px-1 md:w-8 lg:w-10' />
                        <p>React</p>
                        <p className='ml-1'> for Front-End</p>
                    </div>

                </div>

            </Layout>
        </>
    )
}

export default About
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Logo from '../imgs/logo.svg'
import TopNavItem from './TopNavItem';
export interface NavItemProps {
    navName: string
    navHref: string
    uniq: number
}

function Navbar() {

    const [isOpen, setIsOpen] = useState(false)
    const openUp = () => setIsOpen(true)
    const closeIt = () => setIsOpen(false)

    const links: NavItemProps[] = [
        {
            navName: 'Home',
            navHref: '/',
            uniq: 1
        },
        {
            navName: 'About',
            navHref: '/about',
            uniq: 2
        },
        {
            navName: 'Contact',
            navHref: '/contact',
            uniq: 3
        },
        {
            navName: 'Projects',
            navHref: '/projects',
            uniq: 4
        }
    ]

    return (
        <>
            <nav className="md:px-2 px-4 py-2.5 bg-gray-900 fixed w-full z-50">
                <div className="transition-all ease-in-out container flex flex-wrap justify-between items-center mx-auto">
                    <Link href={'/'}>
                        <button className="space-x-2 p-2"
                        >
                            <Image src={Logo} alt="Logo" className='px-4 lg:items-start' width={160} height={40} />
                        </button>
                    </Link>
                    {isOpen ? (
                        <button onClick={closeIt} className='absolute p-2 px-4 md:hidden bg-gray-700 rounded text-3xl hover:bg-gray-400 hover:text-slate-700 w-min h-min right-[2%]'
                        >
                            =
                        </button>) : (
                        <button className='absolute p-2 px-4 md:hidden bg-gray-700 rounded text-3xl hover:bg-gray-400 hover:text-slate-700 w-min h-min right-[2%]' onClick={openUp}
                        >=
                        </button>)}

                    <div className="hidden w-full md:block md:w-auto">
                        <div className="nav-head">
                            {links.map(v =>
                                (<TopNavItem navHref={v.navHref} navName={v.navName} key={v.uniq} />)
                            )}
                        </div>
                    </div>
                </div>
            </nav >


            <div className='md:hidden absolute w-max h-max right-[1%] top-[9%] text-center ease-in-out hover:shadow-xl transition-all z-50'
            >



                <div className={isOpen ? 'nav-head' : 'hidden'}>

                    {links.map(v => (
                        <TopNavItem navHref={v.navHref} navName={v.navName} key={v.uniq} />
                    ))}

                </div>

            </div>


        </>
    )
}

export default Navbar
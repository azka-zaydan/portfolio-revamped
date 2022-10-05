import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Logo from '../imgs/logo.svg'
import TopNavItem from './TopNavItem';
import LogoWhite from '../imgs/logoWhite.svg'
import { useThemeContext } from '../context/ThemeContext';


export interface NavItemProps {
    navName: string
    navHref: string
    uniq: number
}

function Navbar() {

    const [isOpen, setIsOpen] = useState(false)
    const openUp = () => setIsOpen(true)
    const closeIt = () => setIsOpen(false)
    const { currentTheme, setTheme } = useThemeContext()
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
            <nav className={`md:px-2 px-4 py-2.5 ${currentTheme} fixed w-full z-50 border shadow-xl dark:border-none`}>
                <div className="transition-all ease-in-out container flex flex-wrap justify-between items-center mx-auto">
                    <Link href={'/'}>
                        <button className="space-x-2 p-2"
                        >
                            {currentTheme === 'light-mode' ?
                                (<Image src={LogoWhite} alt="Logo" className='px-4 lg:items-start hidden' width={160} height={40} />) :
                                (<Image src={Logo} alt="Logo" className='px-4 lg:items-start hidden' width={160} height={40} />)
                            }
                        </button>
                    </Link>
                    {isOpen ? (
                        <button onClick={closeIt} className={`absolute p-2 px-4 md:hidden ${currentTheme} rounded text-3xl hover:bg-gray-400 hover:text-slate-700 w-min h-min right-[2%]`}
                        >
                            =
                        </button>) : (
                        <button className={`absolute p-2 px-4 md:hidden ${currentTheme} rounded text-3xl dark:hover:bg-gray-400 dark:hover:text-slate-700 w-min h-min right-[2%]`} onClick={openUp}
                        >=
                        </button>)}

                    <div className="hidden w-full md:block md:w-auto">
                        <div className="nav-head">
                            {links.map(v =>
                                (<TopNavItem navHref={v.navHref} navName={v.navName} key={v.uniq} />)
                            )}
                            {currentTheme === 'light-mode' ? (<button className='nav-icons' onClick={() => setTheme('dark-mode')}>Dark</button>) :
                                (<button className='nav-icons' onClick={() => setTheme('light-mode')}>Light</button>)
                            }
                        </div>
                    </div>
                </div>
            </nav >


            <div className='md:hidden absolute w-max h-max right-[1%] top-[9%] text-center ease-in-out hover:shadow-xl transition-all z-50 border-none'
            >



                <div className={isOpen ? `nav-head ${currentTheme}` : 'hidden'}>

                    {links.map(v => (
                        <TopNavItem navHref={v.navHref} navName={v.navName} key={v.uniq} />
                    ))}
                    {currentTheme === 'light-mode' ? (<button className={`nav-icons nav-icons-light`} onClick={() => setTheme('dark-mode')}>Dark</button>) :
                        (<button className={`nav-icons nav-icons-dark`} onClick={() => setTheme('light-mode')}>Light</button>)
                    }
                </div>

            </div>


        </>
    )
}

export default Navbar
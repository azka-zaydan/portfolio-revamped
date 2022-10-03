import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Logo from '../imgs/logo.svg'
import { CSSTransition } from 'react-transition-group';
import TopNavItem from './TopNavItem';
import { motion, AnimatePresence } from 'framer-motion'
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
        }
    ]

    return (
        <>
            <nav className="md:px-2 px-4 py-2.5 bg-gray-900 fixed w-full z-50">
                <div className="transition-all ease-in-out container flex flex-wrap justify-between items-center mx-auto">
                    <Link href={'/'}>
                        <motion.button className="space-x-2 p-2"
                            whileTap={{ scale: 0.9 }}>
                            <Image src={Logo} alt="Logo" className='px-4 lg:items-start' width={160} height={40} />
                        </motion.button>
                    </Link>
                    {isOpen ? (
                        <motion.button onClick={closeIt} className='absolute p-2 px-4 md:hidden bg-gray-700 rounded text-3xl hover:bg-gray-400 hover:text-slate-700 w-min h-min right-[2%]'
                            whileTap={{ scale: 0.9 }}>
                            =
                        </motion.button>) : (
                        <motion.button className='absolute p-2 px-4 md:hidden bg-gray-700 rounded text-3xl hover:bg-gray-400 hover:text-slate-700 w-min h-min right-[2%]' onClick={openUp}
                            whileTap={{ scale: 0.9 }}>=
                        </motion.button>)}

                    <div className="hidden w-full md:block md:w-auto">
                        <div className="nav-head">
                            {links.map(v =>
                                (<TopNavItem navHref={v.navHref} navName={v.navName} key={v.uniq} />)
                            )}
                        </div>
                    </div>
                </div>
            </nav >

            <AnimatePresence>

                <motion.div className='md:hidden absolute w-max h-max right-[1%] top-[9%] text-center ease-in-out hover:shadow-xl transition-all z-50'
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -300, opacity: 0 }}>


                    <AnimatePresence>

                        <motion.div className={isOpen ? 'nav-head' : 'hidden'}
                            initial={{ x: 300, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -300, opacity: 0 }}>

                            {links.map(v => (
                                <TopNavItem navHref={v.navHref} navName={v.navName} key={v.uniq} />
                            ))}

                        </motion.div>
                    </AnimatePresence>

                </motion.div>
            </AnimatePresence>


        </>
    )
}

export default Navbar
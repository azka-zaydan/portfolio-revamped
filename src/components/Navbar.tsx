import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Logo from '../imgs/logo.svg'
import { CSSTransition } from 'react-transition-group';
function Navbar() {

    const [isOpen, setIsOpen] = useState(false)
    const openUp = () => setIsOpen(true)
    const closeIt = () => setIsOpen(false)

    const links = [
        {
            navName: 'Home',
            navHref: '/'
        },
        {
            navName: 'About',
            navHref: '/about'
        },
        {
            navName: 'Contact',
            navHref: '/contact'
        }
    ]

    return (
        <>
            <nav className="md:px-2 px-4 py-2.5 bg-gray-900 absolute w-full z-auto">
                <div className="transition-all ease-in-out container flex flex-wrap justify-between items-center mx-auto">
                    <Link href={'/'}>
                        <a className="space-x-2 p-2">
                            <Image src={Logo} alt="Logo" className='px-4 lg:items-start' width={160} height={40} />
                        </a>
                    </Link>
                    {isOpen ? (<button onClick={closeIt} className='absolute p-2 px-4 md:hidden bg-gray-700 rounded text-3xl hover:bg-gray-400 hover:text-slate-700 w-min h-min right-[2%]'>
                        =
                    </button>) : (<button className='absolute p-2 px-4 md:hidden bg-gray-700 rounded text-3xl hover:bg-gray-400 hover:text-slate-700 w-min h-min right-[2%]' onClick={openUp}>=</button>)}

                    <div className="hidden w-full md:block md:w-auto">
                        <ul className="nav-head">
                            {links.map(v => (
                                <li key={v.navName}>
                                    <Link href={v.navHref}>
                                        <a className='nav-icons'>{v.navName}</a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav >


            <div className='md:hidden absolute w-max h-max right-[1%] top-[9%] text-center ease-in-out hover:shadow-xl transition-all z-50'>

                <CSSTransition
                    in={isOpen}
                    timeout={300}
                    classNames="menu"
                    unmountOnExit
                >

                    <ul className={isOpen ? 'nav-head' : 'hidden'}>

                        {links.map(v => (
                            <>
                                <li key={v.navName} className='relative transition-all hover:right-2 hover:my-2'>
                                    <Link href={v.navHref}>
                                        <a className='nav-icons px-3'>{v.navName}</a>
                                    </Link>
                                </li>
                            </>
                        ))}
                    </ul>

                </CSSTransition>
            </div>


        </>
    )
}

export default Navbar
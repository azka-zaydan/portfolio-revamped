import Link from 'next/link'
import React from 'react'
import { NavItemProps } from './Navbar'

interface Props {
    navHref: string
    navName: string
}

const TopNavItem = ({ navHref, navName }: Props) => {
    return (
        <div >
            <Link href={navHref} className='nav-icons'>
                <a className='nav-icons'>{navName}</a>
            </Link>
        </div>
    )
}

export default TopNavItem
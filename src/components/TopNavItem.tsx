import Link from 'next/link'
import React from 'react'
interface Props {
    navHref: string
    navName: string
}

const TopNavItem = ({ navHref, navName }: Props) => {
    return (
        <div >
            <Link href={navHref} className='nav-icons'>
                <button className='nav-icons'
                >
                    {navName}
                </button>
            </Link>
        </div>
    )
}

export default TopNavItem
import Link from 'next/link'
import React from 'react'

interface Props {
    navName: string
    navHref: string
}

function NavItem(v: Props) {
    return (
        <li key={v.navName}>
            <Link href={v.navHref}>
                <a className='nav-icons'>{v.navName}</a>
            </Link>
        </li>
    )
}

export default NavItem
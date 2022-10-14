import Link from 'next/link'
import React from 'react'
import { useThemeContext } from '../context/ThemeContext'
interface Props {
    navHref: string
    navName: string
}

const TopNavItem = ({ navHref, navName }: Props) => {
    const { currentTheme } = useThemeContext()
    return (
        <div >
            <Link href={navHref}>
                <button className={`nav-icons ${currentTheme === 'light-mode' ? 'nav-icons-light' : 'nav-icons-dark'}`}
                >
                    {navName}
                </button>
            </Link>
        </div>
    )
}

export default TopNavItem
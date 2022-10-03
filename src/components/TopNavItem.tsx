import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
interface Props {
    navHref: string
    navName: string
}

const TopNavItem = ({ navHref, navName }: Props) => {
    return (
        <div >
            <Link href={navHref} className='nav-icons'>
                <motion.button className='nav-icons'
                    whileTap={{ scale: 0.9 }}>
                    {navName}
                </motion.button>
            </Link>
        </div>
    )
}

export default TopNavItem
import React, { ReactNode } from 'react'
import { useThemeContext } from '../context/ThemeContext'

interface Props {
    children: ReactNode
}

const Layout = ({ children }: Props) => {
    const { currentTheme } = useThemeContext()
    return (
        <div className={`flex flex-col lg:flex-row lg:space-x-20 m-auto w-screen h-screen ${currentTheme} items-center justify-center`}>
            {children}
        </div>
    )
}

export default Layout
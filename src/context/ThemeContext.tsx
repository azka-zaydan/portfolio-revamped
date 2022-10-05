import React, { createContext, ReactNode, useContext, useState } from 'react'

type Props = {
    children: ReactNode
}

type ThemeContextProps = {
    currentTheme: string
    setTheme: (theme: string) => void
}

export const themeContext = createContext({} as ThemeContextProps)

export const useThemeContext = () => {
    return useContext(themeContext)
}

const ThemeContextProvider = ({ children }: Props) => {
    const [currentTheme, setCurrentTheme] = useState('dark-mode')
    const setTheme = (theme: string) => {
        setCurrentTheme(theme)
    }

    return (
        <themeContext.Provider value={{
            currentTheme,
            setTheme
        }}>
            {children}
        </themeContext.Provider>
    )
}

export default ThemeContextProvider
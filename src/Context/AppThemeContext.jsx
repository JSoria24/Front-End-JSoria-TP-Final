import React, { createContext, useState } from "react";

export const AppThemeContext = createContext()


const AppThemeContextProvider = ({children}) => {
    const [app_theme, setAppTheme] = useState('dark')
    const toggleAppTheme = () => {
        if(app_theme === 'dark'){
            setAppTheme('white')
        }
        else{
            setAppTheme('dark')
        }
    }
    return (
        <AppThemeContext.Provider
            value={
                {
                    app_theme: app_theme,
                    toggleAppTheme: toggleAppTheme
                }
            }
        >
            {children}
        </AppThemeContext.Provider>
    )
}

export default AppThemeContextProvider

redux
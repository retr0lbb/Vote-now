import React, {useState, useContext, createContext} from "react";

interface DarkmodeProviderProps{
    children: React.ReactNode
}
interface DarkModeContextType {
    darkMode: boolean;
    toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);
export const DarkModeProvider = ({children}: DarkmodeProviderProps) => {

    const isDarkmodedOnLocalStorage = localStorage.getItem("darkmoded")

    const [darkMode, setDarkMode] = useState(isDarkmodedOnLocalStorage? true : false)

    const toggleDarkMode = () => {
        setDarkMode(prevDM => !prevDM);
      };

      if(darkMode){
        document.documentElement.classList.add("dark")
        localStorage.setItem("darkmoded", "1")
      }else{
        document.documentElement.classList.remove("dark")
        localStorage.removeItem("darkmoded")
      }

    return(
        <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    )
}


export const useDarkmode = () => useContext(DarkModeContext)
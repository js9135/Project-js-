// import { ThemeProvider } from "@mui/material";
// import { createTheme } from "@mui/system";
import { createContext, useMemo, useState } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';

export const ColorModeContext = createContext({
    toggleMode: () => { },
    mode: 'dark'
})

const themeObj = {
    light: {
        background: {
            default: "#fff",
        },




    },
    dark: {

        background: {
            default: "#000"
        },


    }
}


export const ColorContextProvider = ({ children }) => {

    const [mode, setMode] = useState("dark");

    const colorMode = useMemo(() => ({

        toggleMode: () => setMode(prevMode => prevMode === "dark" ? "light" : "dark"),
        mode,

    }), [mode])

    const theme = useMemo(() => createTheme({
        palette: {
            mode: mode,
            ...themeObj[mode]
        },
    }), [mode])

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ColorModeContext.Provider>
    )
}
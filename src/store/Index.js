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
        bg: {
            default: "#f1f1f1",
        },
        bgt: {
            default: "#e7e7e7",
        },
        icon: {
            default: "#000",
        },
        hbg: {
            default: '#dadada',
        },

        text: {
            default: '#000',
        },
        disBtn: {
            default: '#d4d4d4'
        },
        box: {
            default: '#151515'
        },
        gcolor: {
            default: '#e2e0e0'
        },
        revenue: {
            default: '#fcd3499e'
        },
        revenuetext: {
            default: '#fa8e0e'
        },
        box2: {
            default: '#e2e2e2'
        },
        Sliderroot: {
            default: '#d4d4d4'
        },
        mBtn: {
            default: '#646464 '
        },
        pkgbg: {
            default: '#bababa'
        },
        tbbox : {
            default : '#fff'
        }



    },
    dark: {

        bg: {
            default: "#000",
        },
        bgt: {
            default: "#080808",
        },
        icon: {
            default: "#fff",
        },
        hbg: {
            default: '#181818',
        },
        text: {
            default: '#fff',
        },
        disBtn: {
            default: '#252525'
        },
        box: {
            default: '#252525'
        },
        gcolor: {
            default: '#080808'
        },
        revenue: {
            default: '#fcd3492e'
        },
        revenuetext: {
            default: '#FCD349'
        },
        box2: {
            default: '#151515'
        },
        Sliderroot: {
            default: '#250C05'
        },
        mBtn: {
            default: '#646464 '
        },
        pkgbg: {
            default: '#000'
        },
        tbbox : {
            default : '#151515'
        }





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
import React, { useState } from "react"
import FlashOnIcon from '@mui/icons-material/FlashOnOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import { Fab } from "@mui/material";


function Header() {
    const [isDark, setDark] = useState(false)
    function changeMode(evet: React.MouseEvent<HTMLButtonElement>){
        setDark(!isDark)
        console.log(isDark)
    }
    return (
        <header className="header">
            <h1 className="header h1">
                <FlashOnIcon />
                Keeper
                <Fab
                onClick={changeMode}>
                    {isDark? <NightlightOutlinedIcon /> : <LightModeOutlinedIcon />}
                </Fab>

            </h1>
        </header>
    )
}

export default Header
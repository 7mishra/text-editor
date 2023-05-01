import React from 'react';
import './App.css';
import Home from "./home/home";
import {Box} from "@mui/material";

function App() {
    return (
        <Box sx={{height: '100vh', width: '100vw',background:'#2C2C2C',overflow:'hidden'}}>
            <Home/>
        </Box>
    );
}

export default App;

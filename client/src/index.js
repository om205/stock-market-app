import React from 'react'
import { useState } from 'react';
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from './App'
import Login from "./login/LoginPage";
import Chart from './chart/Chart';

const Interface = () => {
    const [loggedIn, setLoggedIn] = useState(true)
    return (
        <>
            <BrowserRouter>
                {/* <Routes>
                    <Route exact path='/' element={loggedIn ? <Navigate to='/nse'/> : <Login/>} />
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/nse/*" element={<App/>}/>
                </Routes>
                <App/> */}
                <Chart/>
            </BrowserRouter>
        </>
    )
}

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<Interface />)
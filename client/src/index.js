import React from 'react'
import { useState } from 'react';
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import App from './App'
import Login from "./login/LoginPage";
import Chart from './chart/Chart';

const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        cacheTime: Infinity,
      },
    },
});

const mapping = {
    nse: 1,
    bse: 2,
    ashokley: 3,
    cipla: 4,
    eichermot: 5,
    reliance: 6,
    tatasteel: 7
}

const Interface = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    return (
        <>
            <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                Temporary link -site_under_development- <Link to='/bse' >Go to HomePage</Link>
                <Routes>
                    <Route exact path='/' element={loggedIn ? <Navigate to='/nse'/> : <Navigate to='/login'/>} />
                    <Route path="/login" element={<Login/>}/>
                    <Route path='/company/:id' element={<App/>}/>
                    <Route path="/:id" element={<App/>}/>
                    <Route path='/chart' element={<Chart searchId={2} searchName='Bse'/>}/>
                </Routes>
                
                </QueryClientProvider>
            </BrowserRouter>
        </>
    )
}

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<Interface />)
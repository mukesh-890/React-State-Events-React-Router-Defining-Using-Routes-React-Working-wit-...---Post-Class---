import React from 'react';
import {Home} from "./Pages/Home.js"
import {Index} from "./Pages/Index.js"
import {NotFound} from "./Pages/NotFound.js"
import {Routes,Route} from 'react-router-dom';
export const AppRoutes = () => {
    return (
        <>
        <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='*' element={<NotFound/>}/>
        </Routes>
        </>
    )
}

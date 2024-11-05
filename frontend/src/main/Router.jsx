import React from "react";
import reactRouter from 'react-router'
import reactRouterDom, {BrowserRouter, Routes, Route} from 'react-router-dom'

import Crud from "./Crud";
import Principal from "./Principal";

export default function (props){
    return <Routes>
        <Route exact path="crud" element={<Crud></Crud>}></Route>
        <Route path="*" element={<Principal/>}></Route>
    </Routes>
}

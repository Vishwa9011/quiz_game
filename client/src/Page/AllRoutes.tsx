import React from "react";
import { Route,Routes } from "react-router";
import { Register } from "../Components/Register/Register";
import Home from "./Home";
export const AllRoutes=()=>{
    return(
        <>
        <Routes>
        <Route path="/" element={<Home />} />
        </Routes>
        </>
    )
}
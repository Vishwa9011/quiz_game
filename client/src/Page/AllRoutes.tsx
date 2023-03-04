import React from "react";
import { Route, Routes } from "react-router";
import { Register } from "./Register/Register";
import Home from "./Home";
export const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/leaderboard" element={<Register />} />
            </Routes>
        </>
    )
}
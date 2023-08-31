import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import SearchMovie from "../pages/SearchMovie";
import PersonallGallery from "../pages/PersonalGallery";

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route Component={Home} path="/" exact />
                <Route Component={SearchMovie} path="/search" />
                <Route Component={PersonallGallery} path="/gallery" />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;
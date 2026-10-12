import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Components/Home";
import Restaurant from "./Components/Restaurant";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RestaurantMenu from "./Components/RestaurantMenu";
import SearchFood from "./Components/SearchFood";
import SecondaryHome from "./Components/SecondaryHome";


function App(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route element={<SecondaryHome/>}>
                        <Route path="/restaurant" element={<Restaurant/>}></Route>
                        <Route path="/city/delhi/:id" element={<RestaurantMenu/>}></Route>
                        <Route path="/city/delhi/:id/search" element={<SearchFood></SearchFood>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);


// Proxy server = https://cors-anywhere.herokuapp.com

// swiggyAPI =  https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true

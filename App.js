import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Header } from "./src/components/Header";
import { Body } from "./src/components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./src/components/About";
import Error from "./src/components/Error";
import './App.css'


const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};


const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<AppLayout />);
root.render(<AppLayout />)
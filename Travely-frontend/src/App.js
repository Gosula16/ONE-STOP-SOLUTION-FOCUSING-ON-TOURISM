import { BrowserRouter,Route, Routes } from "react-router-dom";
import React from "react";
import Home from './pages/Tour/Home'
import Layout from "./components/Layout/Layout";
import "./App.css";


export default function App() {
  return (
    <BrowserRouter>
      <Layout />
      <Routes>
      <Route path="/tours/home" component={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

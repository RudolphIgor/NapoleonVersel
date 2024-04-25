import './App.css';
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import './fonts/fonts.css'
import Modal from "./components/Modal";
import {useState} from "react";

function App() {

    return (
        <div className={"wrapper"}>
            <Header/>
            <main className="main">
                <Routes>
                    <Route path="" element={<Home/>}/>
                </Routes>
            </main>
            <Footer/>
        </div>
    );
}

export default App;

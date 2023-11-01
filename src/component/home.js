import React from "react";
import ReactDOM from "react-dom";
import {Routes , Route,Router} from "react-router-dom";
import "./home.css"
import Header from "./header";
import Signup from "./application";
function Home(){
    return (
        <>
        <Header />
        <div className="home">
            <div className="welcome_message">
                <h2 >5000+ job listed</h2>
                <h1>Find Your Dream Job</h1>
                <p>We provide you with the job you are interestd in</p>
                <button> Upload Your Resume</button>
            </div>
            <div className="background_image"></div>
        </div>
        <Signup/>
        </>
    )
}
export default Home;
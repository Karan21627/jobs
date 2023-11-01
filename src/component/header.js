import React,{useState} from "react";
import ReactDOM from "react-dom";
import "./header.css";
import Signup from "./application";
import LoginPopup from "./candidate_login";
import { Link } from "react-router-dom";
function Header(){
    const [isOpen, setIsOpen] =useState(false);
    return (
        <>
        <div className="navbar">
            <div className="job-title">
                <img src="https://static.vecteezy.com/system/resources/previews/016/826/465/original/job-search-website-line-gradient-circle-background-icon-vector.jpg"></img>
                <div>
                    <h1> Job Board</h1>
                    <p>find your dream job</p>
                </div>
            </div>
            <div className="tab">
                <Link to ="/">Home</Link>
                <Link to ="/jobs">Browe job</Link>
                <Link to ="/pages">Pages</Link>
                <Link to= "/post">Post</Link>
                <Link to ="/contact">Contact</Link>
            </div>
            <div className="login">
                <button onClick={() => setIsOpen(true)}>Login</button>
                <button >Post a Job</button>

            </div>
        </div>
        <LoginPopup isOpen={isOpen} />

        </>
    )
}
export default Header;
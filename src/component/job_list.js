import React, {useEffect, useState} from "react";
import axios from "axios";
import Header from "./header";
import "./job_list.css";
import Card from "./job_card";
function Job_list(){
    const [data, setData]=useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8080")
        .then((response)=>{
            setData(response.data);
        }).catch((error)=>{
            console.log(error);
        })
    })

    function createCard(job) {
        return(
            <Card
                name={job.name}
                job_role={job.job_role}
            />
        )

    }
    return (
        <>
        <div className="navbar">
        <Header/>
        </div>
        
        <div className="job">
        <div className="filter">
            <h1>All Filters</h1>
            <h3>secotrs</h3>
            <div>
            <input id="it" type="checkbox" placeholder="IT Sectors"></input>
            <label for="#it">IT Sectors</label>
            </div>
            <div>
            <input id="it" type="checkbox" placeholder="IT Sectors"></input>
            <label for="#it">IT Sectors</label>
            </div>
            <div>
            <input id="it" type="checkbox" placeholder="IT Sectors"></input>
            <label for="#it">IT Sectors</label>
            </div>
            <div>
            <input id="it" type="checkbox" placeholder="IT Sectors"></input>
            <label for="#it">IT Sectors</label>
            </div>
        </div>
        <div className="job-card">
            {data.map(createCard)};


        </div>

        </div>
        

        </>

    )
}
export default Job_list;
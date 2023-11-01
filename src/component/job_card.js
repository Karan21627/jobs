import React from "react";
import "./job_card.css"

function Card(props){
    return(
        <div className="card">
            <h1> {props.name}</h1>
            <p>{props.job_role}</p>

        </div>
    )
}
export default Card;
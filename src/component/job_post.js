import react, { useState } from "react";
import axios from "axios";
import Header from "./header";
import "./job_post.css";

function Post(){
    const [formData, setFormData] = useState({
        name:"",
        job_role:"",
        job_type:"",
    });

    function handleChange(e){
        const {name, value}= e.target;
        setFormData({
            ...formData,
            [name]:value,
        })
    }

    async function handleSubmit(e){
        e.preventDefault();

        try{
            const response= await axios.post("http://localhost:8080/post/job",formData);
            console.log(response);
        } catch(err){
            console.log(err);
        }

    }
    return (
        <>
        <Header/>
        <h1>subham kumar</h1>
        <form className="job_post" onSubmit={handleSubmit} >
            <input
                type='text'
                name="name"
                placeholder='Company Name'
                value={formData.name}
                onChange={handleChange}
            ></input>
            <input
                type='text'
                name="job_role"
                placeholder='job_role'
                value={formData.job_role}
                onChange={handleChange}
            ></input>
            <input
                type='text'
                name="job_type"
                placeholder='job_type'
                value={formData.job_type}
                onChange={handleChange}
            ></input>
            <button type="submit">Post</button>
        </form>
        
        </>
    )
}
export default Post;
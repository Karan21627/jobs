import React, {useState} from 'react';
import axios from 'axios';


function Signup(){
    const [formData, setFormData] =useState({
        name:"",
        email:"",
        password:"",

    })
    const handleChange = (e)=>{
        const {name, value}=e.target;
        setFormData({
            ...formData,
            [name]:value,
        })
    }
    const handleSubmit= async(e)=>{
        e.preventDefault();

        try{
            const responce= await axios.post("http://localhost:8080/example",formData);
            console.log(responce);
        } catch(err){
            console.log(" error posting data"+err);
        }

    }

    return(
        <>
        <h1>signUp page</h1>
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            >

            </input>
            <input 
            type="email"
            name="email"
            placeholder="email"
            value={formData.email}
            onChange={handleChange}
            ></input>

                <input 
            type="password"
            name="password"
            placeholder="password"
            value={formData.password}
            onChange={handleChange}
            ></input>
                
            <button type="submit">submit</button>
        </form>
        </>
    )
}
export default Signup;

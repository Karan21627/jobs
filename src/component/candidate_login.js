import React, {useState}from 'react';
import { useNavigate,Link } from 'react-router-dom';
import "./candidate_login.css"


import axios from 'axios';
function LoginPopup(props){
    const [formData, setFormData]=useState({
        email:"",
        password:"",
    })
    const [loginError, setLoginError] = useState('');
    const navigate= useNavigate();
   

    const handleChange=(e)=>{
        const {name, value}=e.target;
        setFormData({
            ...formData,
            [name]:value,
        })
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();

        try{
            const response= await axios.post("http://localhost:8080/login",formData);
            if (response.status === 200){
                navigate('/');
            }else if(response.status === 404){
                setLoginError("user not found");
            }else if (response.status ===401){
                setLoginError("incorrect password");
            }


        } catch(err){
            console.log(err);
        }
    }
    return (
        <>
        <div className={`popup ${props.isOpen ? 'open':''}`}>
        <form className='form'  onSubmit={handleSubmit}>
            <input type='email' name='email' placeholder='email' value={formData.email} onChange={handleChange}></input>
            <input type='password' name='password' placeholder='password' value={formData.password} onChange={handleChange}></input>
            <button type='submit'>submit</button>
            <p>{loginError}</p>
            <p>new user? </p>
            <Link to ="/Register">Register</Link>
            
        </form>

        </div>
        
        </>
    )
}
export default LoginPopup;
import React, {useState} from React;
function Employer_signup(){
    const [formData, setFormData]=useState({
        company_name:"",
        email:"",
        password:"",
        company_type:"",
        description:"",
        phone:"",
        size:0,
        logo_url:"",

    })
    const handleChange = (e)=>{
        const {name, value}= e.target;
        setFormData({
            ...formData,
            [name]:value
        })
    }
    const handleSubmit= async(e)=>{
        e.preventDefault();
        try{
            const response= await axios.post("", formData);
            console.log(response);
        } catch(err){
            console.log(err);
        }


    }
    return(
        <>
        <Header/>
        <h1>Signup for candidate</h1>
        <form onSubmit={handleSubmit} >
            <input
                type="text"
                name="company_name"
                placeholder="company_name"
                value={formData.company_name} 
                onChange={handleChange}

            ></input>
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
            <input
                type="Number"
                name="Size"
                placeholder="Size"
                value={formData.Size}
                onChange={handleChange}

            ></input>
            <input
                type="text"
                name="company_type"
                placeholder="company_typee"
                value={formData.company_type}
                onChange={handleChange}

            ></input>
            <input
                type="text"
                name="discription"
                placeholder="discription"
                value={formData.description}
                onChange={handleChange}

            ></input>
            
            <input
                type="text"
                name="phone"
                placeholder="phone"
                value={formData.phone}
                onChange={handleChange}

            ></input>
            
            <button  type="submit">submit</button>
            
        </form>
        </>

    )
}
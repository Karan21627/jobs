import react, {useState,useEffect} from 'react';
import axios from 'axios';
function JobInfo(){
    const [data, setData]=useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8080")
        .then((response)=>{
            setData(response.data);
        }).catch((error)=>{
            console.log(error);
        })
    })

    return(
        data
    )

}
export default JobInfo;
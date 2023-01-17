import React from 'react'
import { v4 as uuid } from 'uuid';
import { useNavigate } from 'react-router-dom';
export default function Register() {
    const [name,setName]=React.useState('')
    const [password,setPassword]=React.useState('')
    const [location,setLoation]=React.useState('')
    const [interest,setInterest]=React.useState([])
    const navigate=useNavigate()
    const handleSubmit=async()=>{
        try{
        let body={
            "name":name,
            "password":password,
            "location":location,
            "interest":interest,
            "id":uuid(),
            "subscribed":[]
    
        }
        let res=await fetch(`http://localhost:8080/users`,{
                method:"POST",
                body:JSON.stringify(body),
                headers:{"Content-Type":"application/json"
            }
        })
    }
    catch(e){console.log(e)}
    alert('registration successful')
        navigate('/home')
    }
    return (
        <div>
            <form className = "auth_form"  action={handleSubmit()}>
                <input
                    type = "name"
                    className = "name"
                    placeholder = "Enter Name"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                />
                <br />
                <input
                    type = "text"
                    className = "location"
                    placeholder = "Location"
                    value={location}
                    onChange={(e)=>setLoation(e.target.value)}
                />
                <br />
                <input
                    type = "text"
                    className = "interests"
                    value={interest}
                    onChange={(e)=>setInterest(e.target.value)}
                    placeholder = "What are your interests? Add comma separated values"
                />
                <br />
                <input
                    type = "password"
                    className = "password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    placeholder = "Enter password"
                />
                <br />
                <input  className = "submit" type = "submit"/>

            </form>                
        </div>
    )
}
import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
export default function Login() {
    const [name,setName]=useState('')
    const [password,setPassword]=useState('')
    const navigate=useNavigate()
    const handleSubmit=async()=>{
        const res=await fetch(`http://localhost:8080/users`)
        const response=await res.json()
        const result=response.filter((el)=>el.name==name)
        if(result){
            if(result.password==password){
                // alert('login successfull')
                navigate('/home')
                return
            }
            else{
                alert('invalid login creadential')
                return
            }
        }
        else
           { alert('invalid login creadential')
           return}
    }
    return (
        <div>
            <form className = "auth_form" action={handleSubmit()} >
                <input
                    type = "name"
                    className = "name"
                    placeholder = "Enter Name"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                />
                <br />
                <input
                    type = "password"
                    className = "password"
                    placeholder = "Enter password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />
                <br />
                <input className = "submit" type = "submit"/>

            </form>    
        <h3 className='error-container'></h3>
        </div>
    )
}

import React from 'react'
import '../App.css'

import {useNavigate} from 'react-router-dom'
export default function Dashboard() {
  const navigate = useNavigate();
  const [meetups,setMeetups]=React.useState([])
  const getMeetups= async ()=>{
    const res=await fetch(`http://localhost:8080/meetups`)
    const result=await res.json()
    setMeetups(result)
    console.log("meetups",meetups)
  }
  React.useEffect(()=>{
    getMeetups()
  },[])
  return (
    <div>
        <div>
          <button className = "my-events" onClick={()=>navigate('/home')}> Show My Events </button>
          <div>
            <button onClick={()=>navigate('/login')}>Login</button>
            <button className = "register" onClick={()=>navigate('/register')} >Register</button>
          </div>
        </div>
       <h2>Upcoming Events</h2>
        <div className = "meetups_wrapper" style = {{display: "flex", gap: "50px", margin: "50px", flexWrap: "wrap"}}>
          { meetups.map((item)=>
              <div style={{'width':'28%'}} key={item.id}>
                <img className="image" src={item.image} alt = "img" />
                <h4 className="title"> {item.title} </h4>
                <div className="location"> {item.location}</div>
                <div className="date"> {item.date} </div>
                <div className="time">{item.time} </div>
                <div className="theme">{item.theme} </div>
                <div className="description"> {item.description}</div>
              </div>
              )}
        </div>
    </div>
   
  )
}

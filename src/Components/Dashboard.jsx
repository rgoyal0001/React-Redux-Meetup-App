import React from 'react'
import {useNavigate} from 'react-router-dom'
export default function Dashboard() {
  const navigate = useNavigate();

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
        <div className = "meetups_wrapper" >
          Map the below container against your meetup events data
          <div >
            <img className="image" alt = "img" />
            <h4 className="title"> </h4>
            <div className="location"> </div>
            <div className="date"> </div>
            <div className="time"> </div>
            <div className="theme"> </div>
            <div className="description"> </div>
          </div>
        </div>
    </div>
   
  )
}

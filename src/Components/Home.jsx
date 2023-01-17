import userEvent from "@testing-library/user-event"
import React from "react"
import '../App.css'
// import * as dotenv from '../../.env' 
// dotenv.config()
export default function Home() {
  const [subscribed,setSubscribed]=React.useState([])
  const [events,setEvents]=React.useState([])
  const [recommended,setRecommended]=React.useState([])

  const getSubscription= async (userid)=>{
    const res=await fetch(`http://localhost:8080/users`)
    const responce=await res.json()
    const userDetails=await responce.filter((el)=>el.id==userid)
    setSubscribed(userDetails[0].subscribed)
    console.log("subscribed",subscribed)
    getEvents(subscribed)
  }
  const getEvents=async(inpArr)=>{
    const res=await fetch(`http://localhost:8080/meetups`)
    const responce=await res.json()
    const sub=[]
    const rec=[]

    responce.map((el)=>{
      if(subscribed.includes(el.id))
        sub.push(el)
      else rec.push(el)
    })
    setEvents(sub)
    setRecommended(rec)
    console.log("events",events)
    console.log("rec",recommended)
  }
  React.useEffect(()=>{
    getSubscription(2)
  },[])
    return (
      <div>
        <div>
          <h2 style = {{textAlign: "center"}} >Subscribed Events</h2>
          <div className = "subscribed-events">
            {/* <button onClick={()=>{getSubscription(2)}}>sdj</button> */}
             {/* Map the below container against your subcribed events */}
              { events.map((item)=>
              <div key={item.id}>
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

          <h2 style = {{textAlign: "center"}}>Recommended Events</h2>
          <div className = "recommended-events" style = {{display: "flex", gap: "50px", margin: "50px", flexWrap: "wrap"}} >
             {/* Map the below container against your recommended events data */}
              {recommended.map((item)=>
              <div style={{'width':'28%'}}  key={item.id} >
                <img className="image" src={item.image} alt = "img" />
                <h4 className="title"> {item.title} </h4>
                <div className="location">Location- {item.location}</div>
                <div className="date">Date- {item.date} </div>
                <div className="time">Time-{item.time} </div>
                <div className="theme">Theme-{item.theme} </div>
                <div className="description">Description- {item.description}</div>
              </div>
              )}
            </div>
        </div>
        
      </div>
     
    )
}

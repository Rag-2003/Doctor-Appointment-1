import AppointmentForm from "../components/AppointmentForm.jsx"
import Hero from "../components/Hero.jsx"

//import React from 'react'
const Appointment = () => {
  return (
    <div>
<Hero title={"schedule your appointment | Raghav medical instititute"} imageUrl={"/signin.png"}/>
<AppointmentForm/>
    </div>
  )
}

export default Appointment

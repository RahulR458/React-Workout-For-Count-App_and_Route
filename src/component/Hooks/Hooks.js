import React, { useEffect } from 'react'
import { useForm } from './useForm'

export default function Hooks() {

    const [value, handleChange] = useForm({
      name: "",
      email: ""
    })

    useEffect(()=>{
      console.log("Running");

      return()=>{
        console.log("Unmount");
      }
    },[value.name])
   
  return (
    <div>
        <h1>Hooks </h1>
        <form action="" autoComplete='off'>
        <input type="text" name='name' value={value.name} onChange={handleChange}/>
        <input type="text" name='email' value={value.email} onChange={handleChange}/>
        </form>
    </div>
  )
}


 
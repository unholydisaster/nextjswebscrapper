const { useState } = require("react")
import React from "react"
const cheerio =require("cheerio")
import { useRouter } from 'next/router'

const AddUrl=()=>{
const [input,setInput]=useState({
    Url:"",Elements:""
})
const router = useRouter()

const handleChange=(e)=>{
  setInput((prevState)=>({
      ...prevState,
      [e.target.name]:e.target.value
  }))
   
}

const sendRequest= ()=>{
    fetch("/api/",{
        method:"POST",
        body:JSON.stringify({
            url:input.Url,
            elements:input.Elements
        }),
        headers:{
            "Content-Type":"application/json",
        },
    }).then((res)=>res.json())
    .then(router.push('/scrapeded'))
}

const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(input)

    if(!input.Url){
        return
    }else{
        sendRequest()
    }

  
}
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="Url">Url</label>
                <input
                value={input.Url}
                onChange={handleChange}
                type="text"
                name="Url"
                />

                <label htmlFor="Element">Element</label>
                <input
                value={input.Elements}
                onChange={handleChange}
                type="text"
                name="Elements"
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default AddUrl
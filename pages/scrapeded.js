import fs from "fs"
import path from "path"

const cheerio =require("cheerio")
import axios from "axios"
import React from "react"
import {Listul, Outerdiv} from "../styles/List"

const Scrapeded=({data}) =>{
  return (
  <div>
    <Outerdiv>
      {data.map((pre)=> {
        return(
        <Listul key={pre.scrdata}>
          <li><a>{pre.scrdata}</a></li>
        </Listul>                               
        )
        })}
    </Outerdiv>
  </div>
  )
}

export async function getServerSideProps(){
function getData(){
    const filePath=path.join(process.cwd(),"data", "index.json")
    const fileData=fs.readFileSync(filePath)
    const data=JSON.parse(fileData)
    return data
}

const data=getData()

//this will make the result not repeat it seft
var dataArr = data.map(item=>{
  return [item.url,item]
}); // creates array of array
var maparr = new Map(dataArr); // create key value pair from array of array
var result = [...maparr.values()];//converting back to array from mapobject
  
var elementos=[]

const fetchData=await Promise.all(result.map(async (element) => {
 const results=await axios.get(element.url)
 const html=await results.data;
 const $=cheerio.load(html)
 console.log($.html()) 
 
 $(element.elements, html).each(function(){
   const scrdata=$(this).text().trim()

   elementos.push({
    scrdata})
    
})
return elementos
}))



  return{
    props:{
      data: elementos
    }
  }
}
export default Scrapeded
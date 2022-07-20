// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import fs from "fs"
import path from "path"

function getData(){
    const filePath=path.join(process.cwd(),"data", "index.json")
    const fileData=fs.readFileSync(filePath)
    const data=JSON.parse(fileData)
    return data
}

export default function handler(req, res) {
  const {method}=req;
  if(method==="GET"){
    const data=getData()


    return res.status(200).json({urls:data})

}else if(req.method==="POST"){
  const {url,elements}=req.body
    
    const data=getData()
    
    const newUrl={url,elements}
    data.push(newUrl)
    
    const filePath=path.join(process.cwd(),"data","index.json")
    fs.writeFileSync(filePath,JSON.stringify(data))
    return res.status(201).json({message:"Added",urls:newUrl})
  }

}
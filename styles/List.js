import styled from "styled-components"
import Link from 'next/link'

const breakpoints=[640,768,1024,1280]

export const mq=breakpoints.map(
    bp=>`@media screen and (max-width:${bp}px)`
)


export const Outerdiv=styled.div`
position:relative;
width:50%;
height:100%;
top:90px;
left:25%;
background-color:#d1d1d1;

${mq[0,1]}{
position:relative;
width:90%;
height:100%;
top:90px;
left:5%;
background-color:#d1d1d1;
}
`
export const Listul=styled.ul`
position:relative;
top:20px;
width:50%;
left:25%;
background-color:#ffffff;

${mq[0,1]}{
position:relative;
top:10px;
width:90%;
left:5%;
background-color:#ffffff;
}
`
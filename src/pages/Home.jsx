import React from "react";
import Layout from "../components/Layout.jsx";
import { useEffect , useState} from 'react'
import { Link } from "react-router-dom"

export default function Home(){
    const [Organisation , setOrganisation] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/students")
        .then((res)=> res.json())
        .then((data) =>{
            setStudents(data)
        })
      }, [])
    return(
       
        <div>
        <Layout/>  
               
        
       </div>

 )
   
 }
 
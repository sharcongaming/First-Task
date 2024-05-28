import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'
import "../Style/navbar.css"


const Navbar = () => {
      
  const router = useNavigate()
  const {state,dispatch} =  useContext (AuthContext)
  
  return (
    <div className='navbar'>
      <div className='logo'>
        <img  style={{height:"60px",width:"100%",marginLeft:"50%"}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgInCJH5DxpGogW-aTBUPBNcy57E_ykhP7FVUie2yrQJtYP_lTn4JBv990rCVR954GAy4&usqp=CAU'/>
      </div>
      <div  className='second-div-navbar'>
       <p>About</p>
       <p>Contact</p>
       <p>Join Now</p>

     {state?.user?.name? <>
      {state?.user && <h2>user</h2>}
      {state?.user  &&<h2  onClick={()=>dispatch({type:"LOGOUT"})}>Logout</h2>}
      </>: <h2 style={{color:"red"}} onClick={()=> router('/login')} >Register</h2>}

     </div>

{/* 
     <h2>   Profile</h2>
     <h2>Join Now</h2>
     <h2>SignUP</h2>
     <h2>Contact</h2> */}





    </div>
  )
}

export default Navbar
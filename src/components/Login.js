import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const[data,setData]=useState({email:"", password:"" })
const navigate=useNavigate()
  const handleSubmit=async(e)=>{
    e.preventDefault()

    const response= await fetch("http://localhost:5000/api/auth/login",{
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify({email:data.email, password:data.password})
    })
    const json=await response.json()
console.log(json.authtoken)
localStorage.setItem("token",json.authtoken)
// if(json.authtoken){
 
//   navigate('/')
// }
// else{
//   navigate('/login')
// }
  }
const onChange=(e)=>{
setData({...data, [e.target.name]:e.target.value})
}
  return (
    <div className="mt-3">
    <h2>Login to continue .</h2>
    <form onSubmit={handleSubmit}>
<div className="mb-3" >
  <label htmlFor="email" className="form-label">Email address</label>
  <input type="email" className="form-control" id="email" name="email" value={data.email} onChange={onChange} aria-describedby="emailHelp "/>
  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
</div>
<div className="mb-3">
  <label htmlFor="password" className="form-label">Password</label>
  <input type="password" className="form-control" id="password" name="password" value={data.password}  onChange={onChange}/>
</div>

<button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
</form>
  </div>
)
}

export default Login

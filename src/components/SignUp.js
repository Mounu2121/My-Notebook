import React ,{useState}from 'react'


const SignUp = () => {
    const[data,setData]=useState({ name:"",email:"",password:"",cpassword:""})
  const handleSubmit=async(e)=>{
    e.preventDefault()

    const response=await fetch("http://localhost:5000/api/auth/createuser",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({name:data.name,email:data.email,password:data.password,cpassword:data.cpassword})
    })
    const json=await response.json()
  console.log(json.authtoken)
  }
  const onChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value})

  }
  

  
  return (
    <div className="container mt-3">
            <h2 className="my-2">Create an acccount to use</h2>
            <form>
             <div className="className">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name"  name="name" value={data.name} onChange={onChange} aria-describedby="emailHelp" />
                    </div>

            
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email"  value={data.email} onChange={onChange} aria-describedby="emailHelp"  />
                    <div id="emaiHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password"  name="password"   value={data.password} onChange={onChange}  />
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">ConfirmPassword</label>
                    <input type="password" className="form-control" id="cpassword" name="cpassword" value={data.cpassword} onChange={onChange} />
                </div>

                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
  )
}

export default SignUp

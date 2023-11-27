import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";

export default function Signup() {

  const [credentials, setCredentials] = useState({ name:"", email: "", password: "", cpassword:""})
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); //page reload na ho isliye 
    const{name,email,password}=credentials; //credentialse se name, email, aur password bhar nikala (login me ye nahi kiya tha hamne body me hi likh diya tha)
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify({ name:credentials.name, email: credentials.email, password: credentials.password}),
      body: JSON.stringify({ name, email, password}),
    });
    const json = await response.json();
    console.log(json);

    if (json.success) {
      //Save the auth token and redirect
      localStorage.setItem('token', json.authtoken);
      navigate("/");
    }
    else {
      alert("Invalid credentials")
    }
  }
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name="name" value={credentials.name}  onChange={onChange} aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" name="email" value={credentials.email}  onChange={onChange} aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name="password" value={credentials.password}  onChange={onChange} minLength={5} required />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" id="cpassword" name="cpassword" value={credentials.cpassword}  onChange={onChange} minLength={5} required />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

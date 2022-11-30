import {useState} from 'react'
import { useSignup} from "../hooks/useSignup"
import Header from "./header";
//import "./bootstrap.css";

const Signup = () => {
  const [Name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const {signup, error, isLoading} = useSignup()


const handleSubmit = async (e) => {
  e.preventDefault()

  await signup(Name, email, phone, password)
}

return (
 <div>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>

  <div className="card container bg-light w-50 mt-3">
    <div className="card-header">
      <h1 style={{color: "black"}}>Sign Up</h1>
    </div>
    <form className = "signup" onSubmit = {handleSubmit}>
      <div className="card-body">
          <b>
          <label className="form-label">Name</label>
          <input required type="text" className="form-control" name="name" placeholder="Enter your name here" 
          onChange = {(e) => setName(e.target.value)}
          value = {Name}/><br/>    
          <label className="form-label">Email ID</label>
          <input required type="email" className="form-control" name="email" placeholder="Enter your email here"
          onChange = {(e) => setEmail(e.target.value)}
          value = {email}/><br/>
          <label className="form-label">Phone Number</label>
          <input required type="text" className="form-control" name="phone_no" placeholder="Enter your phone number here"
          onChange = {(e) => setPhone(e.target.value)}
          value = {phone}/><br/>
          <label className="form-label">Password</label>
          <input required type="password" className="form-control" name="paswd" placeholder="Enter your password"
          onChange = {(e) => setPassword(e.target.value)}
          value = {password}/><br/>
          </b>
      </div>
      <div className="card-footer">
          <button disabled = {isLoading} type="submit" className="btn btn-dark">Sign Up</button>
      </div>
      {error && <div className="error">{error}</div>}
    </form>
  </div>
  </div>
)
}

export default Signup
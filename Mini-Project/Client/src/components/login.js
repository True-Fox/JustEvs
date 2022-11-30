import {useState} from 'react'
import Header from "./header";
import { useLogin} from "../hooks/useLogin"
import { NavLink } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login, error, isLoading} = useLogin()

const handleSubmit = async (e) => {
  e.preventDefault()

  await login(email, password)
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
    <h1 style={{color: "black"}}>Log In</h1>
  </div>
  <form className = "login" onSubmit = {handleSubmit}>
    <div className="card-body">
        <b>   
        <label className="form-label">Email ID</label>
        <input required type="email" className="form-control" name="email" placeholder="Enter your email here"
        onChange = {(e) => setEmail(e.target.value)}
        value = {email}/><br/>
        <label className="form-label">Password</label>
        <input required type="password" className="form-control" name="paswd" placeholder="Enter your password"
        onChange = {(e) => setPassword(e.target.value)}
        value = {password}/><br/>
        </b>
    </div>
    <div className="card-footer">
        <button disabled = {isLoading} type="submit" className="btn btn-dark">Log In</button>

    </div>
    {error && <div className = "error">{error}</div>}
  </form>
</div>
</div>
)
}

export default Login
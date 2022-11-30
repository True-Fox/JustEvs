import React from "react";
import { useState} from 'react'

import "./bootstrap.css";
import "./Main.css";

export default function Feedback()
{
    const [feedbackText, setFeedbackText] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const feedback = {feedbackText}

        const response = await fetch('/api/feedbacks', {
            method: 'POST',
            body: JSON.stringify(feedback),
            headers: {
                'Content-Type' : 'application/json'
            }
        })

        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        } 
        if (response.ok) {
            setFeedbackText('')
            setError(null)
            console.log('New feedback added', json)
        }
    }
    
    return(
        <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
		<div className="card container bg-light w-50 mt-5">
            <div className = "card-header">
                <h1 style = {{color:"black", textAlign: "center"}}>Feedback</h1>
            </div>
            <form className = "feedback" onSubmit = {handleSubmit}>
            <div className="card-body">
			<input type="text" id="feedback" name="feedback"
            onChange={(e) => setFeedbackText(e.target.value)}
            value = {feedbackText} placeholder="Enter your feedback..." style={{height:"200px", width:"640px", border:"1px solid"}}/>
			<br/><br/>
            </div>
            <div className = "card-footer center" id = "card">
			<button type="submit" value="Submit" className = "btn btn-dark">Submit</button>
            </div>
            {error && <div className = "error">{error}</div>}
            </form>	
			<br/><br/>
			
		</div>
        </div>
   )
}
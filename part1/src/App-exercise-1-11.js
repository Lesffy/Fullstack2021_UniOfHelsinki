import React, { useState } from 'react'
const Button = (props) => (
  <button  onClick={props.handleClick}> {props.text} </button>
)
  
const StatisticLine = (props) => { 
  const {text,value } = props
  return (
  <div> {text} {value} </div>)
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return ( 
    <div>
      <h2>give feedback </h2>
    
      <Button handleClick = {()=> setGood(good+1)} text = "good" />
      <Button handleClick = {()=> setNeutral(neutral+1)} text = "neutral" />
      <Button handleClick = {()=> setBad(bad+1)} text = "bad" /> 

      <h2>statistics </h2> 
      <table>
        <tbody>
      <tr><td><StatisticLine text = "good" value ={good} /></td></tr>
      <tr><td><StatisticLine text = "neutral" value ={neutral} /></td></tr>
      <tr><td><StatisticLine text = "bad" value ={bad} /></td></tr>
      <tr><td><StatisticLine text = "total" value ={good + neutral + bad} /></td></tr>
      <tr><td><StatisticLine text = "average" value ={(good + neutral + bad)/3} /></td></tr>
      <tr><td><StatisticLine text = "positive" value ={(good / (good + neutral + bad))*100} /></td></tr>
        </tbody>
       </table>
      </div>
  )
}

export default App
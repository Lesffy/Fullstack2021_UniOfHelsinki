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
       <StatisticLine text = "good" value ={good} />
       <StatisticLine text = "neutral" value ={neutral} />
       <StatisticLine text = "bad" value ={bad} />
       <StatisticLine text = "total" value ={good + neutral + bad} />
       <StatisticLine text = "average" value ={(good + neutral + bad)/3} />
       <StatisticLine text = "positive" value ={(good / (good + neutral + bad))*100} />
      </div>
  )
}

export default App
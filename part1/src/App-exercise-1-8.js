import React, { useState } from 'react'
const Statistics = (props) => {
  const {type, value } = props 
      return (
        <div> 
         {type} {value} 
         </div>
      )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h2>give feedback </h2>
    
      <button onClick={()=> setGood(good+1)}>good </button>
     
      <button onClick={()=> setNeutral(neutral +1 )}>neutral</button>
      
      <button onClick={()=> setBad(bad+1)}> bad </button>

      <h2>statistics </h2> 
        <Statistics type = "good" value = {good} /> 
        <Statistics type = "neutral" value = {neutral} /> 
        <Statistics type = "bad" value = {bad} /> 
        <Statistics type = "total" value = {good + neutral + bad} /> 
        <Statistics type = "average" value = {(good + neutral + bad)/3} /> 
        <Statistics type = "positive" value = {(good / (good + neutral + bad))*100} /> 
      </div>
  )
}

export default App
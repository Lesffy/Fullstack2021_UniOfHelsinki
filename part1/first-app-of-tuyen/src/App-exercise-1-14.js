import React, { useState } from 'react'


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  const [selected, setSelected] = useState(0)

  const [vote, setVote] = useState([0, 0, 0, 0, 0, 0, 0])
  const addVote = () => {
    //1) Copy of the last state of votes
    const voteCopy = [...vote];
    //2) Increment by one the value for the correspondent anecdote
    voteCopy[selected] += 1; //Grab the last value and add 1
    //3) Set the array with the update votes to the component's state
    setVote(voteCopy);
  };

  return (
    
    <div>
      <h2> Anecdotes of the day </h2>
      <p> {anecdotes[selected]} </p>
     <p> has {vote[selected]} votes </p>
     <button onClick={addVote}>vote</button>
      <button onClick={() =>setSelected(Math.floor(Math.random(anecdotes)*anecdotes.length))}> next anecdotes</button>
     <h2> Anecdote with the most votes </h2>
    <p> {Math.max(...vote)}</p>
    </div>
  )
}
export default App
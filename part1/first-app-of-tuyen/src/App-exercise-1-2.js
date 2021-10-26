import React from 'react'
const Header = (props) => {
  console.log(props)
  return <h1>{props.course}</h1>
}
const Part1 = (props) => {
  return (
    <div> 
      <p> Part1 {props.exercises1}</p>
      </div>
  )
}
const Part2 = (props) => {
  return (
    <div> 
      <p> Part2 {props.exercises2}</p>
      </div>
  )
}
const Part3 = (props) => {
  return (
    <div> 
       <p> Part3 {props.exercises3}</p>
      </div>
  )
}
const Content = (props) => {
  return (
    <div> 
      <Part1 exercises1 = {props.exercises1} />
      <Part2  exercises2 = {props.exercises2} />
      <Part3 exercises3 = {props.exercises3} />
      </div>
  )
}
const Total = (props) => {
  return (
    <div> 
      <p>
        Total {props.exercises} </p>
      </div>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  //const part1 = 'Fundamentals of React'
  const exercises1 = 10
  //const part2 = 'Using props to pass data'
  const exercises2 = 7
 // const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course = {course}/>
      <Content Part1 name1 = 'part1' exercises1 = {exercises1} 
      Part2 name2 = 'part2'  exercises2 = {exercises2} 
      Part3 name3 = 'part3'  exercises3 = {exercises3} />
      <Total exercises = {exercises1 + exercises2 + exercises3}/>
    </div>
  )
}
export default App
const Header = (props) =>{
    return (
      <h1> 
         Header {props.course}
        </h1>
    )
  }
  const Content = (props) => {
    return (
      <div> 
        <p> Content {props.part1}, {props.exercises1} </p>
        <p> {props.part2}, {props.exercises2}
        </p>
        <p> {props.part3}, {props.exercises3} </p>
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
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14
  
    return (
      <div>
        <Header course = {course}/>
        <Content part1 = {part1} exercises1 ={10}
         part2 = {part2} exercises2 ={7}
         part3 = {part3} exercises3 ={14}/>
        <Total exercises = {exercises1 + exercises2 + exercises3}/>
      </div>
    )
  }
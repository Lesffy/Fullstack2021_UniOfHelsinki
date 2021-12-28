import React from "react";

const Header = (props) => {
  return <h1>{props.name}</h1>;
};

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  );
};

const Content = ({ parts }) => {
  const coursePart = parts.map((part) => {
    return <Part key={part.id} name={part.name} exercises={part.exercises} />;
  });
  return (
    <div>   
      {coursePart}
    </div>
  );
};

const Total = ({ parts }) => {

  const total = parts.reduce((s,part) => s + part.exercises,0)
  return( 
    
    <h3>Total of {total} exercises </h3>
  ) 
}


const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default Course 
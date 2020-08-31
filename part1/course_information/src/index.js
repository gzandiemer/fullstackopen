import React from 'react';
import ReactDOM from 'react-dom'


const Header = (props) => {
  return (
    <div>
      <h1>{props.name} </h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.name} {props.nOfEx}</p>
    </div>
  )
}

const Content = () => {
  return (
    <div>
      <Part name={props.part1.name} nOfEx={props.part1.exercises} />
      <Part name={props.part2.name} nOfEx={props.part2.exercises} />
      <Part name={props.part3.name} nOfEx={props.part3.exercises} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.ex1 + props.ex2 + props.ex3}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  return (
    <div>
      <Header name={course} />
      <Content />
      <Total ex1={part1.exercises} ex2={part2.exercises} ex3={part3.exercises} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

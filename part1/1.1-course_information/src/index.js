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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return (
    <div>
      <Part name={part1} nOfEx={exercises1} />
      <Part name={part2} nOfEx={exercises2} />
      <Part name={part3} nOfEx={exercises3} />
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
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14
  return (
    <div>
      <Header name={course} />
      <Content />
      <Total ex1={exercises1} ex2={exercises2} ex3={exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

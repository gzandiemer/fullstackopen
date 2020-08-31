import React from 'react';
import ReactDOM from 'react-dom'

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  const name = "Peter"
  const age = '34'
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Heinrich" age={70 - 53} />
      <Hello name="Julie" age={age} />
      <Hello name={name} age={75 / 5} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [countVote, setCountVote] = useState(0)
  const [points, setPoints] = useState(Array.apply(null, new Array(6)).map(Number.prototype.valueOf, 0))


  const displayNext = () => {
    let copy = [...points]
    let randomIndex = Math.floor(Math.random() * Math.floor(6))
    setSelected(randomIndex)
    setCountVote(copy[randomIndex])
  }

  const vote = () => {
    let copy = [...points]
    copy[selected] += 1
    setCountVote(copy[selected])
    setPoints([...copy])
  }

  return (
    <div>
      <h2>Anecdote of the Day</h2>
      <p>{props.anecdotes[selected]}</p>
      <p>has {countVote} votes</p>
      <button onClick={vote}>vote</button>
      <button onClick={displayNext}>next anecdote</button>
      <h2>Anecdote with most Votes</h2>
      <p>{props.anecdotes[points.indexOf(Math.max(...points))]}</p>
    </div >
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
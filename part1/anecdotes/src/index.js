import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [countVote, setCountVote] = useState(0)
  const points = Array.apply(null, new Array(6)).map(Number.prototype.valueOf, 0);
  const copy = [...points]
  const displayNext = () => {
    setSelected(Math.floor(Math.random() * Math.floor(6)))
    resetVoteCount()
    console.log(selected)
  }
  const vote = () => {
    copy[selected] += 1
    console.log('copy', copy)
    console.log('selected', selected)
    incrementVote()
  }

  const incrementVote = () => {
    setCountVote(countVote + 1)
  }

  const resetVoteCount = () => {
    setCountVote(0)
  }


  return (
    <div>
      <p>{props.anecdotes[selected]}</p>
      <p>has {countVote} votes</p>
      <button onClick={vote}>vote</button>
      <button onClick={displayNext}>next anecdote</button>
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
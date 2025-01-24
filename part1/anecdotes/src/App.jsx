import { useState } from "react"
import {Button} from "./components/Button"

function App() {
  const ANECDOTES = [
    'If it hurts, do it more often.',

    'Adding manpower to a late software project makes it later!',

    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',

    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',

    'Premature optimization is the root of all evil.',

    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',

    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',

    'The only way to go fast, is to go well.'
  ]
  const VOTES = { 0: 1, 1: 3, 2: 4, 3: 2, 4: 3, 5: 4, 6: 2, 7: 5 }
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(VOTES)

  const handleClick = () =>{
    const randAnec = Math.floor(Math.random() * (ANECDOTES.length - 0) + 0)
    return setSelected(randAnec)
  }

  const handleVoteClick = () =>{
    const newVotes = {
      ...votes,
      [selected]: votes[selected] += 1
    }
    setVotes(newVotes)
  }

  const maxVotes = Math.max(...Object.values(votes))
  const mostVotedIndex = Object.keys(votes).find(key => votes[key] === maxVotes)

  return (
    <>
      <h1>Anecdote of the day</h1>
      {ANECDOTES[selected]}
      <br />
      <p>Has {votes[selected]} votes</p>
      <Button onClick={handleVoteClick}>Vote</Button>
      <Button onClick={handleClick}>Next Anecdote</Button>

      <h1>Anecdote with most Votes</h1>
      <p>{ANECDOTES[mostVotedIndex]} with {votes[mostVotedIndex]} votes</p>
    </>
  )
}

export default App

import { useState } from 'react'
import { Button } from './components/Button'
import Statistics from './components/Statistics'


function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [score, setScore] = useState(0)
  

  return (
    <>
      <h1>Give feedback</h1>
      <div>
        <Button onClick={() => {
            setGood(good +1)
            setAll(all +1)
            setScore(score+1)}
            }>
          Good
        </Button>
        <Button onClick={() => {
          setNeutral(neutral +1)
          setAll(all +1)}}>
          Neutral
        </Button>
        <Button onClick={() => {
            setBad(bad +1)
            setAll(all +1)
            setScore(score-1)}
            }>
          Bad
        </Button>
      </div>
      <h1>Statistics</h1>
      {(all > 0) ? (
          <>
            <Statistics good={good} neutral={neutral} bad={bad} total={all} score={score}/>
          </>
        ) : (
          <h2>No feedback Given</h2>
        )
      }
    </>
  )
}

export default App

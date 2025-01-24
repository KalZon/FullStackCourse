import Header from "./components/Header"
import Total from "./components/Total"
import Content from "./components/Content"

const App = () => {
  const course = {
    name: 'Half Stack application development',
    ejercicios:  [
      {course: 'Fundamentals of React', exercise: 10},
      {course: 'Using props to pass data', exercise: 7},
      {course: 'State of a component', exercise: 14}
    ]
  }

  return (
    <div>
      <Header curso={course.name}/>
      <Content ejercicios={course.ejercicios}/>
      <Total exercises={course.ejercicios}/>
    </div>
  )
}

export default App
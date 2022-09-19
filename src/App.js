

  

const App = () => { 
  const course = 'Half stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = ' Using props to pass data'
  const exercises2 = 7
  const part3 = 'States of a component'
  const exercises3 = 14
  
  // Header component

  const Header = (props) => {
    return (
      <div>
        <h1>
      {props.course}
      </h1>
      </div>
      
    )
    }

    const Content = (props) => {
      return (
       <p> 
        props.
       </p>
        
      )
      }

  return (
    <>
    <div> 
      <Header course = {course}></Header>
      <p> 
        {part1} {exercises1}
      </p>
      <p> 
        {part2} {exercises2}
      </p>
      <p> 
        {part3} {exercises3}
      </p>
      <p>Number of Exercises {exercises1 + exercises2 + exercises3} </p>
    </div>
    </>
  )
}
export default App;

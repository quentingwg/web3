
const Title = (props) => {
 return( <div> 
    <h1>{props.course}</h1>
  </div>)
}
const Part = (props)=> {
  return(
    <div>
      <p> {props.part} {props.number} </p>
    </div>
  )
}
const Content = () => {
  const infos = [{part : 'Fundamentals of React',
  exercises : 10},
 { part : 'Using props to pass data',
  exercises : 7},
  {part : 'State of a component',
  exercises : 14}]
  return (
    <div> 
      <Part part= {infos[0].part} number= {infos[0].exercises} /> 
      <Part part= {infos[1].part} number= {infos[1].exercises} /> 
      <Part part= {infos[2].part} number= {infos[2].exercises} /> 

    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'

 
   

  return (
    <div>
      <Title course = {course}/> 
      <Content  /> 
      
    </div>
  )
}

export default App
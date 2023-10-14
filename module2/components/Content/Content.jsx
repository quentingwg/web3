
import Part from "../Part/Part"
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

  export default Content
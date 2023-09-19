import Content from "./components/Content/Content"
import Title  from "./components/Header/Header"

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
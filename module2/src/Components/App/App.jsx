import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import '../../App.css'
import Display from '../Display/Display'
import Button from '../Button/Button'
import useLocalStorage from '../../Hooks/useLocalStorage'
const STORAGE_COUNTER_KEY = "count";



const App= ()=>  {
  const [count, setCount] = useLocalStorage(localStorage.getItem("count"),0)
  
  const changeCount = (delta) => {
    setCount(count + delta)
    localStorage.setItem("count", count);

  }
  

  return(
    <>
      <div>
        <Display count= {count} />
        
        <Button
              changeCount={changeCount}
              text='plus'
              delta={1}
        />
        <Button
              changeCount={changeCount}
              text= 'reset'
              delta={-count}
        />
        <Button
              changeCount={changeCount}
              text= 'moins'
              delta={1}
        />


      </div>
       
    </>
  )
}

export default App

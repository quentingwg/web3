import {useState} from 'react'
import Button from './Components/Button'
import Statistics from './Components/Statistics'

const App = () => {
    const [good,setGood]= useState(0)
    const [neutral, setNeutral]=useState(0)
    const [bad,setBad]= useState(0)
    const [showStatistics, setShowStatistics] = useState(false);


    const setAvis =(avis)=> {
        if(avis==1) setGood(good+1)
        else if(avis==2) setNeutral(neutral+1)
        else setBad(bad+1)
        setShowStatistics(true)

    }

    return (
        <div>
             <h1>Give feedback </h1>
            <Button
                setAvis={setAvis}
                avis={1}
                text='good'
            
            />
            <Button
                setAvis={setAvis}
                avis={2}
                text='neutral'
            
            />
            <Button
                setAvis={setAvis}
                avis={3}
                text='bad'
            
            />
            {showStatistics && (
                <Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
            /> 
            )}
            
        
        
        </div>
    )


}

export default App
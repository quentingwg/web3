

import {Context as CounterContext} from "../../contexts/countersContext"
import { useContext } from "react"

const BadButton = ()=> {
    const {increaseBad}= useContext(CounterContext)
    return <button onClick={increaseBad}> Increase Bad </button>

}

export default BadButton;
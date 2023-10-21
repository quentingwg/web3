import { Context  } from "../../contexts/countersContext"
import { useContext } from "react"


const GoodButton = () => {

    const {increaseGood} = useContext(Context);
    return (
        <button onClick={increaseGood}> increase good</button>


    );



}

export default GoodButton
import { Context } from "../../contexts/countersContext";
import { useContext } from "react";


const ResetButton = () => {
    const {resetAll} = useContext(Context);
    return ( <button onClick={resetAll}> reset all counters</button>)
}

export default ResetButton
import BadButton from "../Button/BadButton";
import { useContext } from "react";
import { Context as CounterContext } from "../../contexts/countersContext";
import GoodButton from "../Button/GoodButton";
import ResetButton from "../Button/ResetButton";

const App = () => {
  const { badCounter } = useContext(CounterContext);
  const {goodCounter}= useContext(CounterContext);
  return (
    <div>
      <ul>
       
        <li>
          <span>Bad : {badCounter}</span> <BadButton />
        </li>
        <li>
          <span>Good : {goodCounter}</span> <GoodButton />
        </li>
        <li>
          <span>reset : </span> <ResetButton />
        </li>
      </ul>
    </div>
  );
};

export default App;

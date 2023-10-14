import StatisticLine from "./StatisticLine"

const Statistics = (props) => {
    const all = (props.bad+props.good+ props.neutral)
    const avg= (all/3)*100
    const percentage= (props.good/all)*100
       return ( 
        <div> 
        <h1> Statistics</h1>
      <StatisticLine text={'good'} value={props.good} />
      <StatisticLine text={'neutral'} value={props.neutral} />
      <StatisticLine text={'bad'} value={props.bad} />
      <StatisticLine text={'all'} value={ all} />
      <StatisticLine text={'avg'} value={avg} />
      <StatisticLine text={'positive'} value={`${percentage.toFixed(2)}%`} />

      </div>
       
       
       )
       // <StatisticLine text="good" value= {props} /> 

}  



export default Statistics
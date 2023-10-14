import Content from 'components/Content/Content';
import Header from 'components/Header/Header';
import Total from 'components/Total/Total';
import Course from 'components/Course/Course';
import './App.css';

const App = () => {
  const course= {
    id:1,
    name: "Halfs stack application development",
    parts:[{
        name: "Fundamentals of react",
        exercices:10,
        id:1
    },{
      name: 'Using props to pass data',
        exercises: 7,
        id: 2
    },
    {
      name: 'State of a component',
      exercises: 14,
      id: 3
    }
  ]


  }
 
  return (
    <Course course= {course}/> 
  );
};

export default App;

import './App.css';
import {useState} from 'react';

// function Counter(props){
//   const title = props.title;
//   const initValue = props.body;

function Counter({ title, initValue }) {
  // const countState = useState(initValue);
  // const count = countState[0]; //let 대신 const로 붙으면 수정이 안됨
  // const setCount = countState[1];

  const [count, setCount] = useState(initValue);
  const [step, setStep] = useState(1);
  // console.log(countState);

  function up() {
    setCount(count+step);
  }

  return (
    // function(){} == ()=>{}
    <div>
      <h1>{title}</h1>
      <button onClick={up}>+</button>
      <input type="number" value={step} onChange={(evt)=>{
        // console.log('change', evt.target.value);
        setStep(Number(evt.target.value));
      }}/>
      {count}
    </div>
  );
}

function App() {
  return (
    <div>
      <Counter title="불면증 카운터" initValue={10}></Counter>
    </div>
  );
}

export default App;

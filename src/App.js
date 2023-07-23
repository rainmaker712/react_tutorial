import { Grid } from '@mui/material';
import './App.css';
import { Container } from '@mui/system';
import {useState, useEffect} from 'react';

// function Counter(props){
//   const title = props.title;
//   const initValue = props.body;

function Counter({ title, initValue }) {
  // const countState = useState(initValue);
  // const count = countState[0]; //let 대신 const로 붙으면 수정이 안됨
  // const setCount = countState[1];

  const [count, setCount] = useState(initValue);
  const [step, setStep] = useState(1);
  const [history, setHistory] = useState([5, 5]);
  // console.log(countState);

  function up() {
    const newCount = count + step;
    setCount(newCount);
    const newHistory = [...history];
    newHistory.push(newCount);
    setHistory(newHistory);
  }

  const stepHandler = (evt) => {
    // console.log('change', evt.target.value);
    setStep(Number(evt.target.value));
  };
  const style = { border: '10px solid black', padding:10, backgroundColor:'tomato' };
  return <div style={style}>
      <h1>{title}</h1>
      <button onClick={up}>+</button>
      <input type="number" value={step} onChange={stepHandler}/>
      {count}
      <ol>
        {history.map((e, index)=><li key={index}>{e}</li>)}
      </ol>

    </div>
}

function CounterUseEffect(){
  const [count, setCount] = useState(0);
  // 아래는 closure 개념
  useEffect(()=>{
    const id = setInterval(()=>{
      setCount(oldCount=>oldCount+1);
    }, 1000)
  return () => {
    console.log('clean');
    clearInterval(id);
  }
  }, []);
  
  const style = { border: '10px solid black', padding:10, backgroundColor:'tomato' };
  return <div style={style}>
    <h1>useEffect Counter</h1> {count}
  </div>
}
function App() {
  return (
    <Container>
    <div>
      <Grid container>
      <Grid item xs={12} sm={6}>
      <Counter title="불면증 카운터" initValue={10}></Counter>
      </Grid>
        <Grid item xs={12} sm={6}>
        <CounterUseEffect></CounterUseEffect>
        </Grid>
        <Grid item xs={12} sm={6}>
        <CounterUseEffect></CounterUseEffect>
        </Grid>
        <CounterUseEffect></CounterUseEffect>
        <Grid item xs={12} sm={6}>
        <CounterUseEffect></CounterUseEffect>
        </Grid>
      </Grid>
    </div>
    </Container>
  );
}

export default App;

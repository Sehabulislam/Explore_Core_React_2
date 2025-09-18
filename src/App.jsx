
import './App.css'
import Counter from './Counter'
import Batsman from './Batsman'
import Boller from './Boller'
import Users from './Users'

function App() {

  const handleClick1=()=>{
    alert("hi iam shehab")
  }
  // const handleClick2=()=>{
  //   alert("click btn 2")
  // }

  const handleClick3=(num)=>{
    const newnum = num + 3;
    alert(newnum)
  }
  return (
    <>
      <h1>Vite + React</h1>
        <Users></Users>
        
        <Batsman></Batsman>

        <Boller></Boller>

        <Counter></Counter>


      <button onClick={handleClick1}>Click Me 1</button>
      <button onClick={() => alert("click btn 2")}>Click Me 2</button>
      <button onClick={() => handleClick3(13)}>Click Me 3</button>
      <button>Click Me 4</button>
      <button>Click Me 5</button>
    </>
  )
}

export default App

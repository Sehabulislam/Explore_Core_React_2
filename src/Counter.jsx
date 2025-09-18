import { useState } from "react"

export default function Counter(){
    const [count,setCount] = useState(0)

    const handleAdd =()=>{
        const newCount = count + 2;
        setCount (newCount);
    }
    const countreStyle={
        border: "2px solid yellow"
    }
    return(
        <div style={countreStyle}>
            <h2>Count : {count}</h2>
            <button onClick={handleAdd}>Add : </button>
        </div>
    )
}
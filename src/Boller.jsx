import { useState } from "react"

export default function Boller(){
    const [bolls,setBolls] = useState(0)
    const [rans,setRans] = useState(0)

    const handleBolls=()=>{
        const updatedBolls = bolls + 1;
        setBolls(updatedBolls)
    }
    const handleRans=()=>{
        const updatedRans = rans + 2;
        setRans(updatedRans)
    }
    return (
        <div>
            <h2>Boller Name: </h2>
            <p>Total Over: </p>
            <p>Total Boll : {bolls}</p>
            <p>Total Rans : {rans}</p>
            <button onClick={handleRans}> Raning</button>
            <button onClick={handleBolls}>Bolling</button>
        </div>
    )
}
import { useState } from "react"

export default function Batsman(){
    const [runs,setRuns] = useState(0) // value na dile undifined hoye jabe
    const [sixes,setSixes] = useState(0);

    const handleSingles = ()=>{
        const updatedRuns = runs + 1;
        setRuns(updatedRuns)
    }
    const handleThrees = ()=>{
        const updatedRuns = runs + 3;
        setRuns(updatedRuns)
    }
    const handleFours=()=>{
        const updatedRuns = runs+ 4;
        setRuns (updatedRuns)
    }
    const handleSixes=()=>{
        const updatedRuns = runs+ 6;
        const updatedSixes = sixes + 1;
        setSixes(updatedSixes)
        setRuns (updatedRuns)
    }
    return(
        <div>
            <h3>Player: Bangla Batsman</h3>
            <p>Total Six : {sixes}</p>
            {
                runs >= 50 && <p>Congratulation! You Got runs 50. Yeeee?</p>
            }
            <h2>Score: {runs}</h2>
            <button onClick={handleSingles}>Singles</button>
            <button onClick={handleThrees}>Three</button>
            <button onClick={handleFours}>Fours</button>
            <button onClick={handleSixes}>Sixes</button>
        </div>
    )
}
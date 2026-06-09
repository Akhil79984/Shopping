import { useState } from "react";
const Count = () => {
    const [count, setCount] = useState(0);
    const increaseCount = () => {
        setCount(count + 1);
    }
    const decreaseCount =()=>{
        setCount(count-1);
    };
    return (
        <div className=" container">
            <h2>Count1:{count}</h2>
            
            <button onClick={increaseCount}>increase</button>
            <button onClick={decreaseCount}>decrease</button>
        </div>

    )
}
export default Count;
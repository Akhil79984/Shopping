import { useState } from "react"

const Calculator = () => {
    const [num1, setNumber1] = useState("");
    const [num2, setNumber2] = useState("");
    const [result, setResult] = useState();

    const AddNumber = () => {
        setResult(Number(num1) + Number(num2));
    }
    const SubstractNumber = () => {
        setResult(Number(num1) - Number(num2));
    }

    const MultiplyNumber = () => {
        setResult(Number(num1) * Number(num1));
    }
        const ClearValue = () => {
            setNumber1("");
            setNumber2("");
            setResult("");
        }
    
    return (
        <div className="container">
            <h1>Calculator App</h1>
            <input type="number" value={num1} placeholder="Enter the number" onChange={(e) => setNumber1(e.target.value)} />
            <input type="number" value={num2} placeholder="Enter the number" onChange={(e) => setNumber2(e.target.value)} />
            <div className="button">
                <button onClick={AddNumber}>Addition+</button>
                <button onClick={SubstractNumber}>Substraction-</button>
                <button onClick={MultiplyNumber}>Multiply</button>
                <button onClick={ClearValue}>Clear</button>
            </div>
            <div>
                <h1>Result:{result}</h1>
            </div>
        </div>
    )
}
export default Calculator;
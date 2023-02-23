import React, { useState } from 'react'
import './App.css';

const App = () => {
    const [input, setInput] = useState('');
    const [operator, setOperator] = useState('');

    const handleNumber = (e) => {
        const value = e.target.innerText;
        setInput(prevInput => prevInput + value);
    }

    const handleClear = () => {
        setInput('');
    }

    const handleOperator = (e) => {
        const value = e.target.innerText;
        setOperator(value);
    }

    return (
        <>
            <div className = "container">
                <input type="text" value={input} className="input-text"/>

                <div className="keypad">
                    <button className="toprow" onClick={handleClear}>AC</button>

                    <button className="toprow" onClick={handleOperator}>+/-</button>

                    <button className="toprow">%</button>

                    <button className="operator">&divide;</button>

                    <button className="number" onClick={handleNumber}>7</button>

                    <button className="number" onClick={handleNumber}>8</button>

                    <button className="number" onClick={handleNumber}>9</button>

                    <button className="operator" onClick={handleOperator}>&times;</button>

                    <button className="number" onClick={handleNumber}>4</button>
                    
                    <button className="number" onClick={handleNumber}>5</button>
                    
                    <button className="number" onClick={handleNumber}>6</button>
                    
                    <button className="operator" onClick={handleOperator}>&minus;</button>
                    
                    <button className="number" onClick={handleNumber}>1</button>
                    
                    <button className="number" onClick={handleNumber}>2</button>
                    
                    <button className="number" onClick={handleNumber}>3</button>
                    
                    <button className="operator" onClick={handleOperator}>+</button>
                    
                    <button className="zero" onClick={handleNumber}>0</button>
                    
                    <button className="number">.</button>
                    
                    
                    <button className="operator">=</button>
                </div>

            </div>
        </>
    )
}

export default App;
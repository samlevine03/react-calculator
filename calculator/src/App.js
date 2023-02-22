import React, { useState } from 'react'
import './App.css';

const App = () => {
    const [res, setRes] = useState("");

    return (
        <>
            <div className = "container">
                <form>
                    <input type="text" value={res} />
                </form>

                <div className="keypad">
                    <button className="toprow">AC</button>
                    <button className="toprow">+/-</button>
                    <button className="toprow">%</button>
                    <button className="operator">&divide;</button>
                    <button className="number">7</button>
                    <button className="number">8</button>
                    <button className="number">9</button>
                    <button className="operator">&times;</button>
                    <button className="number">4</button>
                    <button className="number">5</button>
                    <button className="number">6</button>
                    <button className="operator">&minus;</button>
                    <button className="number">1</button>
                    <button className="number">2</button>
                    <button className="number">3</button>
                    <button className="operator">+</button>
                    <button className="zero">0</button>
                    <button className="number">.</button>
                    <button className="operator">=</button>
                </div>

            </div>
        </>
    )
}

export default App;
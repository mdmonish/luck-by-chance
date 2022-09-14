import { useState } from "react";
import "./App.css";

function App() {
  const [val1, setVal1] = useState(1);
  const [val2, setVal2] = useState(6);
  const [sum, setSum] = useState();
  const p = "Winner"
  const roll = () => {
    let dice1 = Math.ceil(Math.random() * 6);
    let dice2 = Math.ceil(Math.random() * 6);
    setVal1(dice1);
    setVal2(dice2);
    let res = dice1 + dice2;
    setSum(res);
  };
  return (
    <div className="App">
      <h2>LUCK BY CHANCE!</h2>
      <div className="dices">
        {val1 === 1 && (
          <div className="dice one">
            <span className="dot"></span>
          </div>
        )}
        {val1 === 2 && (
          <div className="dice two">
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        )}
        {val1 === 3 && (
          <div className="dice three">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        )}
        {val1 === 4 && (
          <div className="dice four">
            <div className="space">
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <div className="space">
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        )}
        {val1 === 5 && (
          <div className="dice four">
            <div className="space">
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <span className="dot" style={{ alignSelf: "center" }}></span>
            <div className="space">
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        )}
        {val1 === 6 && (
          <div className="dice four">
            <div className="space">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <div className="space">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        )}
        {val2 === 1 && (
          <div className="dice one">
            <span className="dot"></span>
          </div>
        )}
        {val2 === 2 && (
          <div className="dice two">
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        )}
        {val2 === 3 && (
          <div className="dice three">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        )}
        {val2 === 4 && (
          <div className="dice four">
            <div className="space">
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <div className="space">
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        )}
        {val2 === 5 && (
          <div className="dice four">
            <div className="space">
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <span className="dot" style={{ alignSelf: "center" }}></span>
            <div className="space">
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        )}
        {val2 === 6 && (
          <div className="dice four">
            <div className="space">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <div className="space">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        )}
      </div>
      <button onClick={roll}>Roll The Luck</button>
      <div style={{ display: "flex",marginTop:20,justifyContent:'center' }}>
        <div className="winner">
          <h4>Player 1 will be Winner with sum less than 7</h4>
          <span>{sum < 7 && <h1>{p}</h1>}</span>
          </div>
        <div className="winner">
          <h4>Computer will be Winner with sum of 7 or 8 </h4>
          <span>{(sum === 7 || sum === 8) && <h1>{p}</h1>}</span></div>
        <div className="winner"><h4>Player 2 will be Winner with sum more than 8</h4>
        <span>{sum > 8 && <h1>{p}</h1>}</span></div>
      </div>
    </div>
  );
}

export default App;

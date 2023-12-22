import { useState } from "react";
import Rules from "./Rules";

const Dice = ({ diceFace, rollDice,setScore }) => {
  const [showRules,setShowRules]=useState(false);
  const rules=()=>{
    setShowRules((prev)=>!prev)
  }
  const reset=()=>{
    setScore(0)
  }

  return (
    <div className="roll_dice">
      <div
        className="dice_faces"
        onClick={diceFace}
      >
        <img src={`./dice_${rollDice}.png`} alt="playing dice" />
      </div>
      <h1>Click on the Dice</h1>
      <button onClick={reset}>Reset Score</button>
      <div className="instruction">
        <button onClick={rules}>
          Instruction
        </button>
        {showRules?<Rules/>:""}
      </div>
    </div>
  );
};

export default Dice;

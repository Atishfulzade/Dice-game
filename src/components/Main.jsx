import Dice from "./Dice";
import Score from "./Score";
import SelectNumber from "./SelectNumber";
import { useState } from "react";
const Main = () => {
  const [selectedNumber, setSelectedNumber] = useState();
  const [rollDice, setRollDice] = useState(1);
  const [score, setScore] = useState(0);
  const [error, setError] = useState("");

  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const diceFace = () => {
    if (!selectedNumber) {
      setError("*Select number first");
      return;
    }
    let randomDice = randomNumber(1, 7);
    setRollDice((prev) => randomDice);
    if (selectedNumber ===randomDice ) {
      console.log(rollDice);
      setScore((prev) => prev + randomDice);
    } else {
      setScore((prev) => prev - 2);
    }
    
    setSelectedNumber(undefined);
  };

  return (
    <>
    <audio autoplay="autoplay" >
     <source src="./we-wish-you-a-merry-christmas-synthified-music-bed-179198.mp3" />     
 </audio>

      <div className="upper">
        <Score score={score} />
        <SelectNumber
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <div className="lower">
        <Dice rollDice={rollDice} diceFace={diceFace} setScore={setScore} />
      </div>
    </>
  );
};
export default Main;

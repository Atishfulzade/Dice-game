
import mainImage from '../assets/Dice.png'
import Main from './Main';
const Start=({startGame})=>{
    return<>
    <div className="header">
        <div className="image">
            <img src={mainImage} alt="dice" />
        </div>
        <div className="heading">
            <h1>Dice Game</h1>
            <button onClick={startGame}>Play Now</button>
        </div>
    </div>
    </>
}
export default Start;
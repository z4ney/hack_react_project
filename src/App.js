import diceGif from './rolling_dice.gif';
import dieOne from './dice_one.png';
import dieTwo from './dice_two.png';
import dieThree from './dice_three.png';
import dieFour from './dice_four.png';
import dieFive from './dice_five.png';
import dieSix from './dice_six.png';
import './App.css';
import {useState} from 'react';


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <img src={diceGif} alt="dieRollGif" />
        
        <MyButton/>
        
        <a
          className="App-link"
          href="https://thundertrackhub.com"
          target="_blank"
          rel="noopener noreferrer" 
        >
          Click Me!
        </a>

      </header>
    </div>
  );
}








function MyButton() {
  const maxNum = 6

  const [roll, setRoll] = useState(1)

  function rollDice() {
    setRoll(randomIntRoll(maxNum))
  }

  function randomIntRoll(max) {
    return Math.floor(Math.random() * max + 1)
  }

  function displayFaces(num) {
    switch (num) {
      case 1:
        return (
          <div className="image-row">
            <img src={dieOne} alt="Die face one" className="DiceImage"/>
          </div>
        );
      case 2:
        return (
          <div className="image-row">
            <img src={dieTwo} alt="Die face two" className="DiceImage"/>
            <img src={dieTwo} alt="Die face two" className="DiceImage"/>
          </div>
        );
      case 3:
        return (
          <div className="image-row">
            <img src={dieThree} alt="Die face three" className="DiceImage"/>
            <img src={dieThree} alt="Die face three" className="DiceImage"/>
            <img src={dieThree} alt="Die face three" className="DiceImage"/>
          </div>
        );
      case 4:
        return (
          <div className="image-row">
            <img src={dieFour} alt="Die face four" className="DiceImage"/>
            <img src={dieFour} alt="Die face four" className="DiceImage"/>
            <img src={dieFour} alt="Die face four" className="DiceImage"/>
            <img src={dieFour} alt="Die face four" className="DiceImage"/>
          </div>
        );
      case 5:
        return (
          <div className="image-row">
            <img src={dieFive} alt="Die face five" className="DiceImage"/>
            <img src={dieFive} alt="Die face five" className="DiceImage"/>
            <img src={dieFive} alt="Die face five" className="DiceImage"/>
            <img src={dieFive} alt="Die face five" className="DiceImage"/>
            <img src={dieFive} alt="Die face five" className="DiceImage"/>
          </div>
        );
      case 6:
        return (
          <div className="image-row">
            <img src={dieSix} alt="Die face six" className="DiceImage"/>
            <img src={dieSix} alt="Die face six" className="DiceImage"/>
            <img src={dieSix} alt="Die face six" className="DiceImage"/>
            <img src={dieSix} alt="Die face six" className="DiceImage"/>
            <img src={dieSix} alt="Die face six" className="DiceImage"/>
            <img src={dieSix} alt="Die face six" className="DiceImage"/>
          </div>
        );
      default:
        return null
    }
  }

  return (
    <div>
      <div className="RollButton">
        <button onClick={rollDice}>
          Roll me!
        </button>
      </div>
      {displayFaces(roll)}
    </div>
  );
}





export default App;

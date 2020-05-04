import runNextPattern from './run-next-pattern';
const startButton = document.querySelector('.start');
startButton.addEventListener('click', main);
import gamePad from './game-pad';
import scores from './score-display';


function main()
{
    scores.message.innerHTML = '';
    gamePad.resetPattern()
    gamePad.addNewColor()
    gamePad.setColorsToBlink()
    gamePad.blinkSequence()
}


export default main;
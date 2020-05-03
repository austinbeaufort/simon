import runNextPattern from './run-next-pattern';
const startButton = document.querySelector('.start');
startButton.addEventListener('click', main);
import gamePad from './game-pad';


function main()
{
    gamePad.addNewColor()
    gamePad.setColorsToBlink()
    gamePad.blinkSequence()
}

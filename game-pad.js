'use strict'

import { empty, freeze, last, not, randomChoice } from 'ez-read';
import gamePadDisplay from './game-pad-display';
import user from './user';
import runNextPattern from './run-next-pattern';

const colors = freeze(['green', 'red', 'blue', 'yellow']);


gamePadDisplay.container.addEventListener('click', checkPads);
gamePadDisplay.container.addEventListener('mousedown', highlightPad);
gamePadDisplay.container.addEventListener('mouseup', removeHighlight);

class GamePad 
{
    constructor()
    {
        this.pattern = [];
        this.colorsToBlink = [];
    }

    addNewColor()
    {
        const newColor = randomChoice(colors);
        this.pattern.push(newColor);
    }

    setColorsToBlink()
    {
        this.colorsToBlink = [...this.pattern];
    }


    async blinkSequence()
    {
        const intervalId = setInterval(() => {
            console.log(this.colorsToBlink)
            const color = this.colorsToBlink.splice(0, 1);
            blink(color)
            if (empty(this.colorsToBlink))
            {
                user.turn = true;
                clearInterval(intervalId);
            }
        }, 1000);
    }
}




function highlightPad(event)
{
    if (not(user.turn))
    {
        return;
    }
    const color = event.target.id;
    const pad = document.querySelector(`#${color}`);
    pad.classList.add(`blink-${color}`);
}


function removeHighlight(event)
{
    if (not(user.turn))
    {
        return;
    }
    const color = event.target.id;
    const pad = document.querySelector(`#${color}`);
    pad.classList.remove(`blink-${color}`);
}


function checkPads(event)
{
    if (not(user.turn))
    {
        return;
    }
    const color = event.target.id;
    console.log('hi')

    if (color !== gamePad.pattern[user.counter])
    {
        console.log('game over');
        user.turn = false;
    }
    else if (color === gamePad.pattern[user.counter] && user.counter < gamePad.pattern.length - 1)
    {
        console.log('correct');
        user.counter++;
    }
    else
    {
        user.turn = false;
        user.counter = 0;
        gamePad.addNewColor()
        gamePad.setColorsToBlink()
        gamePad.blinkSequence()
    }
}


function blink(color)
{
    const pad = document.querySelector(`#${color}`);
    pad.classList.add(`blink-${color}`);
    setTimeout(() => 
    {
        pad.classList.remove(`blink-${color}`);
    }, 500)
}

const gamePad = new GamePad();

export default gamePad;
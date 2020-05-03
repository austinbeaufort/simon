import { freeze } from 'ez-read';


class GamePadDisplay
{
    constructor()
    {
        this.container = document.querySelector('.game-pad'),
        this.green = document.querySelector('#green'),
        this.red = document.querySelector('#red'),
        this.blue = document.querySelector('#blue'),
        this.yellow = document.querySelector('#yellow')
        this.buttons = freeze([this.green, this.red, this.blue, this.yellow]);
    }


    disableButtons()
    {
        this.buttons.forEach(button => button.disabled = true);
    }

    
    enableButtons()
    {
        this.buttons.forEach(button => button.disabled = false);
    }

}

const gamePadDisplay = new GamePadDisplay();

export default gamePadDisplay
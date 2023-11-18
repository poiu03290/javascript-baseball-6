import Game from '../model/Game.js';
import InputView from '../view/inputView.js';
import OutputView from '../view/OutputView.js';

import MESSAGE from '../data/message.js';

class GameController {
    constructor() {}

    start() {
        OutputView.print(MESSAGE.START);
        this.generate();
    }

    generate() {
        const game = new Game();
        this.answer = game.generateAnswer();
        OutputView.print(this.answer);
        this.userInput();
    }

    async userInput() {
        this.tries = await InputView.readTries();
        this.compare();
    }

    compare() {
        const game = new Game();
        const { strike, ball } = game.compareAnswer(this.tries, this.answer);
        this.result(strike, ball);
    }

    result(strike, ball) {
        const game = new Game();
        const result = game.combineResult(strike, ball);
        OutputView.print(result);
        if(result === '3스트라이크') {
            return this.restart();
        } 
        this.userInput();
    }

    async restart() {
        OutputView.print(MESSAGE.ANSWER);
        const input = await InputView.readReGame();
        const game = new Game();
        const isRegame = game.isCheckRegame(input);

        if(isRegame) {
            this.generate();
        }
    }
}

export default GameController;
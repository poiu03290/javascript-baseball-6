import Game from './model/Game.js';
import InputView from './view/inputView.js';
import OutputView from './view/OutputView.js';

import MESSAGE from './data/message.js';

class App {
  async play() {
    OutputView.print(MESSAGE.START);

    const game = new Game();
    const answer = game.generateAnswer();
    OutputView.print(answer);

    const tries = await InputView.readTries();
    OutputView.print(tries);

    const { strike, ball } = game.compareAnswer(tries, answer);
    console.log(strike, ball);
  }
}

const app = new App();
app.play();

export default App;
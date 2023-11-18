import Game from './model/Game.js';
import InputView from './view/inputView.js';
import OutputView from './view/OutputView.js';

import MESSAGE from './data/message.js';

class App {
  async play() {
    OutputView.print(MESSAGE.START);
    const tries = await InputView.readTries();
    OutputView.print(tries);
    const game = new Game();
    const generatedAnswer = game.generateAnswer();
    OutputView.print(generatedAnswer);
  }
}

const app = new App();
app.play();

export default App;

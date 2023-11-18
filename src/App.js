import Game from './model/Game.js';
import InputView from './view/inputView.js';

import MESSAGE from './data/message.js';

class App {
  async play() {
    console.log(MESSAGE.START);
    const tries = await InputView.readTries();
    console.log(tries);
    const game = new Game();
    const generatedAnswer = game.generateAnswer();
    console.log(generatedAnswer);
  }
}

const app = new App();
app.play();

export default App;

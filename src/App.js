import GameController from './controller/GameController.js';

class App {
  async play() {
    const gameController = new GameController();
    gameController.start();
  }
}

const app = new App();
app.play();

export default App;
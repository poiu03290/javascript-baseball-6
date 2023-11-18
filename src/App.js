import InputView from './view/inputView.js';

class App {
  async play() {
    const tries = await InputView.readTries();
  }
}

const app = new App();
app.play();

export default App;

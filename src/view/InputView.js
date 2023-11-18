import { Console } from '@woowacourse/mission-utils';

import Validation from '../model/Validation.js';

import MESSAGE from '../data/message.js';

const InputView = {
    async readTries() {
        const input = await Console.readLineAsync(`${MESSAGE.TRIES}`);

        const validation = new Validation();
        validation.triesValidate(input);

        return input;
    },

    async readReGame() {
        const input = await Console.readLineAsync(`${MESSAGE.REGAME}`);

        const validation = new Validation();
        validation.reGameValidate(input);

        return input;
    }
}

export default InputView;
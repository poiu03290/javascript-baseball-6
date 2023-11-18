import { Console } from '@woowacourse/mission-utils';

import Validation from '../model/Validation.js';

import MESSAGE from '../data/message.js';

const InputView = {
    async readTries() {
        const input = await Console.readLineAsync(`${MESSAGE.TRIES}`);

        const validation = new Validation();
        validation.inputValidate(input);

        return input;
    }
}

export default InputView;
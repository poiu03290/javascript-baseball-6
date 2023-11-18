import { Random } from '@woowacourse/mission-utils';

class Game {
    constructor() {}

    generateAnswer() {
        const computer = [];
        while (computer.length < 3) {
            const number = Random.pickNumberInRange(1, 9);
            if (!computer.includes(number)) {
                computer.push(number);
            }
        }

        return computer;
    }

    compareAnswer(tries, answer) {
        let strike = 0;
        let ball = 0;
        
        for(let i = 0; i < tries.length; i++) {
            if(+tries[i] === +answer[i]) {
                strike++
            } else if(answer.includes(+tries[i])) {
                ball++
            }
        }

        return { strike, ball };
    }

    combineResult(strike, ball) {
        if(strike === 0 && ball === 0) {
            return `낫싱`
        }
        if(strike === 0 && ball !== 0) {
            return `${ball}볼`
        }
        if(strike !== 0 && ball === 0) {
            return `${strike}스트라이크`
        }

        return `${ball}볼 ${strike}스트라이크`
    }

    isCheckRegame(input) {
        if(input === '1') {
            return true;
        }

        return false;
    }
}

export default Game;
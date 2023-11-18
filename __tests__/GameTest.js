import Game from '../src/model/Game.js';

describe("게임 클래스 테스트", () => {
    let game;

    beforeEach(() => {
        game = new Game();
    })

    test("정답 시도 채점 테스트", () => {
        const tries = ['124', '456', '134'];
        const answer = [1, 2, 3];
        const result = [{
            "ball": 0,
            "strike": 2
        }, {
            "ball": 0,
            "strike": 0
        }, {
            "ball": 1,
            "strike": 1
        }];

        tries.forEach((el, idx) => {
            expect(game.compareAnswer(el, answer)).toEqual(result[idx]);
        });
    });

    test("정답 결합 테스트", () => {
        const strike = [0, 1, 3];
        const ball = [0, 1, 0];
        const result = ['낫싱', '1볼 1스트라이크', '3스트라이크'];

        strike.forEach((el, idx) => {
            expect(game.combineResult(el, ball[idx])).toBe(result[idx]);
        });
    });

    test("재게임 결과 테스트", () => {
        const input = '1';
        expect(game.isCheckRegame(input)).toBe(true);
    });
});
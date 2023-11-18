import Validation from '../src/model/Validation.js';

describe("유효성 검사 테스트", () => {
    let validation;

    beforeEach(() => {
        validation = new Validation();
    });

    describe("정답 시도 테스트", () => {
        test("숫자 테스트", () => {
            const numbers = ['10s', 's10', '100s'];
            expect(() =>
                numbers.forEach(number => validation.triesValidate(number))).toThrow(Error);
        })

        test("3자릿수 테스트", () => {
            const numbers = ['1', '12', '1234'];
            expect(() =>
                numbers.forEach(number => validation.triesValidate(number))).toThrow(Error);
        })

        test("0이 들어가 있는지 테스트", () => {
            const numbers = ['012', '102', '120'];
            expect(() =>
                numbers.forEach(number => validation.triesValidate(number))).toThrow(Error);
        })

        test("중복 숫자 테스트", () => {
            const numbers = ['112', '122', '121'];
            expect(() =>
                numbers.forEach(number => validation.triesValidate(number))).toThrow(Error);
        })
    })

    describe("재게임 입력 테스트", () => {
        test("숫자 테스트", () => {
            const numbers = ['10s', 's10', '100s'];
            expect(() =>
                numbers.forEach(number => validation.reGameValidate(number))).toThrow(Error);
        })

        test("1 혹은 2를 입력했는지 테스트", () => {
            const numbers = ['3', '12', 's'];
            expect(() =>
                numbers.forEach(number => validation.reGameValidate(number))).toThrow(Error);
        })
    })
})
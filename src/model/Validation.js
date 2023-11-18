class Validation {
    constructor() {}

    triesValidate(input) {
        try {
            this.#isCheckNumber(input);
            this.#isCheckProperLength(input);
            this.#isCheckZeroStart(input);
            this.#isCheckDuplicatedNumber(input);
        } catch (error) {
            throw new Error(error.message);
        }
    }

    reGameValidate(input) {
        try {
            this.#isCheckNumber(input);
            this.#isCheckProperForm(input);
        } catch (error) {
            throw new Error(error.message);
        }
    }

    #isCheckNumber(input) {
        if (isNaN(input)) {
            throw new Error("[ERROR] 숫자를 입력해야 합니다.");
        }
    }

    #isCheckProperLength(input) {
        if (input.length !== 3) {
            throw new Error("[ERROR] 3자리를 입력해야 합니다.");
        }
    }

    #isCheckZeroStart(input) {
        if (input.includes('0')) {
            throw new Error("[ERROR] 0이 들어가면 안됩니다.");
        }
    }

    #isCheckDuplicatedNumber(input) {
        const set = new Set(input);
        if (set.size !== 3) {
            throw new Error("[ERROR] 중복된 숫자를 입력할 수 없습니다.");
        }
    }

    #isCheckProperForm(input) {
        const numbers = ['1', '2'];

        if(!numbers.includes(input)) {
            throw new Error("[ERROR] 1또는 2를 입력해주세요.");
        }
    }
}

export default Validation;
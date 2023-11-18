class Validation {
    constructor() {}

    inputValidate(input) {
        try {
            Validation.isCheckNumber(input);
            Validation.isCheckProperLength(input);
            Validation.isCheckZeroStart(input);
            Validation.isCheckDuplicatedNumber(input);
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static isCheckNumber(input) {
        if (isNaN(input)) {
            throw new Error("[ERROR] 숫자를 입력해야 합니다.");
        }
    }

    static isCheckProperLength(input) {
        if (input.length !== 3) {
            throw new Error("[ERROR] 3자리를 입력해야 합니다.");
        }
    }

    static isCheckZeroStart(input) {
        if (+input < 100) {
            throw new Error("[ERROR] 0으로 시작할 수 없습니다.");
        }
    }

    static isCheckDuplicatedNumber(input) {
        const set = new Set(input);
        if (set.size !== 3) {
            throw new Error("[ERROR] 중복된 숫자를 입력할 수 없습니다.");
        }
    }
}

export default Validation;
export default class BaseOperations {
    public collection(...numbers: Array<number>): number {
        let result = 0;
        numbers.forEach(val => (result += val));
        return result;
    }

    public subtraction(...numbers: Array<number>): number {
        let result = numbers[0];
        for (let index = 1; index < numbers.length; index++) {
            result -= numbers[index];
        }
        return result;
    }

    public multiplication(...numbers: Array<number>): number {
        let result = 1;
        numbers.forEach(val => (result *= val));
        return result;
    }

    public division(first_number: number, second_number: number): number {
        return first_number / second_number;
    }
}

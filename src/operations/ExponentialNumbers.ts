import BaseOperations from "./BaseOperations";

export default class ExponentialNumber extends BaseOperations {
    public exponentiation(base: number, exponent: number): number {
        return base ** exponent;
    }
}

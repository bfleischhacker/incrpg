export default interface State {
    health: Resource
    energy: Resource
}

export class Resource {
    amount: number
    max: number

    constructor(max: number, value: number = max) {
        this.max = max
        this.amount = value
    }

    percent = () => this.amount * 100 / this.max;

    subtract(amount: number): number {
        const actual = Math.min(Math.max(amount, 0), this.amount)
        this.amount -= actual
        return actual
    }

    add(amount: number): number {
        const actual = Math.min(amount, this.max - this.amount)
        this.amount += actual
        return actual
    }
}

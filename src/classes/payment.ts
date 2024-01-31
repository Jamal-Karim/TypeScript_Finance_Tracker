import { hasFormatter } from "../interfaces/hasFormatter";

export class Payment implements hasFormatter{
    recipient: string;
    details: string;
    amount: number;

    constructor(c : string, d : string, a : number) {
        this.recipient = c;
        this.details = d;
        this.amount = a;
    }

    format() : string{
       return `${this.recipient} owed ${this.details} for ${this.amount} dollars` 
    }
}
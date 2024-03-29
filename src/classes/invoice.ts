import { hasFormatter } from "../interfaces/hasFormatter";

export class Invoice implements hasFormatter {
    client: string;
    details: string;
    amount: number;

    constructor(c : string, d : string, a : number) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    format() : string{
       return `${this.client} owes ${this.details} for ${this.amount} dollars` 
    }
}
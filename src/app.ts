import { Invoice } from "./classes/invoice.js";

const form = document.querySelector('new-item-form') as HTMLFormElement;

const paymentType = document.querySelector('#type') as HTMLSelectElement;
const whoField = document.querySelector('#tofrom') as HTMLInputElement;
const description = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

const invOne = new Invoice('bob', 'work', 2);
const invTwo = new Invoice('james', 'paint', 25);

let invoices : Invoice[] = [];

invoices.push(invOne);
invoices.push(invTwo);

console.log(invoices);
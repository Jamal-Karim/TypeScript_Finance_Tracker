import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payment.js";
import { hasFormatter } from "./interfaces/hasFormatter.js";

const form = document.querySelector('.new-item-form') as HTMLFormElement;

const paymentType = document.querySelector('#type') as HTMLSelectElement;
const whoField = document.querySelector('#tofrom') as HTMLInputElement;
const description = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e : Event) => {
    e.preventDefault();

    let doc : hasFormatter;

    if(paymentType.value === 'invoice'){
        doc = new Invoice(whoField.value, description.value, amount.valueAsNumber);
    } else {
        doc = new Payment(whoField.value, description.value, amount.valueAsNumber);
    }
    console.log(doc);
})
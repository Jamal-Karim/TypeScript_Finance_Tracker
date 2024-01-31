import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payment.js";
import { hasFormatter } from "./interfaces/hasFormatter.js";
import { listTemplate } from "./classes/listTemplate.js";

const form = document.querySelector('.new-item-form') as HTMLFormElement;

const paymentType = document.querySelector('#type') as HTMLSelectElement;
const whoField = document.querySelector('#tofrom') as HTMLInputElement;
const description = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

const ul = document.querySelector('ul')!;
const list = new listTemplate(ul);

form.addEventListener('submit', (e : Event) => {
    e.preventDefault();

    let doc : hasFormatter;

    if(paymentType.value === 'invoice'){
        doc = new Invoice(whoField.value, description.value, amount.valueAsNumber);
    } else {
        doc = new Payment(whoField.value, description.value, amount.valueAsNumber);
    }
    console.log(doc);

    list.render(doc, paymentType.value, 'start');
})
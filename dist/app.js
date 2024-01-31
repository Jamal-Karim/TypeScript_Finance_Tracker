import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payment.js";
import { listTemplate } from "./classes/listTemplate.js";
const form = document.querySelector('.new-item-form');
const paymentType = document.querySelector('#type');
const whoField = document.querySelector('#tofrom');
const description = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector('ul');
const list = new listTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (paymentType.value === 'invoice') {
        doc = new Invoice(whoField.value, description.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(whoField.value, description.value, amount.valueAsNumber);
    }
    console.log(doc);
    list.render(doc, paymentType.value, 'start');
});

import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payment.js";
const form = document.querySelector('.new-item-form');
const paymentType = document.querySelector('#type');
const whoField = document.querySelector('#tofrom');
const description = document.querySelector('#details');
const amount = document.querySelector('#amount');
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
});

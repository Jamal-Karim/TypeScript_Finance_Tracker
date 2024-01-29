const form = document.querySelector('new-item-form') as HTMLFormElement;

const paymentType = document.querySelector('#type') as HTMLSelectElement;
const whoField = document.querySelector('#tofrom') as HTMLInputElement;
const description = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

let display : () => void;

display = () => {
    console.log(paymentType, whoField, description, amount);  
}

display();
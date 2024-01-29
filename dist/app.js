"use strict";
const form = document.querySelector('new-item-form');
const paymentType = document.querySelector('#type');
const whoField = document.querySelector('#tofrom');
const description = document.querySelector('#details');
const amount = document.querySelector('#amount');
let display;
display = () => {
    console.log(paymentType, whoField, description, amount);
};
display();

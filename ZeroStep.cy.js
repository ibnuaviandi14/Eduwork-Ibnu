///<reference types ="cypress" />

import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';

Given('I go to the Zero Website',() => {
    cy.visit('http://zero.webappsecurity.com/index.html')
});

When('I write Credit Card',() =>{
    cy.get('searchTerm').type('credit card {enter}')
});

Then('I should see information related Credit Card',() =>{
    cy.contains('Credit Cards')
});
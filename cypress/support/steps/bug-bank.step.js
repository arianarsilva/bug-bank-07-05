import {
    Given, When, Then
} from "@badeball/cypress-cucumber-preprocessor";
import { faker } from "@faker-js/faker";
import LoginPage from "../pages/bug-bank.page";

var loginPage = new LoginPage();


Given('tenho uma conta no banco e tenha saldo disponível', function () {
    cy.visit('https://bugbank.netlify.app/');
    window.localStorage.setItem('m@gmail.com', JSON.stringify({
            "name": "maria",
            "email": "m@gmail.com",
            "password": "1234",
            "accountNumber": "3-2",
            "balance": 1000,
            "logged": false
    }));

});

When('acessar a funcionalidade de extrato', function () {
    loginPage.typeEmailLogin('m@gmail.com');
    loginPage.typeSenhaLogin('1234');
    loginPage.clickButtonAcessar();
});
Then('consigo visualizar o saldo disponível no momento', function () {

});

Then('consigo visualizar a data de abertura da conta', function () {

});
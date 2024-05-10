import {
    Given, When, Then
} from "@badeball/cypress-cucumber-preprocessor";
import { faker } from "@faker-js/faker";
import ExtratoPage from "../pages/bug-bank.page";

var extratoPage = new ExtratoPage();


Given('tenho uma conta no banco', function () {
cy.visit('')

});

Given('tenha saldo disponível', function () {

});

When('acessar a funcionalidade de extrato', function () {
//bank-statement
});

Then('consigo visualizar o saldo disponível no momento', function (){

});

Then('consigo visualizar a data de abertura da conta', function () {

});
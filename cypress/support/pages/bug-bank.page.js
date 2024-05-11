export default class LoginPage {

    inputEmail = 'input[placeholder="Informe seu e-mail"]';
    inputName = 'input[placeholder="Informe seu Nome"]';
    inputSenha = 'input[placeholder="Informe sua senha"]';
    inputConfirmeSenha = 'input[placeholder="Informe a confirmação da senha"]';

    buttonSaldo = "#toggleAddBalance";
    buttonCadastrar = 'button[type="submit"]';

inputEmalLogin = 'input[placeholder="Informe seu e-mail"]';
inputSenhaLogin = 'input[placeholder="Informe sua senha"]';
buttonAcessar = 'button[type="submit"]';

    //A conta 227-4 foi criada com sucesso

    clickButtonCadastrar() {
        cy.get(this.buttonCadastrar).click();

    }

    typeEmailLogin(email) {
        cy.get(this.inputEmailLogin).type(email);
    }

    typeNameLogin(name) {
        cy.get(this.inputNameLogin).type(name);
    }

    typeSenhaLogin(senha) {
        cy.get(this.inputSenhaLogin).type(senha);
    }

    clickButtonAcessar () {
        cy.get(this.buttonAcessar).click();
    }

    clickButtonSaldo() {

    }



}
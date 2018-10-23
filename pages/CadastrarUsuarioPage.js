/* global By, element */
'use strict';
const uuidv4 = require('uuid/v4');

const CadastrarUsuarioPage = function () {
    //const EC = protractor.ExpectedConditions;

    //Selectors
    const nome = element(by.id('iptNome'));
    const sobrenome = element(by.id('iptSobrenome'));
    const nomeLoja = element(by.id('iptNomeLoja'));
    const cpf = element(by.id('iptCPF'));
    const dataNascimento = element(by.id('iptDtNascimento'));
    const celular = element(by.id('iptCelular'));
    const telefone = element(by.id('iptTelefone'));
    const email = element(by.id('iptEmail'));
    const confirmaEmail = element(by.id('iptConfirmaEmail'));
    const senha = element(by.id('iptSenha'));
    const confirmaSenha = element(by.id('iptConfirmaSenha'));
    const chkTermos = element(by.id('chkTermos'));
    const btnAvancar = element(by.className('btnAvancar'));
    const passoInfoAdicionais = element(by.css('.formSteps__step:nth-child(2)'));
    const fieldsetCPF = cpf.element(by.xpath('..')).element(by.css('p'));
    const randomIndex = uuidv4();

    //Actions
    this.escreverNome = (n) => {
        nome.sendKeys(n);
    };

    this.escreverSobrenome = (s) => {
        sobrenome.sendKeys(s);
    };

    this.escreverNomeLoja = (nl) => {
        nomeLoja.sendKeys(nl);
    };

    this.escreverCPF = (c) =>{
        cpf.sendKeys(c);
    };

    this.escreverDataNascimento = (dn) => {
        dataNascimento.sendKeys(dn);
    };

    this.escreverCelular = (cel) => {
        celular.sendKeys(cel);
    };

    this.escreverTelefone = (tel) => {
        telefone.sendKeys(tel);
    };

    this.escreverEmail = (e) => {
        e = e.split("variable");
        e = e[0]+ randomIndex + e[1];
        email.sendKeys(e);
    };
   
    this.escreverConfirmaEmail = (e) => {
        e = e.split("variable");
        e = e[0]+ randomIndex + e[1];
        confirmaEmail.sendKeys(e);
    };

    this.escreverSenha = (s) => {
        senha.sendKeys(s);
    };

    this.escreverConfirmaSenha = (s) => {
        confirmaSenha.sendKeys(s);
    };
    
    this.clicarCheckboxTermos = () => {
        browser.actions().mouseDown(chkTermos).click().perform();
    };

    this.clicarBtnAvancar = () => {
        btnAvancar.click();
    };

    this.checarPassoConcluido = () => {
        browser.sleep(1000);
        expect(passoInfoAdicionais.getAttribute('class')).toBe('formSteps__step formSteps__step--active');
    };

    this.checarCPFBranco = () => {
        expect(fieldsetCPF.isDisplayed()).toBeTruthy();
    };
    
};

module.exports = new CadastrarUsuarioPage();
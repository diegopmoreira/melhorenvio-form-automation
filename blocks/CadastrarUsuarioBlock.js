'use strict';

const CadastrarUsuarioBlock = function () {
  const CadastrarUsuario = require('../pages/CadastrarUsuarioPage.js')
  const base = require('../pages/BasePage.js');

  this.formularioPreenchidoAprop = (dado) => {
    base.navigationToUrl(browser.params.environmentUrl);
    CadastrarUsuario.escreverNome(dado.nome);
    CadastrarUsuario.escreverSobrenome(dado.sobrenome);
    CadastrarUsuario.escreverNomeLoja(dado.nomeLoja);
    CadastrarUsuario.escreverCPF(dado.cpf);
    CadastrarUsuario.escreverDataNascimento(dado.dataNascimento);
    CadastrarUsuario.escreverCelular(dado.celular);
    CadastrarUsuario.escreverTelefone(dado.telefone);
    CadastrarUsuario.escreverEmail(dado.email);
    CadastrarUsuario.escreverConfirmaEmail(dado.email);
    CadastrarUsuario.escreverSenha(dado.senha);
    CadastrarUsuario.escreverConfirmaSenha(dado.senha);
    CadastrarUsuario.clicarCheckboxTermos();
    CadastrarUsuario.clicarBtnAvancar();
    CadastrarUsuario.checarPassoConcluido();

  }
  

};

module.exports = new CadastrarUsuarioBlock();
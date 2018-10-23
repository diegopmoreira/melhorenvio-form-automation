/* global browser */

describe('Formulário de Cadastro', function () {
  const CadastrarUsuarioBlock = require('../blocks/CadastrarUsuarioBlock.js');
  const geraCpf = require('gerador-validador-cpf/dist/js/CPF');

    //Dados do Formulário
    const dado = {
      nome: "John",
      sobrenome: "Doe",
      nomeLoja: "Loja de Objetos",
      cpf: geraCpf.generate(),
      dataNascimento: "01011990",
      celular: '5398' + (Math.random() * 1000000),
      telefone: 5332323232,
      email: browser.params.emailAddress,
      senha: browser.params.password
  };

  it('Formulário Dados Pessoais Preenchido Apropriadamente', function () {    
    CadastrarUsuarioBlock.formularioPreenchidoAprop(dado);
  });

});
  
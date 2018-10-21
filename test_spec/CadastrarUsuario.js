/* global browser */
describe('Formulário de Cadastro', function () {
  const CadastrarUsuarioBlock = require('../blocks/CadastrarUsuarioBlock.js');
  const geraCpf = require('gerador-validador-cpf/dist/js/CPF');

  it('Formulário Dados Pessoais Preenchido Apropriadamente', function () {    
    //Dados do Formulário
    const dadoApropriado = {
      nome: "John",
      sobrenome: "Doe",
      nomeLoja: "Loja de Objetos",
      cpf: geraCpf.generate(),
      dataNascimento: "01011990",
      celular: 53989898989,
      telefone: 5332323232,
      email: browser.params.emailAddress,
      senha: browser.params.password
  };

   CadastrarUsuarioBlock.formularioPreenchidoAprop(dadoApropriado);
  });

});
  
#language: pt

Funcionalidade: Extrato

Contexto: O usuário deve estar logado e autenticado no sistema do banco
Dado tenho uma conta no banco

Cenário: Deve ser possível consultar de saldo disponível e data de abertura da conta
E tenha saldo disponível
Quando acessar a funcionalidade de extrato
Então consigo visualizar o saldo disponível no momento
Então consigo visualizar a data de abertura da conta

Cenário: Deve ser possível visualizar a tranferência enviada
E tenha saldo disponível
Quando acessar a funcionalidade de extrato
E realizar uma transferência
Então consigo visualizar a tranferência enviada identificada como saida
E consigo visualizar o saldo disponível
E consigo visualizar a data da transferência
E consigo visualizar a descrição informada na transferência realizada

Cenário: Deve ser possível visualizar uma tranferência recebida
E tenha saldo disponível
Quando acessar a funcionalidade de extrato
E realizar uma transferência
Então consigo visualizar a tranferência recebida identificada como entrada
E consigo visualizar o saldo disponível
E consigo visualizar a data da transferência
E consigo visualizar a descrição informada na transferência recebida

Cenário: Deve ser possível visualizar o símbolo "-" em transações sem descrição
E tenha saldo disponível
Quando acessar a funcionalidade de extrato
E receber uma transferencia sem descrição
Então consigo visualizar a descrição com o símbolo "-"
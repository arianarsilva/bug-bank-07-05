#language: pt

# Regras de negócio (extrato):
# - Deve exibir o saldo disponível no momento
# - Cada transação deve exibir data que foi realizada, tipo da transação (Abertura de conta / Transferência enviada / Transferência recebida)
# - Quando valor for de saida da conta deve estar em vermelho e iniciar com o sinal de menos/negativo(-)
# - Quando valor for de entrada na conta deve estar em verde
# - Transações sem comentário devem exibir (-)

Funcionalidade: Extrato

Contexto: O usuário deve possuir conta no banco, efetuar o login, acessar a página Home e acessar a funcionalidade extrato
Dado tenho uma conta no banco
E tenha efetuado o Login
E acessado a página home
Quando acesso a funcionalidade de extrato

Cenário: Deve ser possível consultar de saldo disponível
Então consigo visualizar o saldo disponível no momento

Cenário: Deve ser possível visualizar a data de abertura da conta
Então consigo visualizar a data de abertura da conta

Cenário: Deve ser possível visualizar a tranferência enviada
E tenha realizado uma transferência
Então consigo visualizar a tranferência enviada

Cenário: Deve ser possível visualizar uma tranferência recebida
E tenha recebido uma transferência
Então consigo visualizar a tranferência recebida

Cenário: Deve ser possível validar o valor de entrada na conta na cor verde  
E tenha recebido uma transferencia
Então consigo validar os valores de entrada

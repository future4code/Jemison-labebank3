# Projeto em grupo - LabeBank

## IWFS: Sistema Bancário :coin:

### Instruções:

O exercício é para ser resolvido inteiramente só com o uso de Typescript.
Crie um comando simples para rodar o código, usando o package.json.

### Funcionalidades

#### Criar Conta
Um cliente pode criar uma conta no banco se tiver idade igual ou maior do que 18 anos. Ele deve informar: nome, CPF e data de nascimento. As contas devem guardar essas informações e uma propriedade para representar o saldo do usuário. Além disso devem ser guardados, também, todos os gastos do usuário num array de extrato (possuindo o valor, a data e uma descrição). Lembre-se de que todas as contas, ao serem criadas, começam com o saldo zerado. Não podem existir dois usuários diferentes com o mesmo CPF.

#### Pegar Saldo
O usuário deve conseguir verificar o saldo da sua conta, passando o seu nome e o seu CPF.

#### Adicionar saldo
O usuário deve conseguir adicionar saldo à sua conta, passando seu nome, o CPF e o valor que desejar.

#### Pagar Conta
Esta funcionalidade é muito importante para os clientes. Eles podem pagar uma conta, se quiserem, passando: um valor, uma descrição e uma data de pagamento. Caso ele não informe a date, deve-se considerar que o pagamento é para ser feito no mesmo dia. Além disso, devemos nos atentar: ele não pode agendar um pagamento para um dia que já passou ou tentar pagar uma conta cujo valor seja maior do que o seu saldo.

#### Transferência Interna
A transferência entre contas é muito mais interessante ao banco do que aos clientes em si, porque, com esta funcionalidade, ela consegue influenciar seus clientes a convencerem conhecidos a migrarem para o banco. Para realizar esta transferência, o usuário deve informar o seu nome, o seu CPF, o nome do destinatário, o CPF do destinatário e o valor em si. Transferências não podem ser agendadas e devem respeitar o saldo do usuário remetente.

<details>
<summary><h3>Requisitos Mínimos :heavy_check_mark:</summary></h3>
 Consiste nas funcionalidades de: Criar conta, pegar as contas e adicionar uma validação de idade.
</details>
<details>
<summary><h2>🎓 Autores</h2></summary>

<div align="center">
  
[Danielle Arantes](https://github.com/artdanielle) |  [Karolina Marques](https://github.com/karolinamarques) |  [Victoria Moreira](https://github.com/vdsmoreira)

  
</div>
</details>

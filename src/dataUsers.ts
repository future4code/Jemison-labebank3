import { Usuario } from "./type";

export const contas: Usuario[] = [
    {
        id: 1,
        nome: "Alessandra",
        dataDeNascimento: "09/11/1995",
        saldo: 0,
        extrato: [
            {
                id: 1,
                data: "10/02/2022",
                descricao: "Depósito recebido com sucesso"
            },
            {
                id: 1,
                data: "20/03/2022",
                descricao: "Transferência realizada para outra conta corrente"
            }
        ]
    },
    {
        id: 2,
        nome: "André",
        dataDeNascimento: "12/08/1089",
        saldo: 0,
        extrato: [
            {
                id: 2,
                data: "04/06/2022",
                descricao: "Pagamento de boleto bancário"
            },
            {
                id: 2,
                data: "10/10/2022",
                descricao: "Depósito recebido"
            },
        ]
    },
    {
        id: 3,
        nome: "Daniele",
        dataDeNascimento: "26/07/2000",
        saldo: 0,
        extrato: []
    },
    {
        id: 4,
        nome: "Marina",
        dataDeNascimento: "14/01/1998",
        saldo: 0,
        extrato: []
    }
]
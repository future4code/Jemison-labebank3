import { Usuario } from "./type";
import { TIPOTRANSACAO } from "./type"

export const contas: Usuario[] = [
    {
        id: 1,
        nome: "Alessandra",
        dataDeNascimento: "09/11/1995",
        saldo: 0,
        extrato: [
            {
                id: TIPOTRANSACAO.RECEBER,
                data: "10/02/2022",
                descricao: "Depósito recebido com sucesso",
                valor: 10000
            },
            {
                id: TIPOTRANSACAO.TRANSFERIR,
                data: "20/03/2022",
                descricao: "Transferência realizada para outra conta corrente",
                valor: 500
            }
        ]
    },
    {
        id: 2,
        nome: "André",
        dataDeNascimento: "12/08/1089",
        saldo: 30,
        extrato: [
            {
                id: TIPOTRANSACAO.PAGAR,
                data: "04/06/2022",
                descricao: "Pagamento de boleto bancário",
                valor: 30
            },
            {
                id: TIPOTRANSACAO.RECEBER,
                data: "10/10/2022",
                descricao: "Depósito recebido",
                valor: 500
            },
        ]
    },
    {
        id: 3,
        nome: "Daniele",
        dataDeNascimento: "26/07/2000",
        saldo: 200,
        extrato: []
    },
    {
        id: 4,
        nome: "Marina",
        dataDeNascimento: "14/01/1998",
        saldo: 7000,
        extrato: []
    }
]
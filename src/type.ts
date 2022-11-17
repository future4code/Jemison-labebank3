

export type Usuario = {
    id: number,
    nome: string,
    dataDeNascimento: string,
    saldo: number,
    extrato: Extrato[]
}

export type Extrato = {
    id: TIPOTRANSACAO,
    data: string,
    descricao: string,
    valor: number
}

export enum TIPOTRANSACAO  {
    RECEBER = "receber",
    PAGAR = "pagar",
    TRANSFERIR = "transferir"
}


export type Usuario = {
    id: number,
    nome: string,
    dataDeNascimento: string,
    saldo: number,
    extrato: Extrato[]
}

export type Extrato = {
    id: number,
    data: string,
    descricao: string
}
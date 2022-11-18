import express, {Request, Response } from "express"
import cors from 'cors'
import { contas } from "./dataUsers"

const app = express()

app.use(express.json())

app.use(cors())

// 1 - instalacao ok.
app.get("/", (req:Request, res:Response) => {          
  res.send("Hello from Express")
})

app.listen(3000, () => {
    console.log("Server is running in http://localhost:3000");
});

//Endpoint de mostrar os usuários
app.get("/contas", (req:Request, res: Response) => {
  const listaContas = contas.map((conta) =>{
      return conta
  })
  res.status(200).send(listaContas)
})

//Endpoint adicionar nova conta
app.post("/criarConta", (req:Request, res: Response) => {
  try {
      let errorCode = 420;
      const {id, nome, CPF, dataDeNascimento, saldo, extrato} = req.body

      if(!id || !nome || !CPF || !dataDeNascimento || !saldo || !extrato){ //tem que separar para por um if para cada situação errada
          errorCode = 420;
          throw new Error("Precisa adicionar os erros aqui")
      }

      let data = new Date;
      const resultado : string = dataDeNascimento.split("/")
      const ano: number = Number(resultado[2])
      let anoAtual = data.getFullYear()

      if((anoAtual - ano) < 18) {
        errorCode = 420;
        throw new Error("Menor de idade não pode criar conta!")

      }

      const novaConta = {
          id,
          nome,
          CPF,
          dataDeNascimento,
          saldo,
          extrato
      }

      contas.push(novaConta)

      res.status(200).send("Usuário cadastrado com sucesso")
  } catch (error) {
      res.status(400).send("Usário não cadastrado")
  }
})
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
      const {id, nome, CPF, dataDeNascimento, saldo, extrato} = req.body

      if(!id || !nome || !CPF || !dataDeNascimento || !saldo || !extrato){
          throw new Error("Precisa adicionar os erros aqui")
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
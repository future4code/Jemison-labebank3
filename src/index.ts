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
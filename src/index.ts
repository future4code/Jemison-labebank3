import express, {Request, Response } from "express"

import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())

// 1 - instalacao ok.
app.get("/", (req:Request, res:Response) => {          
  res.send("Hello from Express")
})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});
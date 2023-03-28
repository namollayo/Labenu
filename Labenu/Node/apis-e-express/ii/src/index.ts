import express, { Request, Response } from 'express'
import cors from 'cors'
import { accounts } from './database'
import { ACCOUNT_TYPE } from './types'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003")
})

app.get("/ping", (req: Request, res: Response) => {
    res.send("Pong!")
})

app.get("/accounts", (req: Request, res: Response) => {
    res.send(accounts)
})

app.get("/accounts/:id", (req: Request, res: Response)=>{
    const id = req.params.id
    const account = accounts.find((account)=> account.id === id)

    res.status(200).send(account)
})

app.delete('/accounts/:id', (req: Request, res: Response)=>{
    const id = req.params.id
    const index = accounts.findIndex((account)=> account.id === id)
    if (index !== -1) {
        accounts.splice(index, 1);
    }

    res.status(200).send('Account successfully removed')
})

app.put('/accounts/:id', (req: Request, res: Response)=>{
    const accountId = req.params.id
    const { id, ownerName, balance, accountType } = req.body
    id as string | undefined
    ownerName as string | undefined
    balance as number | undefined
    accountType as ACCOUNT_TYPE | undefined

    
    const editableAccount = accounts.find((account)=> account.id === accountId)
    if(editableAccount){
        editableAccount.id = id || editableAccount.id;
        editableAccount.ownerName = ownerName || editableAccount.ownerName;
        editableAccount.balance = isNaN(balance) ? editableAccount.balance : balance;
        editableAccount.type = accountType || editableAccount.type
    }

    res.status(200).send("Information updated successfully")
    
})
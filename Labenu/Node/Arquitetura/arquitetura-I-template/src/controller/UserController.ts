import { Request, Response } from "express"
import { UserDatabase } from "../database/UserDatabase"
import { User } from "../models/User"
import { UserDB } from "../types"
import { UserBusiness } from "../business/UserBusiness"

export class UserController {
    public getUsers = async (req: Request, res: Response) => {
        try {
            const input: any = {
                q: req.query.q
            }
            const q = req.query.q as string | undefined
    
           const userBusiness = new UserBusiness()
           const outputUser = userBusiness.getUsers(input)
    
            res.status(200).send(outputUser)
        } catch (error) {
            console.log(error)
    
            if (req.statusCode === 200) {
                res.status(500)
            }
    
            if (error instanceof Error) {
                res.send(error.message)
            } else {
                res.send("Erro inesperado")
            }
        }
    }

    public createUser = async (req: Request, res: Response) => {
        try {
            const { id, name, email, password } = req.body
            
            const input = {
                id,
                name,
                email,
                password
            }
    
           const userBusiness = new UserBusiness()
           const outputUser = userBusiness.createUser(input)
    
            res.status(201).send(outputUser)
        } catch (error) {
            console.log(error)
    
            if (req.statusCode === 200) {
                res.status(500)
            }
    
            if (error instanceof Error) {
                res.send(error.message)
            } else {
                res.send("Erro inesperado")
            }
        }
    }
}
import { UserDatabase } from "../database/UserDatabase"
import { User } from "../models/User"

export class UserBusiness {
    public getUsers = async (input :any) => {
        const { q } = input
        const userDatabase = new UserDatabase()
        const usersDB = await userDatabase.findUsers(q)

        const users: User[] = usersDB.map((userDB) => new User(
            userDB.id,
            userDB.name,
            userDB.email,
            userDB.password,
            userDB.created_at
        ))
        return users
    } 

    public createUser = async(input:any) => {
        const { id, name, email, password } = input

        if (typeof id !== "string") {
            throw new Error("'id' deve ser string")
        }

        if (typeof name !== "string") {
            throw new Error("'name' deve ser string")
        }

        if (typeof email !== "string") {
            throw new Error("'email' deve ser string")
        }

        if (typeof password !== "string") {
            throw new Error("'password' deve ser string")
        }

        const userDatabase = new UserDatabase()
        const userDBExists = await userDatabase.findUserById(id)

        if (userDBExists) {
            throw new Error("'id' já existe")
        }

        const outputUser = {
            message: "usuário criado com sucesso"
        }
        
        return outputUser
    }
}
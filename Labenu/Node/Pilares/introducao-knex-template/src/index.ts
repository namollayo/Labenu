import express, { Request, Response } from 'express'
import cors from 'cors'
import { db } from './database/knex'

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => {
  console.log(`Servidor rodando na porta ${3003}`)
})

app.get("/ping", async (req: Request, res: Response) => {
    try {
        res.status(200).send({ message: "Pong!" })
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
})

// PG

app.get("/bands", async(req:Request, res:Response) => {
    try {
        const result = await db.raw(` SELECT * FROM bands `)
        
        res.status(200).send(result)

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
})

app.post("/bands", async(req:Request, res:Response) => {
    try {
        const { id, name } = req.body
        if (typeof id !== "string") {
            res.status(400)
            throw new Error('id must be a string')
        }

        if (typeof name !== "string") {
            res.status(400)
            throw new Error('name must be a string')
        }

        if (!id.length || !name.length) {
            res.status(400)
            throw new Error('id and name must not be empty')
        }

        await db.raw(`
            INSERT INTO bands(id, name)
            VALUES ("${id}", "${name}");
        `)

        res.status(201).send('band inserted successfully')

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
})

app.put("/bands/:id", async (req:Request, res:Response) => {
    try{
        const id = req.params.id

        const newId = req.body.id
        const newName = req.body.name

        if (newId !== undefined) {

            if (typeof newId !== "string") {
                res.status(400)
                throw new Error("'id' deve ser string")
            }

			if (newId.length <= 1) {
                res.status(400)
                throw new Error("'id' deve possuir no mínimo 1 caractere")
            }
        }

        if (newName !== undefined) {

            if (typeof newName !== "string") {
                res.status(400)
                throw new Error("'name' deve ser string")
            }

            if (newName.length < 2) {
                res.status(400)
                throw new Error("'name' deve possuir no mínimo 2 caracteres")
            }
        }

        const [ band ] = await db.raw(`
					SELECT * FROM bands
					WHERE id = "${id}";
				`)

        if (band) {
            await db.raw(`
                UPDATE bands
                SET
                    id = "${newId || band.id}",
                    name = "${newName || band.name}"
                WHERE
                    id = "${id}";
            `)

        } else {
            res.status(404)
            throw new Error("'id' não encontrada")
        }

        res.status(200).send({ message: "Atualização realizada com sucesso" })

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
})

// Fixation

app.post("/create-table-songs", async(req:Request, res:Response) => {
    try {
        await db.raw(`
        CREATE TABLE songs (
            id TEXT PRIMARY KEY UNIQUE NOT NULL,
            name TEXT NOT NULL,
            band_id TEXT NOT NULL,
            FOREIGN KEY (band_id) REFERENCES bands (id)
        );
        `)

        res.status(201).send("Songs' Table created with success")

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
})

app.post("/songs", async(req:Request, res:Response) => {
    try {
        const { id, name, band_id } = req.body

        if (typeof id !== "string") {
            res.status(400)
            throw new Error('the id must be a string')
        }

        if (typeof name !== "string") {
            res.status(400)
            throw new Error('the name must be a string')
        }

        if (typeof band_id !== "string") {
            res.status(400)
            throw new Error('the band id must be a string')
        }
               

        if (!id || !name || !band_id) {
                res.status(400)
                throw new Error('Please complete all spaces (id, name and band id)')
        }
        

        await db.raw(`
            INSERT INTO bands(id, name, band_id)
                VALUES ("${id}", "${name}", ${band_id});
        `)

        res.status(201).send("Songs' Table created with success")

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
})

app.get("/songs", async(req:Request, res:Response) => {
    try {
        const songs = await db.raw(`SELECT * FROM songs`)
        res.status(200).send(songs)

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
})
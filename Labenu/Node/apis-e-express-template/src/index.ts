import express, { Request, Response } from 'express'
import cors from 'cors'
import { courses } from './database'
import { students } from './database'
import { TCourse, TStudent } from './types'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003")
})

app.get('/ping', (req: Request, res: Response) => {
    res.send('Pong!')
})

//Pega todos os cursos: 

app.get('/courses',(req: Request, res: Response) => {
    res.status(200).send(courses)
})

//Pegar um curso filtrado

app.get('/courses/search',(req: Request, res: Response) => { 
    const q = req.query.q
    const result = courses.filter(
        (course)=>{
           return course.name.toLowerCase().includes(q.toString().toLowerCase())
        }
    )
    res.status(200).send(result)
})

// Endpoint para criação de curso pelo usuario

app.post('/courses',(req: Request, res: Response) => {

    const body = req.body
    const { id, name, lessons, stack } = body

    const newCourse: TCourse = {
        id,
        name,
        lessons,
        stack
    }

    courses.push(newCourse)
    res.status(201).send("Cadastro Realizado com Sucesso!")

})

app.get('/students', (req: Request, res: Response) => {
    res.status(200).send(students)
})

app.get('/students/search', (req: Request, res: Response) => {
    const searchStudent = req.query.student
    const student = students.filter(
        (student) => student.name.toLowerCase().includes(searchStudent.toString().toLowerCase())) 
    res.status(200).send(student)
})

app.post('/students', (req: Request, res: Response) => {
    const { id, name, age } = req.body

    const newStudent: TStudent = {
        id,
        name,
        age
    }

    students.push(newStudent)

    res.status(201).send('Estudante Cadastro com Sucesso')
})
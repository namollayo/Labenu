// Modelo de objeto

const meuObjeto = {
    chave1: 2,
    chave2: "String",
    chave3: true,
    chave4:[],
    chave5: {},
    //dadoUsuario: prompt("Digite algo.")
}

meuObjeto.novoValor = "Valor" // notação de ponto
meuObjeto["novoValor2"] = "Valor2" // notação de colchete

// Construindo objetos - Exercício 1

const student = {
    name: "Gabriela",
    lastName:"Carrara",
    registration: 22126002,
    scores: [10,10,9] 
}

const student1 = "Gabriela"
const student1Registration = 22126002
const student1Scores = [10,10,9]

student.module = "Module 1" // notação de ponto
student["module"] = "Module 1" // notação de colchete

// Acessar as propriedades
console.log("Name:",student.name);
console.log("Second score:", student.scores[2]);
console.log("Module:", student.module);

const newObject = student // Desse modo da errado, criasse um objeto com as mesmas propriedade que  o primeiro
// e todas as atualizações feitas, são realizadas nos dois, semelhante a Arrays

const newStudent = {
    ...student,
    name: "Astrodev",
    scores: [...student.scores,9],
    module: "Module 2"
}

console.log("Student: ", student)
console.log("New Student: ", newStudent);

// Crie um Array com os dois estudantes

const labenuStudents = [student,newStudent]
//      OU  
// const labenuStudents = [student]
// labenuStudents.push(newStudent)

console.log(labenuStudents);


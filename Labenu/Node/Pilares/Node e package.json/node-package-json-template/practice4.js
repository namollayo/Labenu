const name = process.argv[2]
const age = process.argv[3]
const newAge = Number(age) + 7

if(!name || !age ){
    console.log("Faltou o argumento esperado");
} else {
    const person = {
        name,
        age,
        newAge
    }
    console.log(`Hello ${person.name}! You are ${person.age} years old. 
    In seven years you'll be ${person.newAge} years old`);
}
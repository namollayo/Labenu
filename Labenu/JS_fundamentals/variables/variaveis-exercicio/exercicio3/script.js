const completeName = prompt("Enter your full name.")
const birthDate = prompt("Enter your Birth date. Example:xx/xx/xx")
const address = prompt("Enter your address")
const cpf = prompt("Enter your CPF")
const education = prompt("Enter your education level")
const driveLicense = confirm ("Do you have a drive license?")
const sons = Number(prompt("How many sons do you have?"))
const currentPosition = prompt("Enter your current position")
const salary = Number(prompt("Enter your current salary"))
const commission = Number(prompt("Enter your commission percentage (If none put 0)"))
const admissionYear = Number(prompt("Enter your admission year"))

console.log(
    typeof completeName,
    typeof birthDate,
    typeof address,
    typeof cpf,
    typeof education,
    typeof driveLicense,
    typeof sons,
    typeof currentPosition,
    typeof salary,
    typeof commission,
    typeof admissionYear);

console.log( 
    `\n
    Full name: ${completeName}, \n
    Birth date: ${birthDate}, \n
    Address: ${address},\n
    CPF: ${cpf}, \n
    Education: ${education},\n
    Drive License ${driveLicense},\n
    Number of sons: ${sons},\n
    Current Position: ${currentPosition},\n
    Current Salary: ${salary}, \n
    Commission: ${commission}, \n
    Admission Year: ${admissionYear}`);

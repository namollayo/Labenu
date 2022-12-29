const nationality = prompt("Please, enter your nationality.").toLowerCase().trim()

const optionsNationality = ["brazilian", "argentine", "uruguayan", "chilean", "colombian"];

 let checkNationality = ""

for(let i in optionsNationality){  
    if (optionsNationality[i] == nationality) {
        checkNationality = optionsNationality[i]
    } 
};

let result

if (checkNationality == "") {
    result = "We are very sorry, but there is no available program for you" 
} else {
    result = "Congratulations, our program is already available for " + checkNationality + "s"
}

console.log(result);

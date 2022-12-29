const boolean1 = false;
const boolean2 = true;

// Guided Pratice 1

// if (boolean2) {
//     alert("The boolean is true")
// }

if (boolean1) {
  alert("The boolean1 is true");
} else {
  alert("The boolean1 is false");
}

// Guided Pratice 2

const boolean3 = true

if (boolean1 === boolean2) {
    alert(" booleans 1 and 2 are equal")
} else if (boolean2 === boolean3) {
    alert("booleans 2 and 3 are equal")
} else if (boolean1 === boolean3){
    alert("booleans 1 and 3 are equal")
} else {
    alert("All the values are differents")
}


alert("End of code")

// Guided Pratice 3 

const age = 23

if ((age >= 16 && age < 18) || age >= 60) {
    alert("Optional vote")
} else if (age >= 18) {
    alert("Mandatory vote")
} else if (age < 18) {
    alert("Can't vote")
} else {
    alert("Invalid data")
}
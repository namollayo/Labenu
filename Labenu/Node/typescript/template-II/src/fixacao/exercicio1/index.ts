enum RAINBOWCOLOR {
  PURPLE = 'Purple',
  BLUE = 'Blue',
  GREEN = 'Green',
  YELLOW = 'Yellow',
  ORANGE = 'Orange',
  RED = 'Red'
}

export type TPerson = {
  name:string
  age:number
  favoriteColor: RAINBOWCOLOR
}

const personOne: TPerson = {
  name:'Alhaitham',
  age:38,
  favoriteColor: RAINBOWCOLOR.GREEN
}
const personTwo: TPerson = {
  name:'Yoimiya',
  age:18,
  favoriteColor: RAINBOWCOLOR.RED
}

const personThree: TPerson = {
  name:'Arataki Itto',
  age:29,
  favoriteColor: RAINBOWCOLOR.YELLOW
}

const arrayOfPerson: TPerson[] = [personOne, personTwo, personThree]

console.log(arrayOfPerson);

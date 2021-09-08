// Variable
let firstName: string = 'John';
let age: number = 20;
let isAlive: boolean = true;
let numOrString: number | string;

// Tableau
let arr: number[] = [1, 4, 40];
let arr2: string[] = ['john', 'doe'];
let arr3: (string | number)[] = ['john', 40]

// Objet
interface Player {
    id: number;
    name: string;
    age?: number // Facultatif
}

let player = {
    id: 0,
    name: 'john',
    age: 25
}

// Fonction
const sayName = (name: string):void => {
    console.log(`Bonjour ${name}`)
}
sayName('John')

const returnName = (name: string):string => {
    return name
}
console.log(returnName('Alex'))

// Classe

class Singer {
    id: number;
    name: string;
    isAlive?: boolean;

    constructor(id: number, name: string, isAlive?: boolean) {
        this.id = id;
        this.name = name;
        this.isAlive = isAlive;
    }
}

const prince = new Singer(0, 'Psrince', false)
const sting = new Singer(1, 'Sting')

// Enum et tuple
enum Role {ADMIN, PREMIUM, BASIC}
interface User {
    name: string;
    attributes: [number, string]
    role: Role
}

const user1:User = {
    name: 'julien',
    attributes: [24, 'author'],
    role: Role.ADMIN
}

// Type any signifie tout type possible


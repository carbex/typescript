// Variable
var firstName = 'John';
var age = 20;
var isAlive = true;
var numOrString;
// Tableau
var arr = [1, 4, 40];
var arr2 = ['john', 'doe'];
var arr3 = ['john', 40];
var player = {
    id: 0,
    name: 'john',
    age: 25
};
// Fonction
var sayName = function (name) {
    console.log("Bonjour " + name);
};
sayName('John');
var returnName = function (name) {
    return name;
};
console.log(returnName('Alex'));
// Classe
var Singer = /** @class */ (function () {
    function Singer(id, name, isAlive) {
        this.id = id;
        this.name = name;
        this.isAlive = isAlive;
    }
    return Singer;
}());
var prince = new Singer(0, 'Psrince', false);
var sting = new Singer(1, 'Sting');
// Enum et tuple
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["PREMIUM"] = 1] = "PREMIUM";
    Role[Role["BASIC"] = 2] = "BASIC";
})(Role || (Role = {}));
var user1 = {
    name: 'julien',
    attributes: [24, 'author'],
    role: Role.ADMIN
};
// Type any signifie tout type possible

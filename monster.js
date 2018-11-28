class Monster {
    constructor(typeofMonster, strength, name) {
        this._typeofMonster = typeofMonster;
        this._strength = strength;
        this._name = name;
    }
    get strength() {
        return this._strength;
    }
    get name() {
        return this._name;
    }
    changeName() {
        this._name += "Pepe";
        console.log('Monster chose the name Pepe');
    }
    Attack() {
        this._strength += 90;
        console.log('Monster attacks, does 5 damage');
    }
}

let Monster1 = new Monster("Big", 1, "BigT");
let Monster2 = new Monster("Small", 3, "LilR");

Monster1.changeName()
Monster2.changeName()
Monster1.Attack()

console.log(Monster1);
console.log(Monster2);

class EvolvedMonster extends Monster {
    constructor(typeofMonster, strength, name, speed, weapon) {
        super(typeofMonster, strength, name);
        this._speed = speed;
        this._weapon = weapon;
    }
    get speed() {
        return this._speed;
    }
    get weapon() {
        return this._weapon;
    }
    changeWeapon(x) {
        this._weapon = x
    }
}

let EMonster = new EvolvedMonster("big", 1, "BigT", 3, "sword")
console.log(EMonster.weapon)

EMonster.changeWeapon("axe")

console.log(EMonster.weapon)

let EMonster2 = new EvolvedMonster("Small", 22, "Mark", 7, "dagger")

EMonster.changeWeapon()
EMonster2.changeName()
EMonster.Attack()
function Pokemon(name, health, magic) {
    this.name = name;
    this.health = health;
    this.magic = magic;
    this.skills = [];

    this.learnAttackSkill = function (attack) {
        this.skills.push(attack);
    }

    this.showStatus = function () {
        console.log(`${this.name} status:\nmagic: ${this.magic}\nhealth: ${this.health}`);
    }

    this.attack = function (index, attacked) {
        let attack = this.skills[index];
        if (this.magic >= attack.magic && attacked.health >0 && this.health > 0) {
            attacked.health -= attack.damage;
            this.magic -= attack.magic;
            console.log(`${this.name} launched skill ${attack.name} successfully!\n${attacked.name} got ${attack.damage} damage`);
            if(attacked.health <= 0){
                console.log(`${attacked.name} is dead`)
            }
        } else if(attacked.health <= 0){
            console.log(`${attacked.name} is already dead`)

        }else if(this.magic < attack.magic){
            console.log('Not enough magic, cannot launch attack!');
        }else if(this.health < 0){
            console.log(`${this.name} is already dead`)
        }

    this.getMagic = function (amount) {
        this.magic += amount;
        console.log(`${this.name} got ${amount} magic back, new status of magic is ${this.magic}`);
    }
}

}

function AttackSkill(name, damage, magic) {
    this.name = name;
    this.damage = damage;
    this.magic = magic;
}

let pikachu = new Pokemon("pikachu", 120, 80);
let bulbasaur = new Pokemon("bulbasaur", 95, 105);
console.log(pikachu);
console.log(bulbasaur);

let lightning = new AttackSkill("lightning", 40, 30);
let poisonSeed = new AttackSkill("poison seed", 20, 20);
pikachu.learnAttackSkill(lightning);
bulbasaur.learnAttackSkill(poisonSeed);
console.log(pikachu);
console.log(bulbasaur);

pikachu.attack(0, bulbasaur);
bulbasaur.attack(0, pikachu);
pikachu.showStatus();
bulbasaur.showStatus();
pikachu.attack(0, bulbasaur);
pikachu.attack(0, bulbasaur);
pikachu.getMagic(20);
pikachu.attack(0, bulbasaur);
bulbasaur.attack(0, pikachu);

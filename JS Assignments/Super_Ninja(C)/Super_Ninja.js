class Ninja {
    constructor(name, health, speed, strength){
    this.name = name
    this.health = health
    this.speed = speed
    this.strength = strength
    }
    sayName(){
        console.log(this.name)
    }
    showStats(){
        console.log("Name:" + " " + this.name,"Health:" + " " + this.health,"Speed:" + " " + this.speed,"Strength:" + " " + this.strength )
    }
    drinkSake(){
        this.health += 10
        console.log("Health:" + " " + this.health)
    }
}

class Sensei extends Ninja {
    constructor(name){
        super(name, 200, 10, 10)
    }
    speakWisdom(){
        this.drinkSake
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
}

const ninja1 = new Ninja("Hyabusa", 15, 20, 5);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"

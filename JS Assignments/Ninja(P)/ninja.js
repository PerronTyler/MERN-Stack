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
        console.log(this.health, this.speed, this.strength )
    }
    drinkSake(){
        this.health += 10
        console.log(this.health)
    }
}

const ninja1 = new Ninja("Hyabusa", 15, 20, 5);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

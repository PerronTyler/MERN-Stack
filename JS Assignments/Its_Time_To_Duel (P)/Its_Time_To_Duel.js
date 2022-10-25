class Card{
    constructor(name, cost){
        this.name = name
        this.cost = cost
    }
}
class Unit extends Card{
    constructor(name, cost, power, resilience){
        super(name, cost)
        this.power = power
        this.resilience = resilience
    }
    attack(target){
        if( target instanceof Unit ) {
            target.resilience - this.power
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}

class Effect extends Card{
    constructor(name, cost, text, magnitude, stat){
        super(name,cost)
        this.text = text
        this.magnitude = magnitude
        this.stat = stat
    }
    play(target){
        if( target instanceof Unit ) {
            if(this.stat == "resilience"){
                target.resilience += this.magnitude
                console.log(this.text);
            }
            if(this.stat == "power"){
                target.power += this.magnitude
                console.log(this.text);
            }
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}



const RedbeltNinja = new Unit ("RedbeltNinja", 3, 3, 4)
// console.log(RedbeltNinja);
const BlackbeltNinja = new Unit ("BlackbeltNinja", 4, 5, 4)
// console.log(BlackbeltNinja);
const HardAlgorith = new Effect ("Hard Algorithm", 2, "Increased target's resilience by 3", 3, "resilience" )
// console.log(HardAlgorith);
const UnhandledPromiseRejection = new Effect ("Unhandled Promise Rejection", 1, "Reduced target's resilience by 2", -2, "resilience")
// console.log(UnhandledPromiseRejection);
const PairProgramming = new Effect ("Pair Programming", 3, "Increased target's power by 2", 2, "power")
// console.log(PairProgramming);

PairProgramming.play(RedbeltNinja);
console.log(RedbeltNinja);
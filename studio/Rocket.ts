import { Payload } from "./Payload";
import { Cargo } from "./Cargo";
import { Astronaut } from "./Astronaut";

export class Rocket{
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];
    constructor(name:string, totalCapacityKg:number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    sumMass(items:Payload[]): number {
        let sum = 0
        for (let i=0; i<this.cargoItems.length; i ++){
            sum +=this.cargoItems[i].massKg
        }
        return sum;
    };

    currentMassKg(): number {
        let currentMass = this.sumMass(this.cargoItems);
        for (let i = 0; i < this.astronauts.length; i++){
            currentMass += this.astronauts[i].massKg;
        }
        return currentMass;
    };

    canAdd(item:Payload): boolean {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg){
            return true;
        } else {
            return false;
        }
    };

    addCargo(cargo: Cargo): boolean{
        if (this.canAdd(cargo)===true){
            this.cargoItems.push(cargo);
            return true;
        } else {
            return false;
        }
    };

    addAstronaut(astronaut:Astronaut): boolean{
        if (this.canAdd(astronaut) === true){
            this.astronauts.push(astronaut);
            return true;
        } else {
            return false;
        }
    }
}
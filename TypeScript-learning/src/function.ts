function normalAdd(num1 : number , num2: number):number {
    return num1 + num2;


} 

console.log(normalAdd(1,2))


const arroFunc = (num1:number , num2 : number):number => num1 + num2 
console.log(arroFunc(12,133))


const poorUser ={
     balance : 0,
     addBalance (value:number): number{
       return this.balance + value
     }

}

poorUser.addBalance(1)


const arr: number[] = [1,2,3];

const squre = arr.map((element :number):number=> element * element)
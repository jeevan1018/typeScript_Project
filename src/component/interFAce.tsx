interface shop{
    readonly id:number;
    address:string;
    phone:number;
    email:string;
}

const shop1:shop={
    id:1,
    address:"123 Main St",
    phone:1234567890,
    email:"jeva"
}
console.log(shop1)

interface method{
    (a:number,b:number):number
}

const add:method=(a,b)=>{
    return a+b;
}
add(5,10)

interface TeaMachine{
    makeTea(type:string):string;
    end():void;
}

const myTeaMachine:TeaMachine={
    makeTea(type:string):string{
        return `Making a cup of ${type} tea.`;
    },
    end():void{
        console.log("Tea is ready!");
    }
    
}
console.log(myTeaMachine.makeTea("green"));
myTeaMachine.end();

interface user1{
    name:string;
}
interface user2{
    age:number;
}

interface userName extends user1,user2{
    email:string;
}

const userDelatils:userName={
    name:"jeva",
    age:30,
    email:"jeeva@.com"
}
console.log(userDelatils)

function ArrayLenth<T>(arr:T):T[]{
    return [arr];
}

function sumOfNumber<A,B>(a:A,b:B):[A,B]{
    return [a,b];
}
console.log(sumOfNumber(5,10))

interface salary<T>{
    price:T;
}

const employeeSalary:salary<string
>={
    price:"jj"
}
console.log(employeeSalary)
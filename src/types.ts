
type User = { 
    firstName: string,
    lastName: string,
    age: number
}



function greet(id: (number|string)){

}


/*or we can write it either way;*/

type userData = () => number | string

greet("hello")
greet(1)



type Employee = {
    name:string,
    startDate:Date
}

interface Manager{
    name:string,
    department: string
}

type techLead = Employee & Manager;

const t: techLead = {
    name:"samrat",
    startDate:new Date(),
    department: "asasasd"
}
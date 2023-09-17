// let age: number = 24 //assigning the age as a number (since its assigned as a num its not able to be assigned to string)
// let fName: string = "John" //assigning the name as a string
// let isMarried: boolean = true //assigning the isMarried as a boolean
// let isAlive: boolean = false //assigning the isAlive as a boolea

import { Date } from "mongoose"

// if (age < 50) 
//     age  += 10;
// console.log(age)

// let sales: number =  123_456_789
// let course: string = 'Typescript'
// let is_published: boolean = true
// let level: any; // since its not assined to data type, its considered as "ANY", not recommended

// let numbers: number[] = [1, 2, 3] //number[] = number array


        // tuple
// let user: [number, string] = [1, 'Mosh']

        // enum
    // instead  of 
    // const small  = 1
    // const medium  = 2
    // const large  = 3

// const enum Size { Small = 1, Medium, Large }
// let mySize: Size = Size.Large;
// console.log(mySize)

        // functions

//     function calcTax (income: number) : number { //acccepting number param and returning number val (void if no return is expected) 
//         // if there is if condition makesure the else is returning number as well (not undefined)
//         return income ** 2;
//     }

//   console.log(calcTax(10))

        //  object

// using type alies
// type Employee = {
//     readonly id: number,  // readonly to make the value unchanghable
//     name: string,
//     // name? : string --> the ? makes the elemtn to be optional

//     retire: (date: Date) => void
    
// }


// let employee: Employee = {
//     id: 1,
//      name: 'Mosh',
//      retire: (date: Date) => {
//             console.log(date)
//      }
    
//     }

//             // union types
// function kgToLb(weight: number | string): number {
//     if (typeof weight === 'number')
//         return weight * 2.2
//     else
//         return parseInt(weight) * 2.2
// }

// kgToLb(10)
// kgToLb('10')


// type Draggable = {
//     drag: () => void //takes no argument
// }

// type Resizable  = {
//     resize: () => void
// }

// type UIWidget  = Draggable & Resizable

// let textBox: UIWidget = {
//     drag: () => {},
//     resize: () => {}

// }

            // limiting values 

// type Quantity  = 50 | 100

// let quantity: Quantity = 50; //the value of quantity can only be 50 or 100(| is union or or)

// type Metric = 'cm' | 'inch'

// let len: Metric = 'cm'

        // nullable values
// function greet(name: string | null){
//     if (name)
//         console.log(name.toUpperCase())
//     else if (name === '' || !name) 
//         console.log('Hola')
// }

// greet('')

        // optional chaining

type Customer =  {
    birthday: Date
}
function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() }
}


let customer  = getCustomer(0)
// if (customer !== null && customer !== undefined){
//     console.log(customer.birthday)
            // writing the above if statedment in optional property access operator
        console.log(customer?.birthday) //code only executes if only the customer is not null or undefined

}
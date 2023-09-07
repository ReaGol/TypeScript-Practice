let sales: number = 123_456_789;
let course: string = "TypeScript";
let is_published: boolean = true;
let level;

function render(document: any) {
  console.log(document);
}

let numbers: number[] = [1, 2, 3];

numbers.forEach((n) => n.toString());

//Tuples
let user: [number, string] = [1, "Kenth"];
user.push(1);

const enum Size {
  Small = 1,
  Medium,
  Large,
}
let mySize: Size = Size.Medium;
console.log(mySize);

function calculateTax(income: number, taxYear = 2022): number {
  if (taxYear < 2022) return income * 1.2;
  return income * 1.3;
}

calculateTax(10_000, 2022);
 

//type aliases
type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};


//Objects
let employee: Employee = {
  id: 1,
  name: "",
  retire: (date: Date) => {
    console.log(date);
  },
};

//Union types
function kgToLbs(weight: number | string): number {
    //Narrowing
    if (typeof weight === 'number') 
        return weight * 2.2
    else 
        return parseInt(weight) * 2.2;
}
kgToLbs(10)
kgToLbs('10kg')

//intersection

type Draggable = {
    drag: () => void
};

type Resizable = {
    resize: () => void
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}

//literal types
type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Metric = 'cm' | 'inch';

function greet(name:string | null | undefined) {
  if (name)
    console.log(name.toUpperCase());
  else
    console.log('Hola');
     
}
greet(null)


type Customer = {
    birthday: Date
};

function getCustomer(id: number): Customer | null {
    return id === 0 ? null : { birthday: new Date() }
}

let customer = getCustomer(1)
//Optional property access operator
console.log(customer?.birthday?.getFullYear());

//Optional element access operator
//customers?.[0]

//Optional call opeartor
let log: any = null;
log?.('a');
//only if log is referencing an actual function, otherwise we get undefiend

// boolean
let isCool: boolean = true;

// number
let age: number = 31

// string
let eyeColor: string = 'blue';
let quote: string = `I'm not old, i'm only ${age}`

// Array
let pets: string[] = ['cat', 'dog', 'pig']
let pets2: Array<string> = ['lion', 'dragon', 'lizard']
let pets3: Array<any> = [5, 'lion', true]


// Object
let wizard: object = {
  a: 'John'
}

// null and undefined
let meh: undefined = undefined
let niu: null = null

// Tuple
let basket: [string, number];
basket = ['basketball', 5];

// Enum - allows us to define a set of named constants. 
enum Size { Small = 1, Medium = 2, Large = 3}
let sizeName: string = Size[2]

// Any - not recommended often - 
let whatever: any = 'a;skdfjklasj'

// void - when a function doesn't return anything 🤷‍♂️ 
let sing = (): void => {
  console.log('lalallaal')
}

// never - will test two things: 1) function never returns 2) when an error is thrown typescript infers a never type
let error = (): never => {
  throw Error('oops')
}

// interface - very useful in react when working with props
// you can add a question mark if you want an optional property!!
interface RobotArmy {
  count: number,
  type: string,
  magic?: string
}

let fightRobotArmy = (robots: RobotArmy) => {
  console.log('FIGHT!')
}

// Type Assertions - allows you to override a type in any way you want
interface CatArmy {
  count: number,
  type: string,
  magic: string
}
// dangerous - so be careful
let dog = {} as CatArmy
dog.count


// Function
let fightRobotArmy1 = (robots: RobotArmy): number => {
  console.log('FIGHT!')
  return 5
}

// Class - can set things to private!
class Animal {
  private sing: string
  constructor(sound: string) {
    this.sing = sound
  }

  greet() {
    return `Hello ${this.sing}`
  }
}

// Union 
let confused: string | number = 'hello'
confused = 5

// TypeScript can infer a type

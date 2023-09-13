Ans: No-1 =================================================================
 Typescript is a statically typed superset of JavaScript, which means typescript is checking type and additional language features. TypeScript code is transpiled (converted) into plain JavaScript code that can run in any JavaScript environment, making it fully compatible with JavaScript. It converted javascript then that file run in browser.
 
 differences between TypeScript and JavaScript:
 =>Typescript allow to declare types for variables, function parameters, and return values. Typescript catch type-related errors during development and provides better code documentation.
 =>Typescript allows you to define complex data structures with named types, enhancing code readability and maintainability. JavaScript does not have native support for such constructs.
 =>TypeScript has strict null checking, which helps prevent null or undefined-related runtime errors.

 Ans: no-2 =================================================================
  difference between "interface" and "type":
  Interface:
  =>Interface define the structure of an object, including its properties, their types, and any methods that the object should have.
  =>Interface allow you declare multiple interfaces with the same name, TypeScript will automatically merge them into a single interface with all the combined properties and methods.
  =>Interface will extent 'implements' keyword to enforce that a class adheres to an interface. Also a class can implement multiple interfaces.

  Type: 
  =>Type  can represent any data structure, including objects, union types, intersections, and more. Type are not limited to describing object shapes like interfaces.
  =>In type you cannot extend or modify them once it are defined.
  =>Type cannot support using multiple types with the same name, if used same name then TypeScript will throw an error.

  Ans: no-3 =================================================================

  function getFirstElement<T>(arr: T[]): T | undefined {
  if (arr.length === 0) {
    return undefined;
  }
  return arr[0];
}


const numbers: number[] = [1, 2, 3, 4, 5];
const firstNumber: number | undefined = getFirstElement(numbers);
console.log(firstNumber);

const names: string[] = ["Alice", "Bob", "Charlie"];
const firstName: string | undefined = getFirstElement(names);
console.log(firstName); 

Ans: No-6 =================================================================================
In TypeScript, the as keyword is used for type assertions. Type assertions are a way to tell the TypeScript compiler to treat a value as if it were of a specific type, even when TypeScript's static type checking cannot determine that type.

Type assertions are useful in situations where you, as the developer, know more about the type of a value than TypeScript can infer automatically. It's important to note that type assertions don't change the runtime behavior of your code; they are only used at compile time to provide hints to the TypeScript compiler.

Ans: no-5: =================================================================

enum CardinalDirections {
  North,
  East,
  South,
  West
}
let currentDirection = CardinalDirections.North;

console.log(currentDirection);
currentDirection = 'North';


```ts
import { MethodReflector } from "pip-services4-commons-node";

export class ClassA {
  public methodA(): number {
      return 123;
  }

  public methodB() {
      console.log("hello world b")
  }
}

export function main() {
  let myClassA = new ClassA();
  // Obtain all methods in classA
  
  let methods1 = MethodReflector.getMethodNames(myClassA);
  console.log("The methods in myClassA are: ", methods1);
  
  // Ask whether a specific method exists or not
  let methods2 = MethodReflector.hasMethod(myClassA, "methodA");
  console.log("methodA belongs to myClassA: ", methods2);
  
  let methods3 = MethodReflector.hasMethod(myClassA, "methodC");
  console.log("methodC belongs to myClassA: ", methods3);
  
  // Invoke a method in classA
  let methods4 = MethodReflector.invokeMethod(myClassA, "methodA");
  console.log("After running methodA the result is: ", methods4);
}
```

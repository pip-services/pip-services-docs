
```ts
import { PropertyReflector } from "pip-services4-commons-node";

export class ClassA {

  public param1: string = "hello";
  public param2: number = 123;

  public methodA(): number {
      return 123;
  }
}

export function main(){
  let myClassA = new ClassA();

  // Obtain all property names
  let properties = PropertyReflector.getPropertyNames(myClassA);
  console.log("The properties of myClassA are: ", properties);

  // Find out whether an object has a property or not
  let has_param1 = PropertyReflector.hasProperty(myClassA, "param1");
  console.log("ClassA contains param1: ", has_param1);

  // Obtain all property names and their values
  let value3 = PropertyReflector.getProperties(myClassA);
  console.log("The properties of myClassA are: ", value3);

  // Change the value of a parameter
  let value1 = PropertyReflector.getProperty(myClassA, "param2");
  PropertyReflector.setProperty(myClassA, "param2", 14785);
  let value2 = PropertyReflector.getProperty(myClassA, "param2");
  console.log("The value of param2 is: ", value1);
  console.log("The new value of param2 is: ", value2);
}
```

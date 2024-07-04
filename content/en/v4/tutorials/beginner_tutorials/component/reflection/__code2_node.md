
```ts
import { ObjectReader } from "pip-services4-commons-node";

export class ClassA {

  public param1: string = "hello";
  public param2: number = 123;

  public methodA(): number {
      return 123;
  }
}
export function main() {
  let myClassA = new ClassA();
  // Obtain all properties in ClassA
  
  let properties = ObjectReader.getPropertyNames(myClassA);
  console.log("The properties in myClassA are: ", properties);
  
  // Obtain the value of a property in classA
  let value1 = ObjectReader.getProperty(myClassA, "param1");
  console.log("The value of param1 is: ", value1);
  
  let value2 = ObjectReader.getProperties(myClassA);
  console.log("The properties and values in myClassA are: ", value2);
}
```


```ts
import { RecursiveObjectReader } from "pip-services4-commons-node";

export class ClassAa {
  public param5: string = "hello aa";

}

export class ClassA extends ClassAa {

  public param1: string = "hello";
  public param2: number = 123;

  public methodA(): number {
      return 123;
  }
}

export class ClassB extends ClassA {
  public param4: string = "inside 2"; 
}

export function main(){
  let myClassA = new ClassA();
  let myClassB = new ClassB();

  let value1 = RecursiveObjectReader.getPropertyNames(myClassA)
  console.log("The property names of myClassA are: ", value1)

  let value2 = RecursiveObjectReader.hasProperty(myClassB, "param5")
  console.log("myClassB contains param5: ", value2)

  let value3 = RecursiveObjectReader.getProperties(myClassB)
  console.log("The properties of myClassB are: ", value3)

  let value4 = RecursiveObjectReader.getProperty(myClassB, "param4")
  console.log("The value of param4 is: ", value4)
}
```


```ts
import { RecursiveObjectReader, RecursiveObjectWriter } from "pip-services4-commons-node";

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
  let myClassB = new ClassB();
  let myClassC = new ClassB();

  // set_property
  RecursiveObjectWriter.setProperty(myClassB, "param2", "new value");
  let value1 = RecursiveObjectReader.getProperty(myClassB, "param2");
  console.log("The new values for the myClassB object are:", value1);

  // set_properties
  let myMap = { 'param1': 789456, 'param2': "ABCaccc" };
  RecursiveObjectWriter.setProperties(myClassB, myMap);
  let value2 = RecursiveObjectReader.getProperties(myClassB);
  console.log("The new values for the myClassB object are:", value2);

  // copy_proerties
  let value3 = RecursiveObjectReader.getProperties(myClassC);
  console.log("The properties of myClassC and their values are:", value3);
  RecursiveObjectWriter.copyProperties(myClassC, myClassB);
  let value4 = RecursiveObjectReader.getProperties(myClassC);
  console.log("The new properties of myClassC and their values are:", value4);
}
```

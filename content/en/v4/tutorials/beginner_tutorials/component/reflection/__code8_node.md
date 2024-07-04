
```ts
import { TypeDescriptor } from "pip-services4-commons-node";

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
  // Create type descriptors
  let type1 = new TypeDescriptor("ClassA", "library1");
  let type2 = new TypeDescriptor("ClassB", "library1");

  // equals
  let result1 = type1.equals(type2);
  console.log("type1 equals type2:", result1);

  // get_library
  let library1 = type1.getLibrary();
  console.log("The library of type1:", library1);

  // get_name
  let name1 = type1.getName();
  console.log("The name of type1 is:", name1);

  // from_string
  let typeDescriptor = TypeDescriptor.fromString("classA,library1");
  console.log("Type descriptor:", typeDescriptor);
}
```

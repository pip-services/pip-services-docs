
```ts
import { TypeCode, TypeMatcher } from "pip-services4-commons-node";

export class ClassA {

  public param1: string = "hello";
  public param2: number = 123;

  public methodA(): number {
      return 123;
  }
}

export function main(){
  let objectA1 = new ClassA();

  // expected type: Object, actual type: classA, actualvalue: objectA1
  let type1 = TypeMatcher.matchType("Object", TypeCode.Object, objectA1);
  console.log("classA is an object:", type1);

  // expected type: Object, actual type: String
  let type2 = TypeMatcher.matchTypeByName("Object", TypeCode.String);
  console.log("String is an object:", type2);

  // expected type: classA, expected value: objectA1
  let type3 = TypeMatcher.matchValueType(typeof(objectA1), objectA1);
  console.log("objectA1 is of type classA:", type3);

  // expected type: Object, actual value: objectA1
  let type4 = TypeMatcher.matchValueTypeByName("Object", objectA1);
  console.log("ObjectA1 is of type Object:", type4);

  let string1 = "Hello World";
  let type5 = TypeMatcher.matchValueTypeByName("String", string1);
  console.log("string1 is of type String:", type5);
}
```

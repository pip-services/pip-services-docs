
```ts
import { ObjectReader, ObjectWriter } from "pip-services4-commons-node";

export class ClassA {

  public param1: string = "hello";
  public param2: number = 123;

  public methodA(): number {
      return 123;
  }
}

export function main(){
  let myClassA = new ClassA()

  let value1 = ObjectReader.getProperty(myClassA, "param1");
  console.log("The value of param1 is: ", value1);

  ObjectWriter.setProperty(myClassA, "param1", "hello 2");
  let value2 = ObjectReader.getProperty(myClassA, "param1");
  console.log("The new value of param1 is: ", value2);

  let myMap1 = { 'param1': 123, 'param2': "ABC" };
  ObjectWriter.setProperties(myClassA, myMap1);
  let value3 = ObjectReader.getProperties(myClassA);
  console.log("The new parameter values are: ", value3);

  // Map(dictionary)
  let myMap2 = { 'key1': 123, 'key2': "ABC" };
  ObjectWriter.setProperties(myMap2, { 'key1': 15422, 'key2': "ab" });
  let value4 = ObjectReader.getProperties(myMap2);
  console.log("The new values in the map are : ", value4);


  let myMap3 = { 'key1': 123, 'key2': "ABC" };
  ObjectWriter.setProperty(myMap3, "key1", "XYZ");
  value2 = ObjectReader.getProperty(myMap3, "key1");
  console.log("The new value in the map is : ", value2);

  // Array
  let myArray = [1, 2, 3];
  ObjectWriter.setProperty(myArray, "0", 123);
  value3 = ObjectReader.getProperty(myArray, "0");
  console.log("The new value in the array is : ", value3);
}
```

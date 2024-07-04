
```ts
export function main() {
    // Obtain properties from a map(dictionary)
    let myMap = { 'key1': 123, 'key2': "ABC" };

    let hasProperty1 = ObjectReader.hasProperty(myMap, "key1");
    let value1 = ObjectReader.getProperty(myMap, "key1");
    console.log("MyMap contains key1: ", hasProperty1);
    console.log("The value of key1 is : ", value1);
  
    // Obtain properties from an array
    let myArray = [1, 2, 3];
    let hasProperty2 = ObjectReader.hasProperty(myArray, "5");
    let hasProperty3 = ObjectReader.hasProperty(myArray, "0");
    let value2 = ObjectReader.getProperty(myArray, "0");
  
    console.log("myArray contains an element with index 5: ", hasProperty2);
    console.log("myArray contains an element with index 0: ", hasProperty3);
    console.log("The value stored at postion 0 is: ", value2);
} 
```

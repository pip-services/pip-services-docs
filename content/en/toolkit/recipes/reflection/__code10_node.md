
```ts
// TypeReflector

import { TypeReflector } from "pip-services3-commons-nodex";

export class ClassA {

    public param1: string = "hello";
    public param2: number = 123;
}

export function main(){
    let myClassA = TypeReflector.createInstanceByType(ClassA);
    console.log("The values of param1 and param2 are", myClassA.param1, "and", myClassA.param2);
}
```

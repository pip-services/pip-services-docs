
```ts
import { ConfigParams, Descriptor, References } from "pip-services4-components-node";
  
async function main() {
    try {
        // Step 1 - Creation
        const myComponentA = new MyComponentA();
        const myComponentB = new MyComponentB();

        // Step 2 - Configure the component
        myComponentA.configure(ConfigParams.fromTuples('param1', 'XYZ', 'param2', '987'));

        // Step 3 - Referencing
        // Set references to the component
        myComponentA.setReferences(References.fromTuples(
            new Descriptor('myservice', 'mycomponent-b', 'default', 'default', '1.0'),
            myComponentB
        ));

        // Step 4 - Opening
        await myComponentA.open('123');

        // Step 5 - Execution
        myComponentA.myTask('123');

        // Step 6 - Closing
        await myComponentA.close('123');

        // Step 7 - Un-referencing
        myComponentA.unsetReferences();
    } finally {
        // Step 8 - Destruction
        console.log('Component destroyed');
    }
}
```

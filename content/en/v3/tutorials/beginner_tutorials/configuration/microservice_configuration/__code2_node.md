
```ts
import { ProcessContainer } from "pip-services3-container-nodex";
import { Factory } from "pip-services3-components-nodex";

/**
 * Creating a process container
 */
export class MyProcess extends ProcessContainer {
    public constructor() {
        super('myservice', 'My service running as a process')
        this._configPath = './configV4.yaml'

        let MyFactory1 = new Factory();

        MyFactory1.registerAsType(new Descriptor("myservice", "component-a1", "default", "*", "1.0"), ComponentA1);
        MyFactory1.registerAsType(new Descriptor("myservice", "component-a2", "default", "*", "1.0"), ComponentA2);
        MyFactory1.registerAsType(new Descriptor("myservice", "component-b", "default", "*", "1.0"), ComponentB);

        this._factories.add(MyFactory1)
    }
}

/**
 * Running the container
 */
function main() {
    let runner = new MyProcess();
    console.log("run");
    try {
        runner.run(process.argv);
    }
    catch(ex){
        console.log(ex)
    }
}
```

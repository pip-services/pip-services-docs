
```ts
import { Descriptor, References } from "pip-services3-commons-nodex";
import { CachedCounters, ConsoleLogger, Counter, ICounters, LogCounters } from "pip-services3-components-nodex";

export async function main() {
    let counters = new LogCounters();
    counters.setReferences(References.fromTuples(
        new Descriptor("pip-services", "logger", "console", "default", "1.0"), new ConsoleLogger()))

    let mycomponentLog = new MyComponentA(counters);

    let countExec = 2;

    for (let i = 0; i < countExec; i++) {
        mycomponentLog.mymethod();
    }
        
    let resultLog = counters.getAll();

    console.log("Metrics");

    for (let res of resultLog) {
        console.log("Count: " + res.count);
        console.log("Min: " + res.min);
        console.log("Max: " + res.max);
        console.log("Average: " + res.average);
        console.log("Time: " + res.time);
        console.log("Name: " + res.name);
        console.log("Type: " + res.type);
        console.log("-----------------");
    }
}
```

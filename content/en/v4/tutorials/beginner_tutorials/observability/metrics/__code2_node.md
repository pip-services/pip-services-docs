
```ts
import { CachedCounters, Counter, ICounters } from 'pip-services4-observability-node';

export async function main() {
    let countersCached = new MyCachedCounters();

    let mycomponentCached = new MyComponent(countersCached);

    let countExec = 2;

    for (let i = 0; i < countExec; i++)
        mycomponentCached.mymethod();

    let resultCached = countersCached.getAll();

    console.log("Metrics");

    for(let res of resultCached) {
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

export class MyCachedCounters extends MyCachedCounters {
    protected save(counters: ICounters[]): void {
        console.log("Saving " + counters[0].name + " and " + counters[1].name);
    }
}
```

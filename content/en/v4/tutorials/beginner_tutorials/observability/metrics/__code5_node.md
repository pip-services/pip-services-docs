
```ts
import { ConfigParams, Descriptor, IReferenceable, IReferences, References } from "pip-services4-components-node";
import { CompositeCounters, LogCounters, Counter, LogMessage } from 'pip-services4-observability-node';
import { PrometheusCounters } from 'pip-services4-prometheus-node';

export async function main() {
    let countersLog = new LogCounters();
    
    let countersProm = new PrometheusCounters()
    countersProm.configure(ConfigParams.fromTuples(
        "connection.protocol", "http",
        "connection.host", "localhost",
        "connection.port", 8080
    ));

    let myComponent = new MyComponent();

    myComponent.setReferences(References.fromTuples(
        new Descriptor("pip-services", "counters", "logger", "default3", "1.0"), countersLog,
        new Descriptor("pip-services", "counters", "prometheus", "default4", "1.0"), countersProm,
        new Descriptor("pip-services", "logger", "cached", "default2", "1.0"), new MyCachedLogger()
    ));

    await countersProm.open(null);

    let countExec = 2;

    for (let i = 0; i < countExec; i++)
        myComponent.mymethod();
    
    let results = countersLog.getAll();

    console.log("Metrics to logger")
    printResults(results);

    results = countersProm.getAll();

    console.log("Metrics to Prometheus");
    printResults(results);
}

function printResults(results: Counter[]) {
    for (let result of results) {
        console.log("Count: " + result.count);
        console.log("Min: " + result.min);
        console.log("Max: " + result.max);
        console.log("Average: " + result.average);
        console.log("Time: " + result.time);
        console.log("Name: " + result.name);
        console.log("Type: " + result.type);
        console.log("-----------------");
    }
}

export class MyComponent implements IReferenceable {
    private _consoleLog: boolean = true;

    private counters: CompositeCounters = new CompositeCounters();

    public constructor() {
        if (this._consoleLog) {
            console.log("MyComponent has been created.");
        }
    }

    public setReferences(references: IReferences): void {
        this.counters.setReferences(references);
    }

    public mymethod(): void {
        this.counters.increment("mycomponent.mymethod.calls", 1);
        let timing = this.counters.beginTiming("mycomponent.mymethod.exec_time");

        try {
            if (this._consoleLog) {
                console.log("Hola amigo");
                console.log("Bonjour mon ami");
            }
        } finally {
            timing.endTiming();
        }
    }
}

export class MyCachedLogger extends MyCachedLogger {
    protected async save(messages: LogMessage[]): Promise<void> {
        console.log("Saving somewhere");
    } 
}
```

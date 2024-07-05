
```ts
import { ConfigParams, ContextInfo, Descriptor, IReferenceable, IReferences, References } from "pip-services4-components-node";
import { CachedCounters } from 'pip-services4-observability-node';
import { PrometheusCounters, PrometheusMetricsController } from 'pip-services4-prometheus-node';

export async function main() {

    let mycomponent = new MyComponentA();

    // Create an instance of PrometheusCounters and configure it
    let counters = new PrometheusCounters();
    counters.configure(ConfigParams.fromTuples(
        "connection.protocol", "http",
        "connection.host", "localhost",
        "connection.port", 8080
    ));

    // Create an instance of PrometheusMetricsService and configure it
    let controller = new PrometheusMetricsController();
    controller.configure(ConfigParams.fromTuples(
        "connection.protocol", "http",
        "connection.host", "localhost",
        "connection.port", 8080
    ));

    // Create the references
    let context_info = new ContextInfo();
    context_info.name = "Test";
    context_info.description = "This is a test container";

    let references = References.fromTuples(
        new Descriptor("pip-services", "context-info", "default", "default", "1.0"), context_info,
        new Descriptor("pip-services", "counters", "prometheus", "default", "1.0"), counters,
        new Descriptor("pip-services", "metrics-controller", "prometheus", "default", "1.0"), controller
    );

    controller.setReferences(references);
    counters.setReferences(references);
    mycomponent.setReferences(references);

    // Connect the service and counters objects
    await controller.open(null);
    await counters.open(null);
    
    //  Run "mymethod"
    var countExec = 2;

    for (let i = 0; i < countExec; i++)
        mycomponent.myMethod();

    // Get the counters
    let result = counters.getAll();

    // close counter, for closing Http client for prometheus
    await counters.close(null);
    // close service for closing Http server
    await controller.close(null);
}

class MyComponentA implements IReferenceable {
    public consoleLog: boolean = true; // console log flag
    private counters: CachedCounters;

    public constructor() {

        if (this.consoleLog)
            console.log("MyComponentA has been created.");
    }
    public setReferences(references: IReferences): void {
        this.counters = references.getOneRequired<CachedCounters>(
            new Descriptor("*", "counters", "*", "*", "*")
        );
    }

    public myMethod(): void {
        // Count the number of calls to this method
        this.counters.increment("mycomponent.mymethod.calls", 1);

        // Measure execution time
        var timing = this.counters.beginTiming("mycomponent.mymethod.exec_time");

        // Task for this method: print greetings in two languages.
        try {
            if (this.consoleLog) {
                console.log("Hola amigo");
                console.log("Bonjour mon ami");
            }
        } finally {
            timing.endTiming();
        }
        // Save the values of counters
        this.counters.dump();
    }
}
```

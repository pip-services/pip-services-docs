
```ts
class MyComponentA {
    public consoleLog: boolean = true;
    private counters: CachedCounters;

    public constructor(counter: CachedCounters) {
        this.counters = counter;

        if (this.consoleLog)
            console.log("MyComponentA has been created.");
    }

    public myMethod(): void {
        this.counters.increment("mycomponent.mymethod.calls", 1);
        var timing = this.counters.beginTiming("mycomponent.mymethod.exec_time");

        try {
            if (this.consoleLog) {
                console.log("Hola amigo");
                console.log("Bonjour mon ami");
            }
        } finally {
            timing.endTiming();
        }

        this.counters.dump();
    }
}
```

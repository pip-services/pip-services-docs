
```ts
class MyComponentA {
    private consoleLog = true;

    protected counters: DataDogCounters;

    public constructor(counters: DataDogCounters) {
        this.counters = counters;

        if (this.consoleLog)
            console.log('MyComponentA has been created.'); 
    }

    public myMethod(): void {
        this.counters.increment('mycomponent.mymethod.calls', 1);
        let timing = this.counters.beginTiming('mycomponent.mymethod.exec_time');

        try {
            if (this.consoleLog) {
                console.log('Hola amigo');
                console.log('Hola amigoBonjour mon ami');
            }
        } finally {
            timing.endTiming();
        }

        this.counters.dump();
    }
}
```

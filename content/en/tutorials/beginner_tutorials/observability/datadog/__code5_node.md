
```ts
import { ConfigParams, IConfigurable, IOpenable } from 'pip-services3-commons-nodex';


class MyComponentA implements IConfigurable, IOpenable {
    private consoleLog = true;

    protected counters: DataDogCounters;

    public constructor(counters: DataDogCounters) {
        this.counters = counters;

        if (this.consoleLog)
            console.log('MyComponentA has been created.'); 
    }

    public configure(config: ConfigParams): void {
        this.counters.configure(config);
    }

    public getCounters(): DataDogCounters {
        return this.counters;
    }

    public isOpen(): boolean {
        return this.counters.isOpen()
    }

    public async open(correlationId: string): Promise<void> {
        this.counters.open(correlationId);
    }

    public async close(correlationId: string): Promise<void> {
        this.counters.close(correlationId);
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

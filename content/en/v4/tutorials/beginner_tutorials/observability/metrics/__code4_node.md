
```ts
import { NullCounters, ICounters } from 'pip-services4-observability-node';

export async function main() {
    let countersNull = new NullCounters();

    let mycomponentNull = new MyComponent(countersNull);

    let countExec = 2;

    for (let i = 0; i < countExec; i++)
        mycomponentNull.mymethod();
}

export class MyComponent {
    private _consoleLog: boolean = true;

    private counters: ICounters;

    public constructor(counters: ICounters) {
        this.counters = counters;

        if (this._consoleLog) {
            console.log("MyComponent has been created.");
        }
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
```

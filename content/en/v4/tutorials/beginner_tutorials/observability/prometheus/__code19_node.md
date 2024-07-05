
```ts
public myMethod(): void {
        let timing = this.counters.beginTiming("mycomponent.mymethod.exec_time");
     
        try {
            // our task
        } finally {
            timing.endTiming();
        }
        this.counters.dump();
     }
```

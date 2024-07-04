
```ts
let MyProcess = require('./obj/example').MyProcess;

try {
    let proc = new MyProcess();
    proc.run(process.argv);
} catch (ex) {
    console.error(ex);
}
```

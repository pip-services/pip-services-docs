
**/bin/main.js**
```ts
const BeaconsProcess = require('../obj/src/containers/BeaconsProcess').BeaconsProcess;

try {
    let proc = new BeaconsProcess();
    proc._configPath = "./config/config.yml";
    proc.run(process.argv);
} catch (ex) {
    console.error(ex);
}

```

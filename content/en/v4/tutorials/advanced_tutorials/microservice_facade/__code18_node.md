
**/bin/main.js**
```ts
let FacadeProcess = require('../obj/src/container/FacadeProcess').FacadeProcess;

try {
    new FacadeProcess().run(process.argv);
} catch (ex) {
    console.error(ex);
}


```

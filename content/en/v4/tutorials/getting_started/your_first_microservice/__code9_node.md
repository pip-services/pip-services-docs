
**/run.js**

```typescript
"use strict";

const proc = require("./HelloWorldProcess");

try {
   new proc.HelloWorldProcess().run(process.argv);
} catch (ex) {
   console.error(ex);
}

```


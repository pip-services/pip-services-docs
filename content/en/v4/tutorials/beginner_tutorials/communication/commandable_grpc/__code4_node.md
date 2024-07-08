
```ts
import { IStringIdentifiable, ObjectSchema } from "pip-services4-data-node";
import { TypeCode } from "pip-services4-commons-node";

export class MyDataSchema extends ObjectSchema {
    public constructor() {
        super();
        this.withOptionalProperty("id", TypeCode.String)
        this.withRequiredProperty("key", TypeCode.String)
        this.withOptionalProperty("content", TypeCode.String)
    }
}
```

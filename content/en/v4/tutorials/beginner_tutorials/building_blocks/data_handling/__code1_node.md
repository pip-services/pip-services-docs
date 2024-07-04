```ts
import { ObjectSchema } from "pip-services4-data-node";
import { TypeCode } from "pip-services4-commons-node";

class MyObjectSchema extends ObjectSchema {
    public constructor()
    {
        super();

        this.withRequiredProperty('prop1', TypeCode.Integer);
        this.withOptionalProperty('prop2', TypeCode.String);
        this.withOptionalProperty('prop3', new MySubObjectSchema());
    }
}
```

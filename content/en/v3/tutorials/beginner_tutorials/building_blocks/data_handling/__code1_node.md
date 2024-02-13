
```ts
import { ObjectSchema, TypeCode } from "pip-services3-commons-nodex";

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

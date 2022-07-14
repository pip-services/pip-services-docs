
```ts
using PipServices3.Commons.Validate;


public class MyDataSchema: ObjectSchema
{
    public MyDataSchema() : base()
    {
        WithOptionalProperty("id", TypeCode.String);
        WithRequiredProperty("key", TypeCode.String);
        WithOptionalProperty("content", TypeCode.String);
    }
}
```

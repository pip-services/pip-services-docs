
```cs
using PipServices3.Commons.Convert;
using PipServices3.Commons.Validate;

class MyObjectSchema : ObjectSchema
{
    public MyObjectSchema() : base()
    {
        WithRequiredProperty("prop1", TypeCode.Integer);
        WithOptionalProperty("prop2", TypeCode.String);
        WithOptionalProperty("prop3", new MySubObjectSchema())ж
    }
}

```

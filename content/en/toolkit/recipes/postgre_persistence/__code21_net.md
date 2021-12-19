
```cs
public class MyPostgresPersistence: IdentifiablePostgresPersistence<MyData, string>
{
    public MyPostgresPersistence() : base("mydata") { }
}

```

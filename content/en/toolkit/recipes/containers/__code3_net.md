
```cs
using PipServices3.Components.Build;

public class MyFactory : Factory
{
    public MyFactory(): base()
    {
        RegisterAsType(new Descriptor("myservice", "MyComponentA", "*", "*", "1.0"), typeof(MyComponentA));
    }
}

```

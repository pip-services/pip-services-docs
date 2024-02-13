
```cs
public class MyFactory : Factory
{
    public MyFactory(): base()
    {
        RegisterAsType(new Descriptor("mygroup", "controller", "default", "controller", "1.0"), typeof(MyController));
    }
}


```

```cs
using PipServices3.Commons.Refer;
using PipServices3.Components.Build;

public class DefaultMyDataFactory: Factory
{
    public static Descriptor FactoryDescriptor = new Descriptor("service-mydata", "factory", "default", "default", "1.0");
    public static Descriptor ControllerDescriptor = new Descriptor("service-mydata", "controller", "default", "*", "1.0");
    public static Descriptor CommandableGrpcServiceDescriptor = new Descriptor("service-mydata", "service", "commandable-grpc", "*", "1.0");

    public DefaultMyDataFactory(): base()
    {
        RegisterAsType(DefaultMyDataFactory.ControllerDescriptor, typeof(MyDataController));
        RegisterAsType(DefaultMyDataFactory.CommandableGrpcServiceDescriptor, typeof(MyDataCommandableGrpcService));
    }
}

```


**/src/service/build/FacadeFactory.cs**

```cs
using PipServices3.Commons.Refer;
using PipServices3.Components.Build;
using Pip.Services.SampleFacade.Services.Version1;
using Pip.Services.SampleFacade.Services.Version2;

namespace Pip.Services.SampleFacade.Build
{
    public class FacadeFactory : Factory
    {
		public static Descriptor FacadeServiceV1Descriptor = new Descriptor("pip-facades-example", "service", "http", "*", "1.0");
		public static Descriptor FacadeServiceV2Descriptor = new Descriptor("pip-facades-example", "service", "http", "*", "2.0");


		public FacadeFactory()
        {
            RegisterAsType(FacadeServiceV1Descriptor, typeof(FacadeServiceV1));
            RegisterAsType(FacadeServiceV2Descriptor, typeof(FacadeServiceV2));
        }
    }
}
```

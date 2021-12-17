
**/src/service/container/FacadeProcess.cs**

```cs
using PipServices3.Container;
using PipServices3.Rpc.Build;
using Pip.Services.SampleFacade.Build;

namespace Pip.Services.SampleFacade.Container
{
    public class FacadeProcess : ProcessContainer
    {
        public FacadeProcess() :
            base("pip-facades-example", "Example Pip.Services facade")
        {
            _factories.Add(new ClientFacadeFactory());
            _factories.Add(new FacadeFactory());
            _factories.Add(new DefaultRpcFactory());
        }
    }
}

```

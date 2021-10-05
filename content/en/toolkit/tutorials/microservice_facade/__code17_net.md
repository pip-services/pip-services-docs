
**/src/service/container/FacadeProcess.cs**

```cs
using PipServices3.Container;
using PipServices3.Rpc.Build;
using PipServices.Templates.Facade.Build;

namespace PipServices.Templates.Facade.Container
{
    public class FacadeProcess : ProcessContainer
    {
        public FacadeProcess() :
            base("pip-facade-sample", "Sample facade for NOV")
        {
            _factories.Add(new ClientFacadeFactory());
            _factories.Add(new FacadeFactory());
            _factories.Add(new DefaultRpcFactory());
        }
    }
}

```

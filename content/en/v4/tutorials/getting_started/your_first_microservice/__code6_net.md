
**/HelloWorldRestService.cs**
```cs
using Microsoft.Extensions.Primitives;
using PipServices3.Commons.Refer;
using PipServices3.Rpc.Services;
using System.Linq; 
namespace HelloWorld {    
    public class HelloWorldRestService : RestService {        
        private HelloWorldController _controller;   

        public HelloWorldRestService() {            
            _baseRoute = "hello_world";            
            _dependencyResolver.Put("controller", new Descriptor("hello-world", "controller", "default", "*", "1.0"));        
        }    

        public override void SetReferences(IReferences references) {            
            base.SetReferences(references);            
            _controller = _dependencyResolver.GetOneRequired<HelloWorldController>("controller");        
        }  

        public override void Register() {            
            base.Register();            
            RegisterRoute("GET", "/greeting", async (request, response, routeData) => {                
                string name = null;                
                if (request.Query.TryGetValue("name", out StringValues values)) {                    
                  name = values.FirstOrDefault();                
                }                
              await SendResultAsync(response, await _controller.GreetingAsync(name));
            });        
        }    
    }
}
```

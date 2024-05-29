
 Since their execution time might take too long, business methods are implemented in .NET as asynchronous functions:

```cs
public async Task<string> GreetingAsync(string name){    
  return await Task.FromResult($"Hello {name ?? _defaultName}!");
}
```

To demonstrate the dynamic configuration of a component, the recipient name will be specified by the parameter "_default_name". To get the configuration, the component must implement the interface "IConfigurable" with the method "configure".

```cs
public void Configure(ConfigParams config){
    _defaultName = config.GetAsStringWithDefault("default_name", null);
}
```

Now, the parameters that are read by the microservice from the configuration file will be passed to the "Configure" method of the corresponding component. Here's an example of a configuration:

```yml
# Controller
- descriptor: "hello-world:controller:default:default:1.0"
  default_name: "World"
```

More details on this mechanism can be found in [Component Configuration](../../tutorials/beginner_tutorials/configuration/component_configuration/).

This is all the code of the service in the file:

**/HelloWorldController.cs**

```cs
using System.Threading.Tasks;using PipServices3.Commons.Config; 
namespace HelloWorld {    
    public class HelloWorldController : IConfigurable {        
        private string _defaultName = null; 

        public void Configure(ConfigParams config) {            
            _defaultName = config.GetAsStringWithDefault("default_name", null);        
        }   

        public async Task<string> GreetingAsync(string name) {            
            return await Task.FromResult($"Hello {name ?? _defaultName}!");        
        }    
    }
}

```

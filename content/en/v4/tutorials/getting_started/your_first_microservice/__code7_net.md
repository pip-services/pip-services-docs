
```cs
public class HelloWorldServiceFactory : Factory
```

The factory's constructor is used to register descriptors and their corresponding component types.

```cs
public HelloWorldServiceFactory(){    
    RegisterAsType(ControllerDescriptor, typeof(HelloWorldController));    
    RegisterAsType(HttpServiceDescriptor, typeof(HelloWorldRestService));
}
```

For more info on how this works, be sure to check out [Process Container](../../tutorials/beginner_tutorials/containers/process_container).

Full listing of the factory's code found in the file:

**‍/HelloWorldServiceFactory.cs**

```cs
using PipServices3.Commons.Refer;
using PipServices3.Components.Build; 

namespace HelloWorld {    

    public class HelloWorldServiceFactory : Factory {  

        public static Descriptor Descriptor = new Descriptor("hello-world", "factory", "service", "default", "1.0");        
        public static Descriptor ControllerDescriptor = new Descriptor("hello-world", "controller", "default", "*", "1.0");        
        public static Descriptor RestServiceDescriptor = new Descriptor("hello-world", "service", "http", "*", "1.0");         
        
        public HelloWorldServiceFactory(){            
            RegisterAsType(ControllerDescriptor, typeof(HelloWorldController));            
            RegisterAsType(RestServiceDescriptor, typeof(HelloWorldRestService));        
        }    
    }
}
```

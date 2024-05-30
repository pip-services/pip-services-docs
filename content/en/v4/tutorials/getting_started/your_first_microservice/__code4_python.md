
```python
def greeting(name):        
    return f"Hello, {name if name is not None else self.__defaultName} !"
```

To demonstrate the dynamic configuration of a component, the recipient name will be specified by the parameter "__default_name". To get the configuration, the component must implement the interface "IConfigurable" with the method "configure".

```python
def configure(config):        
    self.__default_name = config.get_as_string_with_default("default_name", self.__default_name)
```

Parameters will be read by the microservice from the configuration file and passed to the "configure" method of the corresponding component. Here's an example of the configuration:

```yml
# Service
- descriptor: "hello-world:service:default:default:1.0"
  default_name: "World"
```

More details on this mechanism can be found in [Component Configuration](../../tutorials/beginner_tutorials/configuration/component_configuration/).

This is all the code of the controller in the file:

**/HelloWorldController.py**

```python
# -*- coding: utf-8 -*- 
class HelloWorldController:
    __default_name = None

    def __init__(self):
        self.__default_name = "Pip User"

    def configure(config):
        self.__default_name = config.get_as_string_with_default("default_name", self.__default_name)

    def greeting(name):
        return f"Hello, {name if name is not None else self.__default_name} !"

```

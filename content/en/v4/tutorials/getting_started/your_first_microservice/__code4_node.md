
```typescript
public async greeting(name) {
    return "Hello, " + (name || this._defaultName) + "!";
  }
```

To demonstrate the dynamic configuration of a component, the recipient name will be specified by the parameter "default_name". To get the configuration, the component must implement the interface "IConfigurable" with the method "configure".

```typescript
configure(config) {
   this._defaultName = config.getAsStringWithDefault("default_name", this._defaultName);
}
```

Parameters will be read by the microservice from the configuration file and passed to the "configure" method of the corresponding component. Here's an example of the configuration:

```yml
# Service
- descriptor: "hello-world:service:default:default:1.0"
  default_name: "World"
```

More details on this mechanism can be found in [Component Configuration](../../tutorials/beginner_tutorials/configuration/component_configuration/).

This is all the code of the service in the file:

**/HelloWorldService.js**

```typescript
"use strict";

class HelloWorldService {
  constructor() {
    this._defaultName = "Pip User";
  }

  public configure(config) {
    this._defaultName = config.getAsStringWithDefault("default_name", this._defaultName);
  }

  public async greeting(name) {
    return "Hello, " + (name || this._defaultName) + "!";
  }
}

exports.HelloWorldService = HelloWorldService

```

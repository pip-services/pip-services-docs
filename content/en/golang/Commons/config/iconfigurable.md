---
type: docs
title: "IConfigurable"
linkTitle: "IConfigurable" 
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
---

### Type

```go
type IConfigurable interface {

}
```

An interface to set configuration parameters to an object.

It can be added to any existing class by implementing a single configure() method.

If you need to emphasis the fact that configure() method can be called multiple
times to change object configuration in runtime, use IReconfigurable interface instead.

### Funcs

#### Configure
> Configure(config *[ConfigParams](../configparams))

Configures object by passing configuration parameters.

- config: [ConfigParams](../configparams) configuration parameters to be set.
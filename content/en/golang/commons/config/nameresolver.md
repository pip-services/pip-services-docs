---
type: docs
title: "NameResolver"
linkTitle: "NameResolver" 
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
---

### Type

```go
type TNameResolver struct{}
```

A helper class that allows to extract component name from configuration parameters. The name can be defined in "id", "name" parameters or inside a component descriptor. 

**Example:**

```go

config := NewConfigParamsFromTuples(
    "descriptor", "myservice:connector:aws:connector1:1.0",
    "param1", "ABC",
    "param2", 123
);

name := NameResolver.Resolve(config); // Result: connector1
```

### Funcs

#### Resolve
> func (c *[TNameResolver]()) Resolve(config *[ConfigParams](../configparams)) [string](https://pkg.go.dev/builtin#string)

Resolves a component name from configuration parameters. The name can be stored in "id", "name" fields or inside a component descriptor. If name cannot be determined it returns a empty string.

- config: [ConfigParams](../configparams) configuration parameters that may contain a component name.
- Returns string resolved name or "" if the name cannot be determined.

#### ResolveWithDefault
> func (c *[TNameResolver]()) ResolveWithDefault(config *[ConfigParams](../configparams), defaultName [string](https://pkg.go.dev/builtin#string)) [string](https://pkg.go.dev/builtin#string)

Resolves a component name from configuration parameters. The name can be stored in "id", "name" fields or inside a component descriptor. If name cannot be determined it returns a defaultName.

- config: [ConfigParams](../configparams) configuration parameters that may contain a component name.
- defaultName: [string](https://pkg.go.dev/builtin#string) a default component name.
- Returns string resolved name or default name if the name cannot be determined.
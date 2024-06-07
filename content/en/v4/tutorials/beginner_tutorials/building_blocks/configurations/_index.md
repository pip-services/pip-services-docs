---
type: docs
no_list: true
title: "Configurations"
linkTitle: "Configurations"
weight: 20
---

{{< tabselector "Node" ".NET" "Golang" "Dart" "Python" "Java" >}}

Configurations allow to change microservice behavior, adjust to deployment environments, and set parameters to connect to infrastructure services and other microservices. For this, the Pip.Services toolkit provides a set of patterns that support design-time, deployment-time, and runtime configurations. 

### Design-time Configuration

This is the simplest type of configuration. It is initially defined by developers in their code and later used to set components by calling the configure method in components that implement the IConfigurable interface.

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  Not available   
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code1_go.md" >}} 
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code1_python.md" >}} 
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

### Deployment-time Configuration

Deployment-time configuration parameters are set via environment variables or passed to a container via command-line arguments:


{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  Not available   
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code2_go.md" >}} 
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code2_python.md" >}} 
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

Then those parameters are automatically injected into container configurations using Mustache templates:

```yml
{{#if MYCOMPONENT_ENABLED}}
descriptor: myservice:mycomponent:default:default:1.0
param1: {{PARAM1}}
param2: {{PARAM2}}
{{/if}}
```
The deployment-time parameters can change the composition of the microservice by including or excluding parameters or their configuration blocks, or setting specific parameters values that are passed to already known configure methods in components that implement the IConfigurable interface.

### Runtime Configuration

Runtime configurations are typically stored in specialized services like etcd or special microservices. The Pip.Services toolkit has a standard IConfigReader interface that can be implemented by components that retrieve configurations from various sources. In this manner, they can pull configurations by calling the readConfig method or get notified when configurations change via the addChangeListener method.

The Pip.Services toolkit offers a few standard configuration readers:

- MemoryConfigReader: Stores a configuration in memory.
- FileConfigReader: Reads a configuration from a file.
- JsonConfigReader
- YamlConfigReader

### References

For more information about configurations see:
- #### [Configurations](../../configuration/configurations/)
- #### [Component configuration](../../configuration/component_configuration/)
- #### [Config file syntax](../../configuration/config_file_syntax/)


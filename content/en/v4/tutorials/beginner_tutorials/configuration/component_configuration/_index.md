---
type: docs
no_list: true
title: "Component configuration"
linkTitle: "Component configuration"
---

{{< tabselector "Node" ".NET" "Golang" "Dart" "Python" "Java" >}}

- by Aleksey Dvoykin

### Introduction

The Pip.Services Toolkit offers a simple but very flexible mechanism for component configuration. Configurations can be loaded from various sources - configuration files, command line parameters, environment variables, configuration services, etc. Once loaded, they are passed to the specific component, which configures itself accordingly. In this recipe, we'll be taking a look at this mechanism's capabilities and how it can be utilized.

### Configuration

#### The configurable interface

A component can be made configurable by adding the **IConfigurable** interface and implementing its **configure** method. This method will be called by the container right after container creation, with the loaded configuration being passed as a parameter.

{{< tabsection >}}
  {{< include "./__code1_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available     
{{< /tabsection >}}

{{< tabsection >}}
  Not available    
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

#### The ConfigParams object

The only parameter that is passed to the configure method is **ConfigParams** object. Simply put - this is a map that allows us to get a configuration parameter value by its corresponding key. Although various programming languages have unique syntax for initializing maps and objects, **ConfigParams** support initialization that is independent of the language being used.

{{< tabsection >}}
  {{< include "./__code2_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available     
{{< /tabsection >}}

{{< tabsection >}}
  Not available    
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

**ConfigParams** also provide some additional functionality. All keys and values are stored as strings, but **ConfigParams** supports performing data type conversion when extracting values. Another option available is the opportunity to set default values.


{{< tabsection >}}
  {{< include "./__code3_node.md" >}}  
{{< /tabsection >}}

{{< tabsection >}}
  Not available     
{{< /tabsection >}}

{{< tabsection >}}
  Not available    
{{< /tabsection >}}

{{< tabsection >}}
  Not available    
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code3_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

The parameter kets can have a complex structure, grouped by sections using dot notation. **ConfigParams** can be used to work with entire sections as well.

{{< tabsection >}}
  {{< include "./__code4_node.md" >}} 
{{< /tabsection >}}

{{< tabsection >}}
  Not available     
{{< /tabsection >}}

{{< tabsection >}}
  Not available   
{{< /tabsection >}}

{{< tabsection >}}
  Not available     
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code4_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### Setting a default configuration

Another helpful option is the ability to set a default configuration.

{{< tabsection >}}
  {{< include "./__code5_node.md" >}}   
{{< /tabsection >}}

{{< tabsection >}}
  Not available     
{{< /tabsection >}}

{{< tabsection >}}
  Not available    
{{< /tabsection >}}

{{< tabsection >}}
  Not available      
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code5_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### Serializing the ConfigParams object

Lastly, **ConfigParams** objects can be serialized/deserialized to/from JSON, YAML, or a plain string.

{{< tabsection >}}
  {{< include "./__code6_node.md" >}}  
{{< /tabsection >}}

{{< tabsection >}}
  Not available      
{{< /tabsection >}}

{{< tabsection >}}
  Not available   
{{< /tabsection >}}

{{< tabsection >}}
  Not available      
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code6_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

To read more about what functionality is available through **ConfigParams**, be sure to check out the **Commons** documentation. 

#### Example

Below is an example of a configurable component:

{{< tabsection >}}
  {{< include "./__code7_node.md" >}}  
{{< /tabsection >}}

{{< tabsection >}}
  Not available     
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  Not available      
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code7_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### Manual configuration

Manual configuration can be done in the following manner:

{{< tabsection >}}
  {{< include "./__code8_node.md" >}} 
{{< /tabsection >}}

{{< tabsection >}}
  Not available      
{{< /tabsection >}}

{{< tabsection >}}
  Not available   
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code8_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

However, a component's configuration is usually stored in the microservice's configuration file. The configure method will receive the parameters for the specific component (in the example below - everything between the component's descriptor and the next descriptor or end of the file). To get more info on microservice configuration, read our [Component Container](../../containers/process_container) recipe. 

```yml
...
# Controller
- descriptor: "beacons:controller:default:default:1.0"
  max_page_size: 10
...

```

### Resolvers

The **NameResolver** and **OptionsResolver** classes are helper classes that simplify the use of configurations. 

#### NameResolver

**NameResolver** is a helper class that allows extraction of the component's name from the configuration parameters. The name can be stored as a "id"/"name" parameter or inside a component's descriptor.

Below is a simple example of how it can be used:

{{< tabsection >}}
   {{< include "./__code9_node.md" >}}  
{{< /tabsection >}}

{{< tabsection >}}
  Not available   
{{< /tabsection >}}

{{< tabsection >}}
  Not available   
{{< /tabsection >}}

{{< tabsection >}}
  Not available      
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code9_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### OptionsResolver

**OptionsResolver** is a helper class that extracts parameters from the "options" configuration section.

{{< tabsection >}}
  {{< include "./__code10_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available     
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  Not available      
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code10_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

### Configuration readers

Configuration parameters can be stored in microservice configurations, configuration files, or in configuration services. To help with configuration extraction, the Pip.Services Toolkit offers two special **ConfigReader** components. The interface for these components is defined in the **Components** module.

{{< tabsection >}}
  {{< include "./__code11_node.md" >}}  
{{< /tabsection >}}

{{< tabsection >}}
  Not available     
{{< /tabsection >}}

{{< tabsection >}}
  Not available    
{{< /tabsection >}}

{{< tabsection >}}
  Not available      
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code11_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### MemoryConfigReader

The **MemoryConfigReader** is a **ConfigReader** that stores configuration data in memory.

{{< tabsection >}}
  {{< include "./__code12_node.md" >}} 
{{< /tabsection >}}

{{< tabsection >}}
  Not available   
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  Not available    
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code12_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### JsonConfigReader

The **JsonConfigReader** is a **ConfigReader** that can read configurations from a JSON file.

```json
{ "key1": "{{KEY1_VALUE}}", "key2": "{{KEY2_VALUE}}" }
```

{{< tabsection >}}
  {{< include "./__code13_node.md" >}}  
{{< /tabsection >}}

{{< tabsection >}}
  Not available    
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  Not available   
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code13_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

#### YamlConfigReader

The **YamlConfigReader** is a **ConfigReader** that can read configurations from a YAML file.

```yml
key1: "1234"
key2: "ABCD"
```

{{< tabsection >}}
  {{< include "./__code14_node.md" >}}  
{{< /tabsection >}}

{{< tabsection >}}
  Not available    
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code14_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}





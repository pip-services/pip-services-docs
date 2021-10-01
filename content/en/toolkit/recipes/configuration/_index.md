---
type: docs
no_list: true
title: "Configuration"
linkTitle: "Configuration"
weight: 10
---

- by Aleksey Dvoykin

### Introduction

The Pip.Services Toolkit offers a simple but very flexible mechanism for component configuration. Configurations can be loaded from various sources - configuration files, command line parameters, environment variables, configuration services, etc. Once loaded, they are passed to the specific component, which configures itself accordingly. In this recipe, we'll be taking a look at this mechanism's capabilities and how it can be utilized.

### Configuration

#### The configurable interface

A component can be made configurable by adding the [IConfigurable](../../commons/config/iconfigurable/) interface and implementing its **configure** method. This method will be called by the container right after container creation, with the loaded configuration being passed as a parameter.

<div class="content-tab-selector">
	<div class="btn-group tab-selector-btn-group" role="group" aria-label="Language selector">
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Node</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">.NET</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Golang</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Dart</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Python</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Java</button>
	</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/recipes/configuration/__code1_node.md" >}}  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/recipes/configuration/__code1_net.md" >}}    
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/recipes/configuration/__code1_dart.md" >}}    
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/recipes/configuration/__code1_python.md" >}}
</div>

<div class="content-tab-section">
  Not available  
</div>

</div>

#### The ConfigParams object

The only parameter that is passed to the configure method is [ConfigParams](../../commons/config/config_params/) object. Simply put - this is a map that allows us to get a configuration parameter value by its corresponding key. Although various programming languages have unique syntax for initializing maps and objects, **ConfigParams** support initialization that is independent of the language being used.


<div class="content-tab-selector">
	<div class="btn-group tab-selector-btn-group" role="group" aria-label="Language selector">
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Node</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">.NET</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Golang</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Dart</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Python</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Java</button>
	</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/recipes/configuration/__code2_node.md" >}}  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/recipes/configuration/__code2_net.md" >}}    
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/recipes/configuration/__code2_dart.md" >}}    
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/recipes/configuration/__code2_python.md" >}}
</div>

<div class="content-tab-section">
  Not available  
</div>

</div>

**ConfigParams** also provide some additional functionality. All keys and values are stored as strings, but **ConfigParams** supports performing data type conversion when extracting values. Another option available is the opportunity to set default values.


<div class="content-tab-selector">
	<div class="btn-group tab-selector-btn-group" role="group" aria-label="Language selector">
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Node</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">.NET</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Golang</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Dart</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Python</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Java</button>
	</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/recipes/configuration/__code3_node.md" >}}  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/recipes/configuration/__code3_net.md" >}}    
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/recipes/configuration/__code3_dart.md" >}}    
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/recipes/configuration/__code3_python.md" >}}
</div>

<div class="content-tab-section">
  Not available  
</div>

</div>

The parameter kets can have a complex structure, grouped by sections using dot notation. **ConfigParams** can be used to work with entire sections as well.


<div class="content-tab-selector">
	<div class="btn-group tab-selector-btn-group" role="group" aria-label="Language selector">
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Node</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">.NET</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Golang</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Dart</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Python</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Java</button>
	</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/recipes/configuration/__code4_node.md" >}}  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/recipes/configuration/__code4_net.md" >}}    
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/recipes/configuration/__code4_dart.md" >}}    
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/recipes/configuration/__code4_python.md" >}}
</div>

<div class="content-tab-section">
  Not available  
</div>

</div>
#### Setting a default configuration

Another helpful option is the ability to set a default configuration.


<div class="content-tab-selector">
	<div class="btn-group tab-selector-btn-group" role="group" aria-label="Language selector">
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Node</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">.NET</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Golang</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Dart</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Python</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Java</button>
	</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/recipes/configuration/__code5_node.md" >}}  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/recipes/configuration/__code5_net.md" >}}    
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/recipes/configuration/__code5_dart.md" >}}    
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/recipes/configuration/__code5_python.md" >}}
</div>

<div class="content-tab-section">
  Not available  
</div>

</div>

#### Serializing the ConfigParams object

Lastly, **ConfigParams** objects can be serialized/deserialized to/from JSON, YAML, or a plain string.


<div class="content-tab-selector">
	<div class="btn-group tab-selector-btn-group" role="group" aria-label="Language selector">
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Node</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">.NET</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Golang</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Dart</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Python</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Java</button>
	</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/recipes/configuration/__code6_node.md" >}}  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/recipes/configuration/__code6_net.md" >}}    
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/recipes/configuration/__code6_dart.md" >}}    
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/recipes/configuration/__code6_python.md" >}}
</div>

<div class="content-tab-section">
  Not available  
</div>

</div>

To read more about what functionality is available through **ConfigParams**, be sure to check out the [Commons module’s](../../commons)documentation. 

#### Example

Below is an example of a configurable component:


<div class="content-tab-selector">
	<div class="btn-group tab-selector-btn-group" role="group" aria-label="Language selector">
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Node</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">.NET</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Golang</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Dart</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Python</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Java</button>
	</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/recipes/configuration/__code7_node.md" >}}  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/recipes/configuration/__code7_net.md" >}}    
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/recipes/configuration/__code7_dart.md" >}}    
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/recipes/configuration/__code7_python.md" >}}
</div>

<div class="content-tab-section">
  Not available  
</div>

</div>

#### Manual configuration

Manual configuration can be done in the following manner:


<div class="content-tab-selector">
	<div class="btn-group tab-selector-btn-group" role="group" aria-label="Language selector">
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Node</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">.NET</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Golang</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Dart</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Python</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Java</button>
	</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/recipes/configuration/__code8_node.md" >}}  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/recipes/configuration/__code8_net.md" >}}    
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/recipes/configuration/__code8_dart.md" >}}    
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/recipes/configuration/__code8_python.md" >}}
</div>

<div class="content-tab-section">
  Not available  
</div>

</div>

However, a component’s configuration is usually stored in the microservice’s configuration file. The configure method will receive the parameters for the specific component (in the example below - everything between the component’s descriptor and the next descriptor or end of the file). To get more info on microservice configuration, read our [Component Container](../component_container) recipe. 

```yml
...
# Controller
- descriptor: "beacons:controller:default:default:1.0"
  max_page_size: 10
...

```

### Resolvers

The [NameResolver](../../commons/config/name_resolver/) and [OptionResolver](../../commons/config/option_resolver/) classes are helper classes that simplify the use of configurations. 

#### NameResolver

**NameResolver** is a helper class that allows extraction of the component’s name from the configuration parameters. The name can be stored as a "id"/"name" parameter or inside a component’s descriptor.

Below is a simple example of how it can be used:


<div class="content-tab-selector">
	<div class="btn-group tab-selector-btn-group" role="group" aria-label="Language selector">
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Node</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">.NET</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Golang</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Dart</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Python</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Java</button>
	</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/recipes/configuration/__code9_node.md" >}}  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/recipes/configuration/__code9_net.md" >}}    
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/recipes/configuration/__code9_dart.md" >}}    
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/recipes/configuration/__code9_python.md" >}}
</div>

<div class="content-tab-section">
  Not available  
</div>

</div>

#### OptionResolver

**OptionResolver** is a helper class that extracts parameters from the "options" configuration section.


<div class="content-tab-selector">
	<div class="btn-group tab-selector-btn-group" role="group" aria-label="Language selector">
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Node</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">.NET</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Golang</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Dart</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Python</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Java</button>
	</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/recipes/configuration/__code10_node.md" >}}  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/recipes/configuration/__code10_net.md" >}}    
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/recipes/configuration/__code10_dart.md" >}}    
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/recipes/configuration/__code10_python.md" >}}
</div>

<div class="content-tab-section">
  Not available  
</div>

</div>

### Configuration readers

Configuration parameters can be stored in microservice configurations, configuration files, or in configuration services. To help with configuration extraction, the Pip.Services Toolkit offers two special **ConfigReader** components. The interface for these components is defined in the [Components](../../components) module.


<div class="content-tab-selector">
	<div class="btn-group tab-selector-btn-group" role="group" aria-label="Language selector">
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Node</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">.NET</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Golang</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Dart</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Python</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Java</button>
	</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/recipes/configuration/__code11_node.md" >}}  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/recipes/configuration/__code11_net.md" >}}    
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/recipes/configuration/__code11_dart.md" >}}    
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/recipes/configuration/__code11_python.md" >}}
</div>

<div class="content-tab-section">
  Not available  
</div>

</div>

#### MemoryConfigReader

The [MemoryConfigReader](../../components/config/memory_config_reader/) is a **ConfigReader** that stores configuration data in memory.


<div class="content-tab-selector">
	<div class="btn-group tab-selector-btn-group" role="group" aria-label="Language selector">
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Node</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">.NET</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Golang</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Dart</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Python</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Java</button>
	</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/recipes/configuration/__code12_node.md" >}}  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/recipes/configuration/__code12_net.md" >}}    
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/recipes/configuration/__code12_dart.md" >}}    
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/recipes/configuration/__code12_python.md" >}}
</div>

<div class="content-tab-section">
  Not available  
</div>

</div>

#### JsonConfigReader

The [JsonConfigReader](../../components/config/json_config_reader/) is a **ConfigReader** that can read configurations from a JSON file.

```json
{ "key1": "{{KEY1_VALUE}}", "key2": "{{KEY2_VALUE}}" }
```

<div class="content-tab-selector">
	<div class="btn-group tab-selector-btn-group" role="group" aria-label="Language selector">
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Node</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">.NET</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Golang</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Dart</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Python</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Java</button>
	</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/recipes/configuration/__code13_node.md" >}}  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/recipes/configuration/__code13_net.md" >}}    
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/recipes/configuration/__code13_dart.md" >}}    
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/recipes/configuration/__code13_python.md" >}}
</div>

<div class="content-tab-section">
  Not available  
</div>

</div>

#### YamlConfigReader

The [YamlConfigReader](../../components/config/yaml_config_reader/) is a **ConfigReader** that can read configurations from a YAML file.

```yml
key1: "1234"
key2: "ABCD"
```


<div class="content-tab-selector">
	<div class="btn-group tab-selector-btn-group" role="group" aria-label="Language selector">
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Node</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">.NET</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Golang</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Dart</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Python</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Java</button>
	</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/recipes/configuration/__code14_node.md" >}}  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/recipes/configuration/__code14_net.md" >}}    
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/recipes/configuration/__code14_dart.md" >}}    
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/recipes/configuration/__code14_python.md" >}}
</div>

<div class="content-tab-section">
  Not available  
</div>

</div>





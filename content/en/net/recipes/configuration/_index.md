---
type: docs
no_list: true
title: "Configuration"
linkTitle: "Configuration"
weight: 10
---

- by Aleksey Dvoykin

### Introduction

The Pip.Services Toolkit offers a simple but very flexible mechanism for component configuration. Configurations can be loaded from various sources: configuration files, command line parameters, environment variables, configuration services, etc. Once loaded, they are passed to the specific component, which configures itself accordingly. In this recipe, we'll be taking a look at this mechanism"s capabilities and how it can be utilized.

### Configuration

#### The configurable interface

A component can be made configurable by adding the [IConfigurable](../../commons/config/iconfigurable/) interface and implementing its **configure** method. This method will be called by the container right after container creation, with the loaded configuration being passed as a parameter.

```cs
public interface IConfigurable
{
  	void Configure(ConfigParams config);
}
```

#### The ConfigParams object

The only parameter that is passed to the configure method is [ConfigParams](../../commons/config/config_params/) object. Simply put, this is a map that allows us to get a configuration parameter value by its corresponding key. Although various programming languages have unique syntax for initializing maps and objects, **ConfigParams** support initialization that is independent of the language being used.

```cs
var config = ConfigParams.FromTuples(
  "param1", 123,
  "param2", "2020-01-01T11:00:00.0Z"
);
```

**ConfigParams** also provide some additional functionality. All keys and values are stored as strings, but **ConfigParams** supports performing data type conversion when extracting values. Another option available is the opportunity to set default values.

```cs
var param1 = config.GetAsInteger("param1");
var param2 = config.GetAsDateTimeWithDefault("param2", new DateTime());
```

The parameter kets can have a complex structure, grouped by sections using dot notation. **ConfigParams** can be used to work with entire sections as well.

```cs
var configWithSections = ConfigParams.FromTuples(
  "param1", 123,
  "options.param1", "ABC",
  "options.param2", "XYZ"
);
var options = configWithSections.GetSection("options");
```
#### Setting a default configuration

Another helpful option is the ability to set a default configuration.

```cs

var defaultConfig = ConfigParams.FromTuples(
  "param1", 1,
  "param2", "Default Value"
);
var config = config.SetDefaults(defaultConfig);
```

#### Serializing the ConfigParams object

Lastly, **ConfigParams** objects can be serialized/deserialized to/from JSON, YAML, or a plain string.

```cs
var anotherConfig = ConfigParams.FromString("param1=123;param2=ABC");
```

To read more about what functionality is available through **ConfigParams**, be sure to check out the [Commons module’s](../../commons) documentation. 

#### Example

Below is an example of a configurable component:

```cs
public class DataController: IConfigurable
{
	int _maxPageSize = 5;

   	public void Configure(ConfigParams config)
   	{
		this._maxPageSize = config.GetAsIntegerWithDefault("max_page_size", this._maxPageSize);
   	}
		
   	public DataPage get_data(string correlationId, FilterParams filter, PagingParams paging)
   	{
		paging.Take = Math.Min(paging.Take, this._maxPageSize);
		// Get data using max page size constraint.
   	}
	        
}
   

```

#### Manual configuration

Manual configuration can be done in the following manner:

```cs
var component = DataController();
var config = ConfigParams.FromTuple("max_page_size", 100);
component.Configure(config);

```

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

```cs
var config = ConfigParams.FromTuples(
	"descriptor", "myservice:connector:aws:connector1:1.0",
	"param1", "ABC",
	"param2", 123
);
string name = NameResolver.Resolve(config); // Result: connector1

```

#### OptionResolver

**OptionResolver** is a helper class that extracts parameters from the "options" configuration section.

```cs
var config = ConfigParams.FromTuples(
    ...
	"options.param1", "ABC",
	"options.param2", 123
);
var options = OptionsResolver.Resolve(config)   // Result: param1=ABC;param2=123
```

### Configuration readers

Configuration parameters can be stored in microservice configurations, configuration files, or in configuration services. To help with configuration extraction, the Pip.Services Toolkit offers two special **ConfigReader** components. The interface for these components is defined in the [Components](../../components) module.

```cs
public interface IConfigReader
{
    ConfigParams ReadConfig(string correlationId, ConfigParams parameters);
}


```

#### MemoryConfigReader

The [MemoryConfigReader](../../components/config/memory_config_reader/) is a **ConfigReader** that stores configuration data in memory.

```cs
var config = ConfigParams.FromTuples(
	"connection.host", "localhost",
	"connection.port", "8080"
);
var configReader = MemoryConfigReader();
configReader.configure(config);
var parameters = ConfigParams.FromValue(args);
configReader.ReadConfig("123", parameters); // Result: connection.host=localhost;connection.port=8080

```

#### JsonConfigReader

The [JsonConfigReader](../../components/config/json_config_reader/) is a **ConfigReader** that can read configurations from a JSON file.

```json
{ "key1": "{{KEY1_VALUE}}", "key2": "{{KEY2_VALUE}}" }
```

```cs
var configReader = JsonConfigReader("config.json");
var parameters = ConfigParams.FromTuples("KEY1_VALUE", 123, "KEY2_VALUE", "ABC");
configReader.ReadConfig("123", parameters);    // Result: key1=1234;key2=ABCD

```

#### YamlConfigReader

The [YamlConfigReader](../../components/config/yaml_config_reader/) is a **ConfigReader** that can read configurations from a YAML file.

```yml
key1: "1234"
key2: "ABCD"
```

```cs
configReader = YamlConfigReader("config.yml");
parameters = ConfigParams.FromTuples("KEY1_VALUE", 123, "KEY2_VALUE", "ABC");;
configReader.ReadConfig("123", parameters);    // Result: key1=1234;key2=ABCD
```





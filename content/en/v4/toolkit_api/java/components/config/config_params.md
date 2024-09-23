---
type: docs
title: "ConfigParams"
linkTitle: "ConfigParams"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-components-java"
description: > 
 Contains a key-value map with configuration parameters. 

  
---

**Extends:** [StringValueMap](../../../commons/data/string_value_map)

### Description
The ConfigParams class contains a key-value map with configuration parameters. It allows you to define configuration parameters that can be used, for example, to define access control credentials.  

Important points:   
- In general, ConfigParams is used to pass configurations to IConfigurable objects. It also serves as a basis for more concrete configurations, such as ConnectionParams or CredentialParams. 
- This class stores all values as strings. These values can be serialized as JSON or string forms. When retrieved the values can be automatically converted using GetAsXXX methods.
- The keys are case-sensitive, so it is recommended to use consistent C-style notation, such as "my_param".
- Configuration parameters can be broken into sections and subsections using dot notation, such as "section1.subsection1.param1". Using GetSection method all parameters from the specified section can be extracted from a ConfigMap.
- The ConfigParams class supports serialization from/to plain strings as: "key1=123;key2=ABC;key3=2016-09-16T00:00:00.00Z"


### Constructors
Creates a new ConfigParams and fills it with values.
See [StringValueMap.constructors](../../../commons/data/string_value_map/#constructors)

> `public` ConfigParams(Map<?, ?> values)

- **values**: Map<?, ?> - (optional) object to be converted into key-value pairs to initialize this config map.

### Instance Methods  

#### addSection
Adds parameters into this ConfigParams under a specified section.
Keys for the new parameters are appended with section dot prefix.

> `public` void addSection(String section, [ConfigParams] sectionParams)

- **section**: String - name of the section where add new parameters
- **sectionParams**: [ConfigParams] - new parameters to be added.


#### getSection
Gets parameters from specific section stored in this ConfigMap.
The section name is removed from parameter keys.

> `public` [ConfigParams] getSection(String section)

- **section**: String - name of the section to retrieve configuration parameters from.
- **returns**: [ConfigParams] - all configuration parameters that belong to the section named 'section'. 

#### getSectionNames
Gets a list with all 1st level section names.

> `public` List<String> getSectionNames()

- **returns**: List<String> - list of section names stored in this ConfigMap.

#### override
Overrides parameters with new values from a specified [ConfigParams] object
and returns a new [ConfigParams] object.

> `public` [ConfigParams] override([ConfigParams] configParams)

- **configParams**: [ConfigParams] - ConfigMap with parameters to override the current values.
- **returns**: [ConfigParams] - new ConfigParams object.

#### setDefaults
Set default values from a specified ConfigParams object and returns a new ConfigParams object.

> `public` [ConfigParams] setDefaults([ConfigParams] defaultConfigParams)

- **defaultConfigParams**: [ConfigParams] - ConfigMap object with default parameter values.
- **returns**: [ConfigParams] - new ConfigParams object.

### Static methods   

#### fromString
Creates a new ConfigParams object filled with key-value pairs serialized as a string.

> `public static` [ConfigParams] fromString(String line)

- **line**: String - string with serialized key-value pairs as "key1=value1;key2=value2;..."  
Example: *"Key1=123;Key2=ABC;Key3=2016-09-16T00:00:00.00Z"*
- **returns**: [ConfigParams] - new ConfigParams object.

#### fromTuples
Creates a new ConfigParams object filled with provided key-value pairs called tuples.
Tuples parameters contain a sequence of key1, value1, key2, value2, ... pairs.  
See [StringValueMap.fromTuplesArray](../../../commons/data/string_value_map/#fromtuplesarray)

> `public static` [ConfigParams] fromTuples(Object... tuples)

- **tuples**: tuples to fill a new ConfigParams object.
- **returns**: [ConfigParams] - new ConfigParams object.


#### fromValue
Creates a new ConfigParams object filled with key-value pairs from specified object.

> `public static` [ConfigParams] fromValue(Object value)

- **value**: Object - object with key-value pairs used to initialize a new ConfigParams.
- **returns**: [ConfigParams] - new ConfigParams object.


#### mergeConfigs
Merges two or more ConfigParams into one. The following ConfigParams override
previously defined parameters.  
See [StringValueMap.fromMaps](../../../commons/data/string_value_map/#frommaps)

> `public static`[ConfigParams] mergeConfigs([ConfigParams]... configs)

- **configs**: [ConfigParams]... - list of ConfigParams objects to be merged.
- **returns**: [ConfigParams] - new ConfigParams object.

### Examples   

```java
{
  ConfigParams config = ConfigParams.fromTuples(
    "section1.key1", "AAA",
    "section1.key2", 123,
    "section2.key1", true
  );
 
  config.getAsString("section1.key1"); // Result: AAA
  config.getAsInteger("section1.key1"); // Result: 0
 
  ConfigParams section1 = config.getSection("section1");
  section1.toString(); // Result: key1=AAA;key2=123
  }
```


### See also
- #### [IConfigurable](../iconfigurable)
- #### [StringValueMap](../../../commons/data/string_value_map)

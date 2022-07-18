---
type: docs
title: "ConfigParams"
linkTitle: "ConfigParams"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: > 
 Contains a key-value map with configuration parameters. 

  
---

**Implements:** [StringValueMap](../../data/string_value_map)

### Description
The ConfigParams class contains a key-value map with configuration parameters. It allows you to define configuration parameters that can be used, for example, to define access control credentials.  

Important points:   
- In general, ConfigParams is used to pass configurations to IConfigurable objects. It also serves as a basis for more concrete configurations, such as ConnectionParams or CredentialParams. 
- This class stores all values as strings. These values can be serialized as JSON or string forms. When retrieved the values can be automatically converted using GetAsXXX methods.
- The keys are case-sensitive, so it is recommended to use consistent C-style, such as “my_param”.
- Configuration parameters can be broken into sections and subsections using dot notation, such as “section1.subsection1.param1”. Using GetSection method all parameters from the specified section can be extracted from a ConfigMap.
- The ConfigParams class supports serialization from/to plain strings as: “key1=123;key2=ABC;key3=2016-09-16T00:00:00.00Z”


### Constructors
Creates a new empty ConfigParams object.
See [StringValueMap.constructors](../../data/string_value_map/#constructors)

> NewEmptyConfigParams() [*ConfigParams]()


Creates a new ConfigParams from a map.
> NewConfigParams(values map[string]string) [*ConfigParams]()

- **values**: map[string]string - map with key-value pairs

Creates a new ConfigParams object filled with key-value pairs from specified object.
> NewConfigParamsFromValue(value interface{}) [*ConfigParams]()

- **values**: interface{} - object with key-value pairs used to initialize a new ConfigParams.

Creates a new ConfigParams object filled with provided key-value pairs called tuples.
Tuples parameters contain a sequence of key1, value1, key2, value2, ... pairs.
> NewConfigParamsFromTuples(tuples ...interface{}) [*ConfigParams]()

- **values**: ...interface{} - the tuples to fill a new ConfigParams object.

Creates a new StringValueMap from a list of key-value pairs called tuples.
The method is similar to fromTuples but tuples are passed as an array instead of as parameters.
> NewConfigParamsFromTuplesArray(tuples []interface{}) [*ConfigParams]()

- **values**: []interface{} - list of values where odd elements are keys and the following even elements are values

Creates a new ConfigParams object filled with key-value pairs serialized as a string.

Example: *"Key1=123;Key2=ABC;Key3=2016-09-16T00:00:00.00Z"*
> NewConfigParamsFromString(line string) [*ConfigParams]()

- **line**: string - a string with serialized key-value pairs as *"key1=value1;key2=value2;..."*

Creates a new ConfigParams by merging two or more maps.
Maps defined later in the list override values from previously defined maps.
> NewConfigParamsFromMaps(maps ...map[string]string) [*ConfigParams]()

- **maps**: ...map[string]string - an array of maps to be merged


### Methods

#### AddSection
Adds parameters into this ConfigParams under specified section.
Keys for the new parameters are appended with section dot prefix.

> (c [*ConfigParams]()) AddSection(section string, sectionParams [*ConfigParams]())

- **section**: string - name of the section where add new parameters
- **sectionParams**: [*ConfigParams]() - new parameters to be added.


#### GetSection
Gets parameters from specific section stored in this ConfigMap.
The section name is removed from parameter keys.

> (c [*ConfigParams]()) GetSection(section string) [*ConfigParams]()

- **section**: string - name of the section to retrieve configuration parameters from.
- **returns**: [*ConfigParams]() - all configuration parameters that belong to the section named 'section'. 

#### GetSectionNames
Gets a list with all 1st level section names.

> (c [*ConfigParams]()) GetSectionNames() []string

- **returns**: string[] - list of section names stored in this ConfigMap.

#### Override
Overrides parameters with new values from specified [ConfigParams]()
and returns a new [ConfigParams]() object.

> (c [*ConfigParams]()) Override(configParams [*ConfigParams]()) [*ConfigParams]()

- **configParams**: [*ConfigParams]() - ConfigMap with parameters to override the current values.
- **returns**: [*ConfigParams]() - new ConfigParams object.

#### SetDefaults
Set default values from specified ConfigParams and returns a new ConfigParams object.

> (c [*ConfigParams]()) SetDefaults(defaults [*ConfigParams]()) [*ConfigParams]()

- **defaults**: [*ConfigParams]() - ConfigMap with default parameter values.
- **returns**: [*ConfigParams]() - new ConfigParams object.


### Examples   

```go
config := NewConfigParamsFromTuples(
    "section1.key1", "AAA",
    "section1.key2", 123,
    "section2.key1", true
);

config.GetAsString("section1.key1"); // Result: AAA
config.GetAsInteger("section1.key1"); // Result: 0

section1 = config.GetSection("section2");
section1.GetAsString("key1"); // Result: true

```


### See also
- #### [IConfigurable](../iconfigurable)
- #### [StringValueMap](../../data/string_value_map)

---
type: docs
title: "ConfigParams"
linkTitle: "ConfigParams"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: > 
 Contains a key-value map with configuration parameters. 

  
---
### Description
ConfigParams is a class that contains a key-value map with configuration parameters. It allows you to define configuration parameters that can be used, for example, to define access control credentials.  

In general, ConfigParams is used to pass configurations to IConfigurable objects. It also serves as a basis for more concrete configurations, such as ConnectionParams or CredentialParams. 

This class stores all values as strings. These values can be serialized as JSON or string forms. When retrieved the values can be automatically converted using GetAsXXX methods.

Important points:   
- The keys are case-sensitive, so it is recommended to use consistent C-style, such as “my_param”.
- Configuration parameters can be broken into sections and subsections using dot notation, such as “section1.subsection1.param1”. Using GetSection method all parameters from the specified section can be extracted from a ConfigMap.
- The ConfigParams class supports serialization from/to plain strings as: “key1=123;key2=ABC;key3=2016-09-16T00:00:00.00Z”


**Implements:** [StringValueMap](../../data/string_value_map)

See also [IConfigurable](../iconfigurable), [StringValueMap](../../data/string_value_map)


### Constructors
Creates a new ConfigParams and fills it with values.
See [StringValueMap.constructors](../../data/string_value_map/#constructors)

> ConfigParams(values: Any = None): [ConfigParams]()

- **values**: Any - (optional) an object to be converted into key-value pairs to initialize this config map.

### Instance Methods  

#### add_section
Adds parameters into this ConfigParams under specified section.
Keys for the new parameters are appended with section dot prefix.

> add_section(section: str, section_params: [ConfigParams]())

- **section**: str - name of the section where add new parameters
- **section_params**: [ConfigParams]() - new parameters to be added.

#### get_section
Gets parameters from specific section stored in this ConfigMap.
The section name is removed from parameter keys.

> get_section(section: str): [ConfigParams]()

- **section**: str - name of the section to retrieve configuration parameters from.
- **returns**: [ConfigParams]() - all configuration parameters that belong to the section named 'section'. 
                                     
#### get_section_names
Gets a list with all 1st level section names.

> get_section_names(): List[str]

- **returns**: List[str] - a list of section names stored in this ConfigMap.

#### override
Overrides parameters with new values from specified [ConfigParams]()
and returns a new [ConfigParams]() object.

> override(config_params: [ConfigParams]()): [ConfigParams]()

- **config_params**: [ConfigParams]() - ConfigMap with parameters to override the current values.
- **returns**: [ConfigParams]() - a new ConfigParams object.

#### set_defaults
Set default values from specified ConfigParams and returns a new ConfigParams object.

> set_defaults(default_config_params: [ConfigParams]()): [ConfigParams]()

- **default_config_params**: [ConfigParams]() - ConfigMap with default parameter values.
- **returns**: [ConfigParams]() - a new ConfigParams object.

### Static methods   

#### from_string
Creates a new ConfigParams object filled with key-value pairs serialized as a string.

> `static` from_string(line: str): [ConfigParams]()

- **line**: str - a string with serialized key-value pairs as "key1=value1;key2=value2;..."  
Example: *"Key1=123;Key2=ABC;Key3=2016-09-16T00:00:00.00Z"*
- **returns**: [ConfigParams]() - a new ConfigParams object.

#### from_tuples
Creates a new ConfigParams object filled with provided key-value pairs called tuples.
Tuples parameters contain a sequence of key1, value1, key2, value2, ... pairs.  
See [StringValueMap.fromTuplesArray](../../data/string_value_map/#fromtuplesarray)

> `static` from_tuples(*tuples: Any): [ConfigParams]()

- **tuples**: Any - the tuples to fill a new ConfigParams object.
- **returns**: [ConfigParams]() - a new ConfigParams object.

#### from_value
Creates a new ConfigParams object filled with key-value pairs from specified object.

> `static` from_value(value: Any): [ConfigParams]()

- **value**: Any - an object with key-value pairs used to initialize a new ConfigParams.
- **returns**: [ConfigParams]() - a new ConfigParams object.

#### merge_configs
Merges two or more ConfigParams into one. The following ConfigParams override
previously defined parameters.  
See [StringValueMap.fromMaps](../../data/string_value_map/#frommaps)

> `static` merge_configs(*configs: [ConfigParams]()): [ConfigParams]()

- **configs**:  [ConfigParams]() - a list of ConfigParams objects to be merged.
- **returns**: [ConfigParams]() - a new ConfigParams object.

### Examples   

```python
# Create a ConfigParams object from a tuple
config = ConfigParams.from_tuples("section1.key1", "AAA", "section1.key2", 123, "section2.key1", True)

# Create a ConfigParams object from a string
configS = ConfigParams.from_string("section1.key1=AAA;section1.key2=123;section2.key1=True")

# Create a ConfigParams object from a value
dict = {"section1.key1": "AAA", "section1.key2": 123, "section2.key1": True} # Create a dictionary
configD = ConfigParams. from_value(dict) # Create the ConfigParams object using the dictionary

# Add a new section 
config.add_section("section3", ConfigParams.from_tuples("key1", "ABCDE"))
                                       
# Get a section                                        
section1 = config.get_section("section1")       # Returns {'key1': 'AAA', 'key2': '123'} 

# Get the section names
config.get_section_names()      # Returns ['section1', 'section2']

# Change the value of section1.key1 to BBB
config.override(ConfigParams.from_tuples("section1.key1", "BBB")) 
```

### See also
- #### [IConfigurable](../iconfigurable)
- #### [StringValueMap](../../data/string_value_map)

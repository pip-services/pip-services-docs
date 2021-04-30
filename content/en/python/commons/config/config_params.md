---
type: docs
title: "ConfigParams"
linkTitle: "ConfigParams"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: > 
    Contains a key-value map with configuration parameters. 

  
---
### Description
ConfigParams is a class that contains a key-value map with configuration parameters. It allows you to define some configuration parameters that can be used, for example, to define access control credentials. 
This class stores all values as strings. These values can be serialized as JSON or string forms. When retrieved the values can be automatically converted using GetAsXXX methods.

**Extends:** [StringValueMap](../../data/string_value_map)

See also [IConfigurable](../iconfigurable), [StringValueMap](../../data/string_value_map)

**Example:**

```python
config = ConfigParams.from_tuples("section1.key1", "AAA",
                                 "section1.key2", 123,
                                 "section2.key1", True)

config.get_as_string("section1.key1")  # Result: AAA
config.get_as_integer("section1.key1") # Result: 0
section1 = config.get_section("section1")
section1.__str__() # Result: key1=AAA;key2=123

```

### Constructors
Creates a new ConfigParams and fills it with values.
See [StringValueMap.constructors](../../data/string_value_map/#constructors)

> ConfigParams(values: Any = None): [ConfigParams]()

- **values**: Any - (optional) an object to be converted into key-value pairs to initialize this config map.

### Methods

#### add_section
Adds parameters into this ConfigParams under specified section.
Keys for the new parameters are appended with section dot prefix.

> add_section(section: str, section_params: [ConfigParams]())

- **section**: str - name of the section where add new parameters
- **section_params**: [ConfigParams]() - new parameters to be added.

**Example:**
```python
# Create a ConfigParams object with two sections
config = ConfigParams.from_tuples("section1.key1", "AAA", "section1.key2", 123, "section2.key1", True)

# Add a new section 
config.add_section("section3", ConfigParams.from_tuples("key1", "ABCDE"))
```

#### get_section
Gets parameters from specific section stored in this ConfigMap.
The section name is removed from parameter keys.

> `public` getSection(section: str): [ConfigParams]()

- **section**: str - name of the section to retrieve configuration parameters from.
- **returns**: [ConfigParams]() - all configuration parameters that belong to the section named 'section'. 

**Example:**
```python
# Create a ConfigParams object
config = ConfigParams.from_tuples("section1.key1", "AAA",
                                         "section1.key2", 123,
                                         "section2.key1", True)
                                         
# Get "section1"                                        
section1 = config.get_section("section1")       # Returns {'key1': 'AAA', 'key2': '123'}                                         
 ```                                        

#### get_section_names
Gets a list with all 1st level section names.

> get_section_names(): List[str]

- **returns**: List[str] - a list of section names stored in this ConfigMap.

**Example:**
```python
# Create a ConfigParams object with two sections
config = ConfigParams.from_tuples("section1.key1", "AAA",
                                         "section1.key2", 123,
                                         "section2.key1", True)

# Get the section names
config.get_section_names()      # Returns ['section1', 'section2']
```
#### override
Overrides parameters with new values from specified [ConfigParams]()
and returns a new [ConfigParams]() object.

> override(config_params: [ConfigParams]()): [ConfigParams]()

- **config_params**: [ConfigParams]() - ConfigMap with parameters to override the current values.
- **returns**: [ConfigParams]() - a new ConfigParams object.

**Example:**
```python
# Create a ConfigParams object with two sections
config = ConfigParams.from_tuples("section1.key1", "AAA", "section1.key2", 123, "section2.key1", True)

# Change the value of section1.key1 to BBB
config.override(ConfigParams.from_tuples("section1.key1", "BBB")) 
```


#### set_defaults
Set default values from specified ConfigParams and returns a new ConfigParams object.

> set_defaults(default_config_params: [ConfigParams]()): [ConfigParams]()

- **default_config_params**: [ConfigParams]() - ConfigMap with default parameter values.
- **returns**: [ConfigParams]() - a new ConfigParams object.

#### from_string
Creates a new ConfigParams object filled with key-value pairs serialized as a string.

> `static` from_string(line: str): [ConfigParams]()

- **line**: str - a string with serialized key-value pairs as "key1=value1;key2=value2;..."  
Example: *"Key1=123;Key2=ABC;Key3=2016-09-16T00:00:00.00Z"*
- **returns**: [ConfigParams]() - a new ConfigParams object.

**Example:**
```python
configS = ConfigParams.from_string("section1.key1=AAA;section1.key2=123;section2.key1=True")
```
#### from_tuples
Creates a new ConfigParams object filled with provided key-value pairs called tuples.
Tuples parameters contain a sequence of key1, value1, key2, value2, ... pairs.  
See [StringValueMap.fromTuplesArray](../../data/string_value_map/#fromtuplesarray)

> `static` from_tuples(*tuples: Any): [ConfigParams]()

- **tuples**: Any - the tuples to fill a new ConfigParams object.
- **returns**: [ConfigParams]() - a new ConfigParams object.

**Example:**
```python
config = ConfigParams.from_tuples("section1.key1", "AAA",
                                 "section1.key2", 123,
                                 "section2.key1", True)
```

#### from_value
Creates a new ConfigParams object filled with key-value pairs from specified object.

> `static` from_value(value: Any): [ConfigParams]()

- **value**: Any - an object with key-value pairs used to initialize a new ConfigParams.
- **returns**: [ConfigParams]() - a new ConfigParams object.

**Example:**
```python
# Create a dictionary with the parameters and their values
dict = {"section1.key1": "AAA", "section1.key2": 123, "section2.key1": True}

# Create the ConfigParams object
configD = ConfigParams. from_value(dict)
```

#### merge_configs
Merges two or more ConfigParams into one. The following ConfigParams override
previously defined parameters.  
See [StringValueMap.fromMaps](../../data/string_value_map/#frommaps)

> `static` merge_configs(*configs: List[[ConfigParams]()]): [ConfigParams]()

- **configs**:  List[[ConfigParams]()] - a list of ConfigParams objects to be merged.
- **returns**: [ConfigParams]() - a new ConfigParams object.

### See also
- #### [IConfigurable](../iconfigurable)
- #### [StringValueMap](../../data/string_value_map)

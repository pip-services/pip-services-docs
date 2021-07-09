---
type: docs
title: "ConfigParams"
linkTitle: "ConfigParams"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: > 
 Contains a key-value map with configuration parameters. 

  
---

**Inherits**: [StringValueMap](../../data/string_value_map)

See also [IConfigurable](../iconfigurable), [StringValueMap](../../data/string_value_map)

### Description
The ConfigParams class contains a key-value map with configuration parameters. It allows you to define configuration parameters that can be used, for example, to define access control credentials.  

Important points:   
- In general, ConfigParams is used to pass configurations to IConfigurable objects. It also serves as a basis for more concrete configurations, such as ConnectionParams or CredentialParams. 
- This class stores all values as strings. These values can be serialized as JSON or string forms. When retrieved the values can be automatically converted using GetAsXXX methods.
- The keys are case-sensitive, so it is recommended to use consistent C-style, such as “my_param”.
- Configuration parameters can be broken into sections and subsections using dot notation, such as “section1.subsection1.param1”. Using GetSection method all parameters from the specified section can be extracted from a ConfigMap.
- The ConfigParams class supports serialization from/to plain strings, such as: “key1=123;key2=ABC;key3=2016-09-16T00:00:00.00Z”


### Constructors
Creates a new ConfigParams and fills it with values.
See [StringValueMap.constructors](../../data/string_value_map/#constructors)

> `public` ConfigParams(IDictionary\<string, string\> content)

- **content**: IDictionary\<string, string\> - (optional) object to be converted into key-value pairs to initialize this config map.

### Instance Methods  

#### AddSection
Adds parameters into this ConfigParams under a specified section.
Keys for the new parameters are appended with section dot prefix.

> `public` void AddSection(string section, [ConfigParams]() sectionParams)

- **section**: string - name of the section where add new parameters
- **sectionParams**: [ConfigParams]() - new parameters to be added.


#### IsShadowName
Detect commented sections.
"Shadow" section names starts with # or !.

> `protected` bool IsShadowName(string name)

- **name**: bool - true if is the "shadow" section


#### GetSection
Gets parameters from specific section stored in this ConfigMap.
The section name is removed from parameter keys.

> `public` [ConfigParams]() GetSection(string section)

- **section**: string - name of the section to retrieve configuration parameters from.
- **returns**: [ConfigParams]() - all configuration parameters that belong to the section named 'section'. 

#### GetSectionNames
Gets a list with all 1st level section names.

> `public` IEnumerable\<string\> GetSectionNames()

- **returns**: IEnumerable\<string\> - list of section names stored in this ConfigMap.

#### Override
Overrides parameters with new values from specified [ConfigParams]()
and returns a new [ConfigParams]() object.

> `public` [ConfigParams]() Override([ConfigParams]() configParams)

- **configParams**: [ConfigParams]() - ConfigMap with parameters to override the current values.
- **returns**: [ConfigParams]() - new ConfigParams object.

#### SetDefaults
Set default values from specified ConfigParams and returns a new ConfigParams object.

> `public` [ConfigParams]() SetDefaults([ConfigParams]() defaultConfigParams)

- **defaultConfigParams**: [ConfigParams]() - ConfigMap with default parameter values.
- **returns**: [ConfigParams]() - new ConfigParams object.

### Static methods   

#### FromString
Creates a new ConfigParams object filled with key-value pairs serialized as a string.

> `public new static` [ConfigParams]() FromString(line: string)

- **line**: string - string with serialized key-value pairs as "key1=value1;key2=value2;..."  
Example: *"Key1=123;Key2=ABC;Key3=2016-09-16T00:00:00.00Z"*
- **returns**: [ConfigParams]() - new ConfigParams object.

#### FromTuples
Creates a new ConfigParams object filled with provided key-value pairs called tuples.
Tuples parameters contain a sequence of key1, value1, key2, value2, ... pairs.  
See [StringValueMap.fromTuplesArray](../../data/string_value_map/#fromtuplesarray)

> `public new static` [ConfigParams]() FromTuples(params object[] 	tuples)

- **tuples**: object[] - tuples to fill a new ConfigParams object.
- **returns**: [ConfigParams]() - new ConfigParams object.


#### FromValue
Creates a new ConfigParams object filled with key-value pairs from the specified object.

> `public new static` [ConfigParams]() FromValue(object value)

- **value**: object - object with key-value pairs used to initialize a new ConfigParams.
- **returns**: [ConfigParams]() - new ConfigParams object.


#### MergeConfigs
Merges two or more ConfigParams into one. The following ConfigParams override
previously defined parameters.  
See [StringValueMap.fromMaps](../../data/string_value_map/#frommaps)

> `public static` [ConfigParams]() MergeConfigs(params IDictionary\<string, string\>[] 	configs)

- **configs**: IDictionary\<string, string\>[] - list of ConfigParams objects to be merged.
- **returns**: [ConfigParams]() - new ConfigParams object.

### Examples   

```cs
// Create a ConfigParams object from a tuple
var config = ConfigParams.FromTuples("section1.key1", "AAA", "section1.key2", 123, "section2.key1", true);

// Create a ConfigParams object from a string
config = ConfigParams.FromTuples("section1.key1=AAA;section1.key2=123;section2.key1=True");

// Create a ConfigParams object from a value
var obj = {"section1.key1": "AAA", "section1.key2": 123, "section2.key1": true}; // Create a object
config = ConfigParams.FromValue(obj); // Create the ConfigParams object using the object

// Add a new section 
config.AddSection("section3", ConfigParams.FromTuples("key1", "ABCDE"));
                                       
// Get a section                                        
let section1 = config.GetSection("section1")       // Returns {'key1': 'AAA', 'key2': '123'} 

// Get the section names
config.GetSectionNames();      // Returns ['section1', 'section2']

// Change the value of section1.key1 to BBB
config.Override(ConfigParams.FromTuples("section1.key1", "BBB"));
```


### See also
- #### [IConfigurable](../iconfigurable)
- #### [StringValueMap](../../data/string_value_map)

---
type: docs
title: "ConfigParams"
linkTitle: "ConfigParams"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: > 
    Contains a key-value map with configuration parameters. 
    All values stored as strings and can be serialized as JSON or string forms.
    When retrieved the values can be automatically converted on read using GetAsXXX methods.


    The keys are case-sensitive, so it is recommended to use consistent C-style as: *"my_param"*
 

    Configuration parameters can be broken into sections and subsections using dot notation as:
    *"section1.subsection1.param1"*. Using GetSection method all parameters from specified section
    can be extracted from a ConfigMap.
 

    The ConfigParams supports serialization from/to plain strings as:
    *"key1=123;key2=ABC;key3=2016-09-16T00:00:00.00Z"*


    ConfigParams are used to pass configurations to [IConfigurable](../iconfigurable) objects.
    They also serve as a basis for more concrete configurations such as [ConnectionParams](../../../components/connect/connection_params) or [CredentialParams](../../../components/auth/credential_params) (in the Pip.Services components package).
---

**Extends:** [StringValueMap](../../data/string_value_map)

See also [IConfigurable](../iconfigurable), [StringValueMap](../../data/string_value_map)

**Example:**

```typescript
let config = ConfigParams.fromTuples(
    "section1.key1", "AAA",
    "section1.key2", 123,
    "section2.key1", true
);
        
config.getAsString("section1.key1"); // Result: AAA
config.getAsInteger("section1.key1"); // Result: 0
 
section1 = config.getSection("section1");
section1.toString(); // Result: key1=AAA;key2=123

```

### Constructors
Creates a new ConfigParams and fills it with values.
See [StringValueMap.constructors](../../data/string_value_map/#constructors)

> public constructor(values: any = null): [ConfigParams]()

- **values**: any - (optional) an object to be converted into key-value pairs to initialize this config map.

### Methods

#### addSection
Adds parameters into this ConfigParams under specified section.
Keys for the new parameters are appended with section dot prefix.

> `public` addSection(section: string, sectionParams: [ConfigParams]()): void

- **section**: string - name of the section where add new parameters
- **sectionParams**: [ConfigParams]() - new parameters to be added.


#### getSection
Gets parameters from specific section stored in this ConfigMap.
The section name is removed from parameter keys.

> `public` getSection(section: string): [ConfigParams]()

- **section**: string - name of the section to retrieve configuration parameters from.
- **returns**: [ConfigParams]() - all configuration parameters that belong to the section named 'section'. 

#### getSectionNames
Gets a list with all 1st level section names.

> `public` getSectionNames(): string[]

- **returns**: string[] - a list of section names stored in this ConfigMap.

#### override
Overrides parameters with new values from specified [ConfigParams]()
and returns a new [ConfigParams]() object.

> `public` override(configParams: [ConfigParams]()): [ConfigParams]()

- **configParams**: [ConfigParams]() - ConfigMap with parameters to override the current values.
- **returns**: [ConfigParams]() - a new ConfigParams object.

#### setDefaults
Set default values from specified ConfigParams and returns a new ConfigParams object.

> `public` setDefaults(defaultConfigParams: [ConfigParams]()): [ConfigParams]()

- **defaultConfigParams**: [ConfigParams]() - ConfigMap with default parameter values.
- **returns**: [ConfigParams]() - a new ConfigParams object.

#### fromString
Creates a new ConfigParams object filled with key-value pairs serialized as a string.

> `public static` fromString(line: string): [ConfigParams]()

- **line**: string - a string with serialized key-value pairs as "key1=value1;key2=value2;..."  
Example: *"Key1=123;Key2=ABC;Key3=2016-09-16T00:00:00.00Z"*
- **returns**: [ConfigParams]() - a new ConfigParams object.

#### fromTuples
Creates a new ConfigParams object filled with provided key-value pairs called tuples.
Tuples parameters contain a sequence of key1, value1, key2, value2, ... pairs.  
See [StringValueMap.fromTuplesArray](../../data/string_value_map/#fromtuplesarray)

> `public static` fromTuples(...tuples: any[]): [ConfigParams]()

- **tuples**: any[] - the tuples to fill a new ConfigParams object.
- **returns**: [ConfigParams]() - a new ConfigParams object.


#### fromValue
Creates a new ConfigParams object filled with key-value pairs from specified object.

> `public static` fromValue(value: any): [ConfigParams]()

- **value**: any - an object with key-value pairs used to initialize a new ConfigParams.
- **returns**: [ConfigParams]() - a new ConfigParams object.


#### 
Merges two or more ConfigParams into one. The following ConfigParams override
previously defined parameters.  
See [StringValueMap.fromMaps](../../data/string_value_map/#frommaps)

> `public static` mergeConfigs(...configs: [ConfigParams]()[]): [ConfigParams]()

- **configs**: [ConfigParams]()[] - a list of ConfigParams objects to be merged.
- **returns**: [ConfigParams]() - a new ConfigParams object.

### See also
- #### [IConfigurable](../iconfigurable)
- #### [StringValueMap](../../data/string_value_map)
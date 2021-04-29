---
type: docs
title: "ConfigParams"
linkTitle: "ConfigParams" 
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
---

### Type

```go
type ConfigParams struct {
	data.StringValueMap
}
```

Contains a key-value map with configuration parameters. All values stored as strings and can be serialized as JSON or string forms. When retrieved the values can be automatically converted on read using GetAsXXX methods. The keys are case-sensitive, so it is recommended to use consistent C-style as: "my_param"

Configuration parameters can be broken into sections and subsections using dot notation as: "section1.subsection1.param1". Using GetSection method all parameters from specified section can be extracted from a ConfigMap.

The ConfigParams supports serialization from/to plain strings as: "key1=123;key2=ABC;key3=2016-09-16T00:00:00.00Z"

ConfigParams are used to pass configurations to IConfigurable objects. They also serve as a basis for more concrete configurations such as ConnectionParams or CredentialParams (in the Pip.Services components package).

see [IConfigurable](../iconfigurable), [StringValueMap](../../data/stringvaluemap)

**Example:**

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

### Funcs

#### NewConfigParams
> func NewConfigParams(values map[[string](https://pkg.go.dev/builtin#string)][string](https://pkg.go.dev/builtin#string)) *[ConfigParams](../configparams)

Creates a new [ConfigParams](../configparams) from map.

- values ...map[[string](https://pkg.go.dev/builtin#string)][string](https://pkg.go.dev/builtin#string)
- Returns *[ConfigParams](../configparams) a newly created [ConfigParams](../configparams).

#### NewConfigParamsFromMaps
> func NewConfigParamsFromMaps(maps ...map[[string](https://pkg.go.dev/builtin#string)][string](https://pkg.go.dev/builtin#string)) *[ConfigParams](../configparams)

Creates a new ConfigParams by merging two or more maps. Maps defined later in the list override values from previously defined maps.

- maps ...map[[string](https://pkg.go.dev/builtin#string)][string](https://pkg.go.dev/builtin#string)
an array of maps to be merged
- Returns *[ConfigParams](../configparams) a newly created [ConfigParams](../configparams).

#### NewConfigParamsFromString
> func NewConfigParamsFromString(line [string](https://pkg.go.dev/builtin#string)) *[ConfigParams](../configparams)

Creates a new ConfigParams object filled with key-value pairs serialized as a string. 

- line: string a string with serialized key-value pairs as "key1=value1;key2=value2;..."  
**Example:** "Key1=123;Key2=ABC;Key3=2016-09-16T00:00:00.00Z"
- Returns *[ConfigParams](../configparams) a new [ConfigParams](../configparams) object.

see [StringValueMap.fromString](../data/stringvaluemap#fromstring)

#### NewConfigParamsFromTuples
> func NewConfigParamsFromTuples(tuples ...interface{}) *[ConfigParams](../configparams)

- Returns [ConfigParams](../configparams) a new [ConfigParams](../configparams) object.

#### NewConfigParamsFromTuplesArray
> func NewConfigParamsFromTuplesArray(tuples []interface{}) *[ConfigParams](../configparams)

Creates a new StringValueMap from a list of key-value pairs called tuples. The method is similar to fromTuples but tuples are passed as array instead of parameters.

- tuples []interface{} a list of values where odd elements are keys and the following even elements are values

- Returns *[ConfigParams](../configparams) a newly created [ConfigParams](../configparams).

#### NewConfigParamsFromValue
> func NewConfigParamsFromValue(value interface{}) *[ConfigParams](../configparams)

Creates a new ConfigParams object filled with key-value pairs from specified object.

- value interface{}
an object with key-value pairs used to initialize a new [ConfigParams](../configparams).
- Returns *[ConfigParams](../configparams) a new [ConfigParams](../configparams) object.

#### NewEmptyConfigParams
> func NewEmptyConfigParams() *[ConfigParams](../configparams)

Creates a new empty [ConfigParams](../configparams) object. 

- Returns *[ConfigParams](../configparams) a new empty [ConfigParams](../configparams) object.

#### AddSection
> func (c *[ConfigParams](../configparams)) AddSection(section [string](https://pkg.go.dev/builtin#string), sectionParams *[ConfigParams](../configparams))

Adds parameters into this [ConfigParams](../configparams) under specified section. Keys for the new parameters are appended with section dot prefix.

- section: [string](https://pkg.go.dev/builtin#string) name of the section where add new parameters
- sectionParams: *[ConfigParams](../configparams) new parameters to be added.

#### GetSection
> func (c *[ConfigParams](../configparams)) GetSection(section [string](https://pkg.go.dev/builtin#string)) *[ConfigParams](../configparams)

Gets parameters from specific section stored in this ConfigMap. The section name is removed from parameter keys. 

- section: [string](https://pkg.go.dev/builtin#string) name of the section to retrieve configuration parameters from.

- Returns *[ConfigParams](../configparams) all configuration parameters that belong to the section named 'section'.

#### GetSectionNames
> func (c *[ConfigParams](../configparams)) GetSectionNames() [][string](https://pkg.go.dev/builtin#string)

Gets a list with all 1st level section names.

- Returns [][string](https://pkg.go.dev/builtin#string) a list of section names stored in this ConfigMap.


#### Override
> func (c *[ConfigParams](../configparams)) Override(configParams *[ConfigParams](../configparams)) *[ConfigParams](../configparams)

Overrides parameters with new values from specified ConfigParams and returns a new ConfigParams object. 
see [SetDefaults](#setdefaults)

- configParams: *[ConfigParams](../configparams) ConfigMap with parameters to override the current values.
- Returns *[ConfigParams](../configparams) a new [ConfigParams](../configparams) object.

#### SetDefaults
> func (c *[ConfigParams](../configparams)) SetDefaults(defaults *[ConfigParams](../configparams)) *[ConfigParams](../configparams)

Set default values from specified ConfigParams and returns a new ConfigParams object. 

- defaultConfigParams: *[ConfigParams](../configparams) ConfigMap with default parameter values.
- Returns *[ConfigParams](../configparams) a new [ConfigParams](../configparams) object.

see [Override](#override)





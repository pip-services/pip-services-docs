---
type: docs
title: "MultiString"
linkTitle: "MultiString"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-data-java"
description: > 
    Class used to create objects that contain string translations for multiple languages.
    
---

### Description

The MultiString class allows you to create objects that contain string translations for multiple languages.

Important points

- Language keys use two-letter codes like: *'en', 'sp', 'de', 'ru', 'fr', 'pr'*.
- When a translation for a specific language does not exists, it defaults to English ('en').
- When English does not exists, it falls back to the first defined language


### Constructors
Creates a new MultiString object and initializes it with values.

> `public` public MultiString(Map<?, ?> map)

- **map**: Map<?, ?> - a map with language-text pairs.


### Instance methods

#### append
Appends a map with language-translation pairs.

> `public` void append(Map<?, ?> map)

- **map**: Map<?, ?> - map with language-translation pairs.


#### get
Gets a string translation by specified language.
When the language is not found, it defaults to English ('en').
When English is not found, it takes the first value.

> `public` String get(String language) 

- **language**: String - language's two-symbol code.
- **returns**: String - translation for the specified language or default translation.


#### getLanguages
Gets all languages stored in this MultiString object.

> `public` List<String> getLanguages()

- **returns**: List<String> - list with language codes. 


#### length
Returns the number of translations stored in this MultiString object.

> `public` int length()

- **returns**: int - number of translations.


#### put
Puts a new translation for the specified language.

> `public` void put(String language, Object value)

- **language**: string - language's two-symbol code.
- **value**: Object - new translation for the specified language.



### Static methods

#### fromTuples
Creates a new MultiString object from language-translation pairs (tuples).

> `public static` [MultiString](../multi_string) fromTuples(Object... tuples)

- **tuples**: Object... - array that contains language-translation tuples.
- **returns**: [MultiString](../multi_string) - MultiString Object.


#### fromTuplesArray
Creates a new MultiString object from language-translation pairs (tuples) specified as array.

> `public static` [MultiString](../multi_string) fromTuplesArray(Object[] tuples)

- **tuples**: Object[] - array that contains language-translation tuples.
- **returns**: [MultiString](../multi_string) - MultiString Object.


#### fromValue
Creates a new MultiString object from a value that contains language-translation pairs.  
See [StringValueMap](../string_value_map)

> `public static` [MultiString](../multi_string) fromValue(Map<?, ?> value)

- **value**: Map<?, ?> - value used to initialize a MultiString object.
- **returns**: [MultiString](../multi_string) - MultiString object.

### Examples

```java
{@code
  MultiString values = MultiString.fromTuples(
   "en", "Hello World!",
   "ru", "Привет мир!"
  );
 
  String value1 = values.get("ru"); // Result: "Привет мир!"
  String value2 = values.get("pt"); // Result: "Hello World!"
  }

```

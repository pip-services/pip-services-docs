---
type: docs
title: "MultiString"
linkTitle: "MultiString"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: > 
    Class used to create objects that contain string translations for multiple languages.
    
---

**Implements:** [IValueWrapper](../../reflect/ivalue_wrapper)

### Description

The MultiString class allows you to create objects that contain string translations for multiple languages.

Important points

- Language keys use two-letter codes like: *'en', 'sp', 'de', 'ru', 'fr', 'pr'*.
- When a translation for a specific language does not exists, it defaults to English ('en').
- When English does not exists, it falls back to the first defined language


### Constructors
Creates a new MultiString object and initializes it with values.

> MultiString([map])

- **map**: dynamic - a map with language-text pairs.


### Instance methods

#### append
Appends a map with language-translation pairs.

> void append(map)

- **map**: dynamic - map with language-translation pairs.


#### clear
Clears all translations from this MultiString object.

> void clear()


#### get
Gets a string translation by specified language.
When the language is not found, it defaults to English ('en').
When English is not found, it takes the first value.

> String get(String language)

- **language**: String - language's two-symbol code.
- **returns**: String - translation for the specified language or default translation.


#### getLanguages
Gets all languages stored in this MultiString object.

> List\<String\> getLanguages()

- **returns**: List\<String\> - list with language codes. 


#### length
Returns the number of translations stored in this MultiString object.

> int length()

- **returns**: int - number of translations.


#### put
Puts a new translation for the specified language.

> void put(String language, value)

- **language**: String - language's two-symbol code.
- **value**: dynamic - new translation for the specified language.


#### remove
Removes a translation for the specified language.

> void remove(String language)

- **language**: String - language's two-symbol code.


### Static methods

#### fromTuples
Creates a new MultiString object from language-translation pairs (tuples).

> `static` [MultiString](../multi_string) fromTuples(List\<dynamic\> tuples)

- **tuples**: List\<dynamic\> - array that contains language-translation tuples.
- **returns**: [MultiString](../multi_string) - MultiString Object.


#### fromTuplesArray
Creates a new MultiString object from language-translation pairs (tuples) specified as array.

> `static` [MultiString](../multi_string fromTuplesArray(List\<dynamic\> tuples)

- **tuples**: List\<dynamic\> - array that contains language-translation tuples.
- **returns**: [MultiString](../multi_string) - MultiString Object.


#### fromValue
Creates a new MultiString object from a value that contains language-translation pairs.  
See [StringValueMap](../string_value_map)

> `static` [MultiString](../multi_string) fromValue(dynamic value)

- **value**: dynamic - value used to initialize a MultiString object.
- **returns**: [MultiString](../multi_string) - MultiString object.

### Examples

```dart
var values = MultiString.fromTuples([
    'en', 'Hello World!',
    'ru', 'Привет мир!'
]);
var value1 = values.get('ru'); // Result: 'Привет мир!'
var value2 = values.get('pt'); // Result: 'Hello World!'

```

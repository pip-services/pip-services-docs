---
type: docs
title: "MultiString"
linkTitle: "MultiString"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: > 
    Class used to create objects that contain string translations for multiple languages.
    
---

**Implements:** dict

### Description

The MultiString class allows you to create objects that contain string translations for multiple languages.

Important points

- Language keys use two-letter codes like: *'en', 'sp', 'de', 'ru', 'fr', 'pr'*.
- When a translation for a specific language does not exists, it defaults to English ('en').
- When English does not exists, it falls back to the first defined language


### Constructors
Creates a new MultiString object and initializes it with values.

> MultiString(map: Any = None)

- **map**: Any - a map with language-text pairs.


### Instance methods

#### append
Appends a map with language-translation pairs.

> append(map: Any)

- **map**: Any - the map with language-translation pairs.


#### clear
Clears all translations from this MultiString object.

> clear()

#### get
Gets a string translation by specified language.
When language is not found it defaults to English ('en').
When English is not found it takes the first value.

> get(language: str): str 

- **language**: str - a language two-symbol code.
- **returns**: str - a translation for the specified language or default translation.


#### get_languages
Gets all languages stored in this MultiString object.

> get_languages(): List[str]

- **returns**: List[str] - a list with language codes. 


#### length
Returns the number of translations stored in this MultiString object.

> length(): int

- **returns**: int - the number of translations.


#### put
Puts a new translation for the specified language.

> put(language: str, value: Any): Any

- **language**: str - a language two-symbol code.
- **value**: Any - a new translation for the specified language.
- **returns**: Any - TODO add description


#### remove
Removes translation for the specified language.

> remove(language: str)

- **language**: str - a language two-symbol code.

### Static methods

#### from_tuples
Creates a new MultiString object from language-translation pairs (tuples).

> `static` from_tuples(*tuples: Any): [MultiString](../multi_string)

- **tuples**: Any - an array that contains language-translation tuples.
- **returns**: [MultiString](../multi_string) - a MultiString Object.


#### from_tuples_array
Creates a new MultiString object from language-translation pairs (tuples) specified as array.

> `static` from_tuples_array(tuples: Sequence[Any]): [MultiString](../multi_string)

- **tuples**: Sequence[Any] - an array that contains language-translation tuples.
- **returns**: [MultiString](../multi_string) - a MultiString Object.


#### from_value
Creates a new MultiString object from a value that contains language-translation pairs.  
See [StringValueMap](../string_value_map)

> `static` from_value(value: Any): [MultiString](../multi_string)

- **value**: Any - the value to initialize MultiString.
- **returns**: [MultiString](../multi_string) - a MultiString object.

### Examples

```python
values = MultiString.from_tuples(
    "en", "Hello World!",
    "ru", "Привет мир!"
);
value1 = values.get('ru') # Result: "Привет мир!"
value2 = values.get('pt') # Result: "Hello World!"
```

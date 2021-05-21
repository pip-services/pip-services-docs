---
type: docs
title: "MultiString"
linkTitle: "MultiString"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
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

> `public` constructor(map: any = null)

- **map**: any - a map with language-text pairs.


### Instance methods

#### append
Appends a map with language-translation pairs.

> `public` append(map: any): void

- **map**: any - the map with language-translation pairs.


#### clear
Clears all translations from this MultiString object.

> `public` clear(): void


#### get
Gets a string translation by specified language.
When language is not found it defaults to English ('en').
When English is not found it takes the first value.

> `public` get(language: string): string 

- **language**: string - a language two-symbol code.
- **returns**: string - a translation for the specified language or default translation.


#### getLanguages
Gets all languages stored in this MultiString object.

> `public` getLanguages(): string[]

- **returns**: string[] - a list with language codes. 


#### length
Returns the number of translations stored in this MultiString object.

> `public` length(): number

- **returns**: number - the number of translations.


#### put
Puts a new translation for the specified language.

> `public` put(language: string, value: any): void

- **language**: string - a language two-symbol code.
- **value**: any - a new translation for the specified language.


#### remove
Removes translation for the specified language.

> `public` remove(language: string): void

- **language**: string - a language two-symbol code.


### Static methods

#### fromTuples
Creates a new MultiString object from language-translation pairs (tuples).

> `public static` fromTuples(...tuples: any[]): [MultiString](../multi_string)

- **tuples**: any[] - an array that contains language-translation tuples.
- **returns**: [MultiString](../multi_string) - a MultiString Object.


#### fromTuplesArray
Creates a new MultiString object from language-translation pairs (tuples) specified as array.

> `public static` fromTuplesArray(tuples: any[]): [MultiString](../multi_string)

- **tuples**: any[] - an array that contains language-translation tuples.
- **returns**: [MultiString](../multi_string) - a MultiString Object.


#### fromValue
Creates a new MultiString object from a value that contains language-translation pairs.  
See [StringValueMap](../string_value_map)

> `public static` fromValue(value: any): [MultiString](../multi_string)

- **value**: any - the value to initialize MultiString.
- **returns**: [MultiString](../multi_string) - a MultiString object.

### Examples

```typescript
let values = MultiString.fromTuples(
    "en", "Hello World!",
    "ru", "Привет мир!"
);
    
let value1 = values.get('ru'); // Result: "Привет мир!"
let value2 = values.get('pt'); // Result: "Hello World!"

```

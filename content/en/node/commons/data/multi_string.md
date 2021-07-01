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

- **map**: any - map with language-translation pairs.


#### clear
Clears all translations from this MultiString object.

> `public` clear(): void


#### get
Gets a string translation by specified language.
When the language is not found, it defaults to English ('en').
When English is not found, it takes the first value.

> `public` get(language: string): string 

- **language**: string - language's two-symbol code.
- **returns**: string - translation for the specified language or default translation.


#### getLanguages
Gets all languages stored in this MultiString object.

> `public` getLanguages(): string[]

- **returns**: string[] - list with language codes. 


#### length
Returns the number of translations stored in this MultiString object.

> `public` length(): number

- **returns**: number - number of translations.


#### put
Puts a new translation for the specified language.

> `public` put(language: string, value: any): void

- **language**: string - language's two-symbol code.
- **value**: any - new translation for the specified language.


#### remove
Removes a translation for the specified language.

> `public` remove(language: string): void

- **language**: string - language's two-symbol code.


### Static methods

#### fromTuples
Creates a new MultiString object from language-translation pairs (tuples).

> `public static` fromTuples(...tuples: any[]): [MultiString](../multi_string)

- **tuples**: any[] - array that contains language-translation tuples.
- **returns**: [MultiString](../multi_string) - MultiString Object.


#### fromTuplesArray
Creates a new MultiString object from language-translation pairs (tuples) specified as array.

> `public static` fromTuplesArray(tuples: any[]): [MultiString](../multi_string)

- **tuples**: any[] - array that contains language-translation tuples.
- **returns**: [MultiString](../multi_string) - MultiString Object.


#### fromValue
Creates a new MultiString object from a value that contains language-translation pairs.  
See [StringValueMap](../string_value_map)

> `public static` fromValue(value: any): [MultiString](../multi_string)

- **value**: any - value used to initialize a MultiString object.
- **returns**: [MultiString](../multi_string) - MultiString object.

### Examples

```typescript
let values = MultiString.fromTuples(
    "en", "Hello World!",
    "ru", "Привет мир!"
);
    
let value1 = values.get('ru'); // Result: "Привет мир!"
let value2 = values.get('pt'); // Result: "Hello World!"

```

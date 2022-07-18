---
type: docs
title: "MultiString"
linkTitle: "MultiString"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: > 
    Class used to create objects that contain string translations for multiple languages.
    
---

**Inherits**: Dictionary\<string, string\>

### Description

The MultiString class allows you to create objects that contain string translations for multiple languages.

**Important points**

- Language keys use two-letter codes like: *'en', 'sp', 'de', 'ru', 'fr', 'pr'*.
- When a translation for a specific language does not exists, it defaults to English ('en').
- When English does not exists, it falls back to the first defined language


### Constructors
Creates a new MultiString object and initializes it with values.

> `public` MultiString(Dictionary\<string, string\> map = null)

- **map**: Dictionary\<string, string\> - a map with language-text pairs.


### Instance methods

#### Append
Appends a map with language-translation pairs.

> `public` void Append(Dictionary\<string, string\> map)

- **map**: Dictionary\<string, string\> - map with language-translation pairs.


#### Clear
Clears all translations from this MultiString object.

> `public new` void Clear()


#### Get
Gets a string translation by a specified language.
When the language is not found, it defaults to English ('en').
When English is not found, it takes the first value.

> `public` string Get(string language)

- **language**: string - language's two-symbol code.
- **returns**: string - translation for the specified language or default translation.


#### GetLanguages
Gets all languages stored in this MultiString object.

> `public` List\<string\> GetLanguages()

- **returns**: List\<string\> - list with language codes. 


#### Length
Returns the number of translations stored in this MultiString object.

> `public` int Length()

- **returns**: int - number of translations.


#### Put
Puts a new translation for the specified language.

> `public` void Put(string language, dynamic value)

- **language**: string - language's two-symbol code.
- **value**: dynamic - new translation for the specified language.


#### Remove
Removes a translation for the specified language.

> `public new` void Remove(string language)

- **language**: string - language's two-symbol code.


### Static methods

#### FromTuples
Creates a new MultiString object from language-translation pairs (tuples).

> `public static` [MultiString]() FromTuples(params string[] tuples)

- **tuples**: params string[] - array that contains language-translation tuples.
- **returns**: [MultiString]() - MultiString Object.


#### FromTuplesArray
Creates a new MultiString object from language-translation pairs (tuples) specified as array.

> `public static` [MultiString]() FromTuplesArray(string[] tuples)

- **tuples**: string[] - array that contains language-translation tuples.
- **returns**: [MultiString]() - MultiString Object.


#### FromValue
Creates a new MultiString object from a value that contains language-translation pairs.  
See [StringValueMap](../string_value_map)

> `public static` [MultiString]() FromValue(Dictionary\<string, string\> value)

- **value**: Dictionary\<string, string\> - value used to initialize a MultiString object.
- **returns**: [MultiString]() - MultiString object.

### Examples

```cs
var values = MultiString.FromTuples(
   "en", "Hello World!",
   "ru", "Привет мир!"
);

var value1 = values.Get("ru"); // Result: "Привет мир!"
var value2 = values.Get("pt"); // Result: "Hello World!"


```

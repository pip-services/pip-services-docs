---
type: docs
title: "RandomText"
linkTitle: "RandomText"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: >
    Random generator for various text types such as names, addresses or phone numbers.
---

### Description

The RandomText class allows you to generate different types of random texts. The includedoptions are colors, names, nouns, adjectives, verbs, phrases, full names, words, phone numbers, email addresses, and texts.


### Static methods

#### Adjective
Generates a random adjective.
The result value is capitalized.

> `public static` string Adjective() 

- **returns**: string - random adjective.

#### Color
Generates a random color name.
The result value is capitalized.

> `public static` string Color()

- **returns**: string - random color name.

#### Email
Generates a random email address.

> `public static` string Email()

- **returns**: string - random email address.

#### Name
Generates a random person's name, which has the following structure:

**\<optional prefix\> \<first name\> \<second name\> \<optional suffix\>**

> `public static` string Name()

- **returns**: string - random name.


#### Phone
Generates a random phone number.
The phone number has the format: (XXX) XXX-YYYY

> `public static` string Phone()

- **returns**: string - random phone number.


#### Phrase
Generates a random phrase which consists of a few words separated by spaces. 
The first word is capitalized, the others are not.

> `public static` string Phrase(int size) 

- **size**: int - (optional) minimum string length.
- **returns**: string -  random phrase.


#### Phrase
Generates a random phrase which consists of a few words separated by spaces. 
The first word is capitalized, the others are not.

> `public static` string Phrase(int minSize, int maxSize)  

- **minSize**: int - (optional) minimum string length.
- **maxSize**: int -  maximum string length.
- **returns**: string -  random phrase.


#### Stuff
Generates a random noun. The result value is capitalized.

> `public static` string Stuff()

- **returns**: string - random noun.


#### Text
Generates a random text, consisting of first names, last names, colors, stuffs, adjectives, verbs, and punctuation marks.

> `public static` string Text(int size)

- **size**: int - size of text.
- **returns**: string - random text.


#### Text
Generates a random text, consisting of first names, last names, colors, stuffs, adjectives, verbs, and punctuation marks.

> `public static` string Text(int minSize, int maxSize)

- **minSize**: int - minimum amount of words to generate. Text will contain 'minSize' words if 'maxSize' is omitted.
- **maxSize**: int -  (optional) maximum amount of words to generate.
- **returns**: string - random text.


#### Verb
Generates a random verb.
The result value is capitalized.

> `public static` string Verb()

- **returns**: string - random verb.


#### Word
Generates a random word from available first names, last names, colors, stuffs, adjectives, or verbs.

> `public static` string Word()

- **returns**: string - random word.

#### Words
Generates a random word from available first names, last names, colors, stuffs, adjectives, or verbs.

> `public static` string Words(int min, int max)

- **min**: int - (optional) minimum number of words.
- **max**: int - maximum number of words.
- **returns**: string - random text.

### Examples

```cs
var value1 = RandomText.Name();      // Possible result: "Sergio"
var value2 = RandomText.Verb();      // Possible result: "Run"
var value3 = RandomText.Text(50);    // Possible result: "Run jorge. Red high scream?"

```

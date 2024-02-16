---
type: docs
title: "RandomText"
linkTitle: "RandomText"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-data-java"
description: >
    Random generator for various text types such as names, addresses or phone numbers.
---

### Description

The RandomText class allows you to generate different types of randomt texts. The options included are colors, names, nouns, adjectives, verbs, phrases, full names, words, phone numbers, email addresses, and texts.


### Static methods

#### adjective
Generates a random adjective.
The result value is capitalized.

> `public static` String adjective() 

- **returns**: String - random adjective.

#### color
Generates a random color name.
The result value is capitalized.

> `public static` String color()

- **returns**: String - random color name.

#### email
Generates a random email address.

> `public static` String email()

- **returns**: String - random email address.

#### fullName
Generates a random person's name, which has the following structure:

**\<optional prefix\> \<first name\> \<second name\> \<optional suffix\>**

> `public static` String fullName()

- **returns**: String - random name.


#### noun
Generates a random noun.
The result value is capitalized.

> `public static` String noun()

- **returns**: String - random noun.

#### phone
Generates a random phone number.
The phone number has the format: (XXX) XXX-YYYY

> `public static` String phone()

- **returns**: String - random phone number.


#### phrase
Generates a random phrase which consists of few words separated by spaces.
The first word is capitalized, others are not.

> `public static` String phrase(int minSize, int maxSize) 

- **minSize**: int - (optional) minimum string length.
- **maxSize**: int -  maximum string length.
- **returns**: String -  random phrase.

#### text
Generates a random text, consisting of first names, last names, colors, stuffs, adjectives, verbs, and punctuation marks.

> `public static` String text(int minSize, int maxSize)

- **minSize**: int - minimum amount of words to generate. The text will contain 'minSize' words if 'maxSize' is omitted.
- **maxSize**: int -  (optional) maximum amount of words to generate.
- **returns**: String -  random text.

#### verb
Generates a random verb.
The result value is capitalized.

> `public static` String verb()

- **returns**: String - random verb.


#### word
Generates a random word from available first names, last names, colors, stuffs, adjectives, or verbs.

> `public static` String word()

- **returns**: String - random word.

#### words
Generates a random word from available first names, last names, colors, stuffs, adjectives, or verbs.

> `public static` String words(int min, int max)

- **min**: int - (optional) minimum number of words.
- **max**: int - maximum number of words.
- **returns**: String - random text.

### Examples

```java
 {
  String value1 = RandomText.name();     // Possible result: "Sergio"
  String value2 = RandomText.verb();      // Possible result: "Run"
  String value3 = RandomText.Text(50);    // Possible result: "Run jorge. Red high scream?"
  }

```

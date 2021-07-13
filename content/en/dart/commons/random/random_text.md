---
type: docs
title: "RandomText"
linkTitle: "RandomText"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: >
    Random generator for various text types such as names, addresses or phone numbers.
---

### Description

The RandomText class allows you to generate different types of randomt texts. The options included are colors, names, nouns, adjectives, verbs, phrases, full names, words, phone numbers, email addresses, and texts.


### Static methods

#### adjective
Generates a random adjective.
The result value is capitalized.

> `static` String adjective() 

- **returns**: String - random adjective.

#### color
Generates a random color name.
The result value is capitalized.

> `static` String color()

- **returns**: String - random color name.

#### email
Generates a random email address.

> `static` String email()

- **returns**: String - random email address.

#### fullName
Generates a random person's name, which has the following structure:

**\<optional prefix\> \<first name\> \<second name\> \<optional suffix\>**

> `static` String fullName()

- **returns**: String - random name.


#### noun
Generates a random noun.
The result value is capitalized.

> `static` String noun()

- **returns**: String - random noun.

#### phone
Generates a random phone number.
The phone number has the format: (XXX) XXX-YYYY

> `static` String phone()

- **returns**: String - random phone number.


#### phrase
Generates a random phrase which consists of few words separated by spaces.
The first word is capitalized, others are not.

> `static` String phrase(int minLength, [int maxLength])

- **minLength**: int - (optional) minimum string length.
- **maxLength**: int -  maximum string length.
- **returns**: String -  random phrase.

#### text
Generates a random text, consisting of first names, last names, colors, stuffs, adjectives, verbs, and punctuation marks.

> `static` String text(int minLength, [int maxLength])

- **minLength**: int - minimum amount of words to generate. The text will contain 'minSize' words if 'maxSize' is omitted.
- **maxLength**: int -  (optional) maximum amount of words to generate.
- **returns**: String -  random text.

#### verb
Generates a random verb.
The result value is capitalized.

> `static` String verb()

- **returns**: String - random verb.


#### word
Generates a random word from available first names, last names, colors, stuffs, adjectives, or verbs.

> `static` String word()

- **returns**: String - random word.

#### words
Generates a random word from available first names, last names, colors, stuffs, adjectives, or verbs.

> `static` String words(int min, [int max])

- **min**: int - (optional) minimum number of words.
- **max**: int - maximum number of words.
- **returns**: String - random text.

### Examples

```dart
var value1 = RandomText.name();     // Possible result: 'Segio'
var value2 = RandomText.verb();      // Possible result: 'Run'
var value3 = RandomText.Text(50);    // Possible result: 'Run jorge. Red high scream?'

```

---
type: docs
title: "RandomText"
linkTitle: "RandomText"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: >
    Random generator for various text types such as names, addresses or phone numbers.
---

### Description

The RandomText class allows you to generate different types of randomt texts. The options included are colors, names, nouns, adjectives, verbs, phrases, full names, words, phone numbers, email addresses, and texts.


### Methods

#### Adjective
Generates a random adjective.
The result value is capitalized.

> (c *TRandomText) Adjective() string 

- **returns**: string - random adjective.

#### Color
Generates a random color name.
The result value is capitalized.

>  (c *TRandomText) Color() string

- **returns**: string - random color name.

#### Email
Generates a random email address.

> (c *TRandomText) Email() string

- **returns**: string - random email address.

#### FullName
Generates a random person's name, which has the following structure:

**\<optional prefix\> \<first name\> \<second name\> \<optional suffix\>**

> (c *TRandomText) FullName() string

- **returns**: string - random name.


#### Phone
Generates a random phone number.
The phone number has the format: (XXX) XXX-YYYY

> (c *TRandomText) Phone() string

- **returns**: string -  a random phone number.


#### Phrase
Generates a random phrase which consists of few words separated by spaces.
The first word is capitalized, others are not.

> (c *TRandomText) Phrase(min int, max int) string

- **minLength**: int - (optional) minimum string length.
- **maxLength**: int -  maximum string length.
- **returns**: string -  random phrase.

#### Text
Generates a random text, consisting of first names, last names, colors, stuffs, adjectives, verbs, and punctuation marks.

> (c *TRandomText) Text(min int, max int) string

- **minLength**: int - minimum amount of words to generate. The text will contain 'minSize' words if 'maxSize' is omitted.
- **maxLength**: int -  (optional) maximum amount of words to generate.
- **returns**: string -  random text.

#### Verb
Generates a random verb.
The result value is capitalized.

> (c *TRandomText) Verb() string

- **returns**: string - random verb.


#### Word
Generates a random word from available first names, last names, colors, stuffs, adjectives, or verbs.

> (c *TRandomText) Word() string

- **returns**: string - random word.

#### Words
Generates a random word from available first names, last names, colors, stuffs, adjectives, or verbs.

> (c *TRandomText) Words(min int, max int) string

- **min**: int - (optional) minimum number of words.
- **max**: int - maximum number of words.
- **returns**: string - random text.

### Examples

```go
value1 := RandomText.FullName();     	// Possible result: "Segio"
value2 := RandomText.Verb();      	// Possible result: "Run"
value3 := RandomText.Text(50);    	// Possible result: "Run jorge. Red high scream?"

```

---
type: docs
title: "Text"
linkTitle: "Text"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-data-go"
description: >
    Random generator for various text types such as names, addresses or phone numbers.
---

### Description

The Text class allows you to generate different types of randomt texts. The options included are colors, names, nouns, adjectives, verbs, phrases, full names, words, phone numbers, email addresses, and texts.


### Static methods

#### adjective
Generates a random adjective.
The result value is capitalized.

> `static` adjective(): str 

- **returns**: str - a random adjective.

#### color
Generates a random color name.
The result value is capitalized.

> `static` color(): str

- **returns**: str - a random color name.

#### email
Generates a random email address.

> `static` email(): str

- **returns**: str - a random email address.

#### full_name
Generates a random person's name, which has the following structure:

**\<optional prefix\> \<first name\> \<second name\> \<optional suffix\>**

> `static` full_name(): str

- **returns**: str - a random name.


#### noun
Generates a random noun.
The result value is capitalized.

> `static` noun(): str

- **returns**: str - a random noun.

#### phone
Generates a random phone number.
The phone number has the format: (XXX) XXX-YYYY

> `static` phone(): str

- **returns**: str -  a random phone number.


#### phrase
Generates a random phrase which consists of few words separated by spaces.
The first word is capitalized, others are not.

> `static` phrase(min_size: int, max_size: int = None): str 

- **min_size**: int - (optional) minimum string length.
- **max_size**: int -  maximum string length.
- **returns**: str -  a random phrase.

#### text
Generates a random text, consisting of first names, last names, colors, stuffs, adjectives, verbs, and punctuation marks.

> `static` text(min_size: int, max_size: int = None): str

- **min_size**: int - minimum amount of words to generate. Text will contain 'minSize' words if 'maxSize' is omitted.
- **max_size**: int -  (optional) maximum amount of words to generate.
- **returns**: str -  a random text.

#### verb
Generates a random verb.
The result value is capitalized.

> `static` verb(): str

- **returns**: str - a random verb.


#### word
Generates a random word from available first names, last names, colors, stuffs, adjectives, or verbs.

> `static` word(): str

- **returns**: str - a random word.

#### words
Generates a random word from available first names, last names, colors, stuffs, adjectives, or verbs.

> `static` words(min_size: int, max_size: int = None): str

- **min_size**: int - (optional) a minimum number of words.
- **max_size**: int - a maximum number of words.
- **returns**: str - a random text.

### Examples

```python
value1 = Text.name()      # Possible result: "Sergio"
value2 = Text.verb()      # Possible result: "Run"
value3 = Text.text(5,20)    # Possible result: "Due bela"
```

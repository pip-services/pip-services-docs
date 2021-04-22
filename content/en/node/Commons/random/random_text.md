---
type: docs
title: "RandomText"
linkTitle: "RandomText"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: >
    Random generator for various text values like names, addresses or phone numbers.
---

**Example:**

```typescript
let value1 = RandomText.name();     // Possible result: "Segio"
let value2 = RandomText.verb();      // Possible result: "Run"
let value3 = RandomText.Text(50);    // Possible result: "Run jorge. Red high scream?"

```


### Methods

#### adjective
Generates a random adjective.
The result value is capitalized.

> `public static` adjective(): string 

- **returns**: string - a random adjective.

#### color
Generates a random color name.
The result value is capitalized.

> `public static` color(): string

- **value**: string - a string to distort.
- **returns**: string - a random color name.

#### email
Generates a random email address.

> `public static` email(): string

- **returns**: string - a random email address.

#### fullName
Generates a random person's name which has the following structure
\<optional prefix\> \<first name\> \<second name\> \<optional suffix\>

> `public static` fullName(): string

- **returns**: string - a random name.


#### noun
Generates a random noun.
The result value is capitalized.

> `public static` noun(): string

- **returns**: string - a random noun.

#### phone
Generates a random phone number.
The phone number has the format: (XXX) XXX-YYYY

> `public static` phone(): string

- **returns**: string -  a random phone number.


#### phrase
Generates a random phrase which consists of few words separated by spaces.
The first word is capitalized, others are not.

> `public static` phrase(minLength: number, maxLength: number = null): string 

- **minLength**: number - (optional) minimum string length.
- **maxLength**: number = null -  maximum string length.
- **returns**: string -  a random phrase.

#### text
Generates a random text, consisting of first names, last names, colors, stuffs, adjectives, verbs, and punctuation marks.

> `public static` text(minLength: number, maxLength: number = null): string

- **minLength**: number - minimum amount of words to generate. Text will contain 'minSize' words if 'maxSize' is omitted.
- **maxLength**: number = null -  (optional) maximum amount of words to generate.
- **returns**: string -  a random text.

#### verb
Generates a random verb.
The result value is capitalized.

> `public static` verb(): string

- **returns**: string - a random verb.


#### word
Generates a random word from available first names, last names, colors, stuffs, adjectives, or verbs.

> `public static` word(): string

- **returns**: string - a random word.

#### words
Generates a random word from available first names, last names, colors, stuffs, adjectives, or verbs.

> `public static` words(min: number, max: number = null): string

- **min**: number - (optional) a minimum number of words.
- **max**: number = null - a maximum number of words.
- **returns**: string - a random text.
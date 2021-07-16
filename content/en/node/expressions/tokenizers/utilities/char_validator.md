---
type: docs
title: "CharValidator"
linkTitle: "CharValidator"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-expressions-nodex"
description: > 
    Validates characters that are processed by tokenizers.
---

### Description

The CharValidator class allows you to validate characters that are processed by tokenizers.

### Constructors
Default contructor to prevent creation of a class instance.

> `public` constructor()


### Fields

<span class="hide-title-link">

#### Eof
EOF
> `public static` **Eof**: number = 0xffff

#### Zero
Zero
> `public static` **Zero**: number = '0'.charCodeAt(0)

#### Nine
Nine
> `public static` **Nine**: number = '9'.charCodeAt(0)

</span>

### Static methods

#### isEof
Checks if a character is an EOF.

> `public static` isEof(value: number): boolean

- **value**: number - value to check
- **returns**: boolean - validation result


#### isEol
Checks if a character is an EOL.

> `public static` isEol(value: number): boolean

- **value**: number - value to check
- **returns**: boolean - validation result

#### isDigit
Checks if a character is a digit.

> `public static` isDigit(value: number): boolean

- **value**: number - value to check
- **returns**: boolean - validation result

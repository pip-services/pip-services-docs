---
type: docs
title: "CharValidator"
linkTitle: "CharValidator"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-expressions-dart"
description: > 
    Validates characters that are processed by tokenizers.
---

### Description

The CharValidator class allows you to validate characters that are processed by tokenizers.

### Constructors

Creates a new instance of this class.

> `private` constructor()


### Fields

<span class="hide-title-link">

#### Eof
EOF
> `static` **Eof**: int = 0xffff

#### Zero
Zero
> `static` **Zero**: int = '0'.codeUnitAt(0)

#### Nine
Nine
> `static` **Nine**: int = '9'.codeUnitAt(0)

</span>

### Static methods

#### isEof
Checks if a character is an EOF.

> `static` bool isEof(int value)

- **value**: int - value to check
- **returns**: bool - validation result


#### isEol
Checks if a character is an EOL.

> `static` bool isEol(int value)

- **value**: int - value to check
- **returns**: bool - validation result

#### isDigit
Checks if a character is a digit.

> `static` bool isDigit(int value)

- **value**: int - value to check
- **returns**: bool - validation result

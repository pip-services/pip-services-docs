---
type: docs
title: "CharValidator"
linkTitle: "CharValidator"
gitUrl: "https://github.com/pip-services3-python/pip-services3-expressions-python"
description: > 
    Validates characters that are processed by tokenizers.
---

### Description

The CharValidator class allows you to validate characters that are processed by tokenizers.

### Constructors
Default contructor to prevent creation of a class instance.

> CharValidator()


### Fields

<span class="hide-title-link">

#### Eof
EOF
> **Eof**: int = 0xffff

#### Zero
Zero
> **Zero**: int = ord('0')

#### Nine
Nine
> **Nine**: int = ord('9')

</span>

### Static methods

#### is_eof
Checks if a character is an EOF.

> is_eof(value: int): bool

- **value**: int - value to check
- **returns**: bool - validation result


#### is_eol
Checks if a character is an EOL.

> is_eol(value: int): bool

- **value**: int - value to check
- **returns**: bool - validation result

#### is_digit
Checks if a character is a digit.

> is_digit(value: int): bool

- **value**: int - value to check
- **returns**: bool - validation result

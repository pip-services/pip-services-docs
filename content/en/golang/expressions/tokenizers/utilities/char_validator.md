---
type: docs
title: "CharValidator"
linkTitle: "CharValidator"
gitUrl: "https://github.com/pip-services3-go/pip-services3-expressions-go"
description: > 
    Validates characters that are processed by tokenizers.
---

### Description

The CharValidator class allows you to validate characters that are processed by tokenizers.


### Fields

<span class="hide-title-link">

#### Eof
EOF
> `const` **Eof**: rune = -1

</span>

### Static methods

#### IsEof
Checks if a character is an EOF.

> (c *TCharValidator) IsEof(value rune) bool

- **value**: rune - value to check
- **returns**: bool - validation result


#### IsEol
Checks if a character is an EOL.

> (c *TCharValidator) IsEol(value rune) bool

- **value**: rune - value to check
- **returns**: bool - validation result

#### IsDigit
Checks if a character is a digit.

> (c *TCharValidator) IsDigit(value rune) bool

- **value**: rune - value to check
- **returns**: bool - validation result
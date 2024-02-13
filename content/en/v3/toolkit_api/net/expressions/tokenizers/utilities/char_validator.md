---
type: docs
title: "CharValidator"
linkTitle: "CharValidator"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-expressions-dotnet"
description: > 
    Validates characters that are processed by tokenizers.
---

### Description

The CharValidator class allows you to validate characters that are processed by tokenizers.

### Constructors
Default contructor to prevent the creation of a class instance.

> `private` CharValidator()


### Fields

<span class="hide-title-link">

#### Eof
EOF
> `public const` **Eof**: char = '\xffff'

</span>

### Static methods

#### IsEof
Checks if a character is an EOF.

> `public static` bool IsEof(char value)

- **value**: char - value to check
- **returns**: bool - validation result


#### IsEol
Checks if a character is an EOL.

> `public static` bool IsEol(char value)

- **value**: char - value to check
- **returns**: bool - validation result

#### IsDigit
Checks if a character is a digit.

> `public static` bool IsDigit(char value)

- **value**: char - value to check
- **returns**: bool - validation result

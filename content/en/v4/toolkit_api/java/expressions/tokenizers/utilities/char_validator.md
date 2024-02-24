---
type: docs
title: "CharValidator"
linkTitle: "CharValidator"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-expressions-java"
description: > 
    Validates characters that are processed by tokenizers.
---

### Description

The CharValidator class allows you to validate characters that are processed by tokenizers.

### Fields

<span class="hide-title-link">

#### Eof
EOF
> `public static final` int **EOF** = 0xffff
#### Zero
Zero
> `public static final` int **ZERO** = "0".codePointAt(0)

#### Nine
Nine
> `public static final` int **NINE** = "9".codePointAt(0)

</span>

### Static methods

#### isEof
Checks if a character is an EOF.

> `public static` boolean isEof(int value)

- **value**: int - value to check
- **returns**: boolean - validation result


#### isEol
Checks if a character is an EOL.

> `public static` boolean isEol(int value)

- **value**: int - value to check
- **returns**: boolean - validation result

#### isDigit
Checks if a character is a digit.

> `public static` boolean isDigit(int value)

- **value**: int - value to check
- **returns**: boolean - validation result

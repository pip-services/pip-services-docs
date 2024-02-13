---
type: docs
title: "String"
linkTitle: "String"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-data-go"
description: >
    Random generator for string values.
---

### Description

The class String allows you to generate random strings.

### Static methods

#### distort
Distorts a string by randomly replacing characters in it.

> `static` distort(value: str): str

- **value**: str - a string to distort.
- **returns**: str - a distored string.

#### next_alpha_char
Generates random alpha characted [A-Za-z]

> `static` next_alpha_char(): str

- **returns**: str - a random characted.

#### next_string
Generates a random string, consisting of upper and lower case letters (of the English alphabet), 
digits (0-9), and symbols ("_,.:-/.[].{},#-!,$=%.+^.&*-() ").

> `static` next_string(min_size: int, min_size: int): str

- **min_size**: int - (optional) minimum string length.
- **min_size**: int - maximum string length.
- **returns**: str - a random string.

#### pick
Picks a random string from an array of string.

> `static` pick(values: List[str]): str

- **values**: List[str] - Picks a random character from an array of string.
- **returns**: str - a randomly picked char.

#### pick_char
Picks a random character from a string.

> `static` pick_char(values: str): str

- **values**: str - picks a random character from a string.
- **returns**: str - a randomly picked char.

### Examples

```python
value1 = String.pick(["A","B","C"]) # Possible result: "A"
```

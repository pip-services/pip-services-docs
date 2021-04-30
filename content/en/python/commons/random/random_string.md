---
type: docs
title: "RandomString"
linkTitle: "RandomString"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: >
    Random generator for string values.
---

**Example:**

```python
value1 = RandomString.pickChar("ABC")     # Possible result: "C"
value2 = RandomString.pick(["A","B","C"]) # Possible result: "gBW"

```


### Methods

#### pick_char
Picks a random character from a string.

> `static` pick_char(values: str): str

- **values**: str - a string to pick a char from
- **returns**: str - a randomly picked char.

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
---
type: docs
title: "RandomBoolean"
linkTitle: "RandomBoolean"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: >
    Random generator for boolean values.
---

### Description

The RandomBoolean class allows you to generate random boolean values.

### Static methods

#### chance
Calculates "chance" out of "max chances".
Example: 1 chance out of 3 chances (or 33.3%)

> `static` chance(chance: float, maxChances: float): bool

- **chance**: float - a chance proportional to maxChances.
- **maxChances**: float - a maximum number of chances
- **returns**: bool - true or false for settled chance

#### next_boolean
Generates a random boolean value.

> `static` next_boolean(): bool

- **returns**: bool - a random boolean.

### Examples

```python
value1 = RandomBoolean.next_boolean()   # Possible result: True
value2 = RandomBoolean.chance(1,3)      # Possible result: False

```

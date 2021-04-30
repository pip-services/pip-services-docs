---
type: docs
title: "RandomBoolean"
linkTitle: "RandomBoolean"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: >
    Random generator for boolean values.
---

**Example:**

```python
value1 = RandomBoolean.next_boolean()   # Possible result: true
value2 = RandomBoolean.chance(1,3)      # Possible result: false

```


### Methods

#### chance
Calculates "chance" out of "max chances".
Example: 1 chance out of 3 chances (or 33.3%)

> `static` chance(chance: int, maxChances: int): bool

- **chance**: int - a chance proportional to maxChances.
- **maxChances**: int - a maximum number of chances
- **returns**: bool - TODO add description

#### next_boolean
Generates a random boolean value.

> `static` next_boolean(): bool

- **returns**: bool - a random boolean.
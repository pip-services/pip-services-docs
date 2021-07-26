---
type: docs
title: "CharReferenceMap"
linkTitle: "CharReferenceMap"
gitUrl: "https://github.com/pip-services3-python/pip-services3-expressions-python"
description: > 
    This class keeps references associated with specific characters
---

### Description

The CharReferenceMap class allows you to keep references associated with specific characters.

### Constructors
Creates a new instance of this class.

> CharReferenceMap()


### Instance methods

#### add_default_interval
Adds a default interval.

> add_default_interval(reference: Any)

- **reference**: Any - reference


#### add_interval
Adds an interval.

> add_interval(start: int, end: int, reference: Any)

- **start**: int - start of the interval
- **end**: int - end of the interval
- **reference**: Any - reference


#### clear
Clears up the intervals.

> clear()


#### lookup
Looks up for a specified symbol.

> lookup(symbol: int): Any

- **symbol**: int - symbol
- **returns**: Any - reference

---
type: docs
title: "CharReferenceInterval"
linkTitle: "CharReferenceInterval"
gitUrl: "https://github.com/pip-services3-python/pip-services3-expressions-python"
description: > 
    Represents a character interval that keeps a reference.
    
---

### Description

The CharReferenceInterval allows you to represent a character interval that keeps a reference.

**Important points**

- This class is internal and used by [CharReferenceMap](../char_reference_map).

### Constructors
Creates a new instance of the CharReferenceInterval class.

> CharReferenceInterval(start: int, end: int, reference: Any)

- **start**: int - start of the interval
- **end**: int - end of the interval
- **reference**: Any - reference

### Properties

#### end
End of the interval

> end(): int

- **returns**: int - end of the interval

#### reference
Reference

> reference(): Any

- **returns**: Any - reference


#### start
Start of the interval

> start(): int

- **returns**: int - start of the interval


### Instance methods

#### in_range
Determines if a symbol is within a range

> in_range(symbol: int): bool

- **symbol**: int - symbol
- **returns**: bool - true if it is within the range and false otherwise.

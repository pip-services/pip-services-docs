---
type: docs
title: "CharReferenceInterval<T>"
linkTitle: "CharReferenceInterval"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-expressions-dart"
description: > 
    Represents a character interval that keeps a reference.
    
---

### Description

The CharReferenceInterval allows you to represent a character interval that keeps a reference.

**Important points**

- This class is internal and used by [CharReferenceMap](../char_reference_map).

### Constructors
Creates a new instance of the CharReferenceInterval class.

> CharReferenceInterval(int start, int end, T reference)

- **start**: int - start of the interval
- **end**: int - end of the interval
- **reference**: T - reference

### Properties

#### end
End of the interval

> int get end

- **returns**: int - end of the interval

#### reference
Reference

> T get reference

- **returns**: T - reference


#### start
Start of the interval

> int get start

- **returns**: int - start of the interval


### Instance methods

#### inRange
Determines if a symbol is within a range

> bool inRange(int symbol)

- **symbol**: int - symbol
- **returns**: bool - true if it is within the range and false otherwise.

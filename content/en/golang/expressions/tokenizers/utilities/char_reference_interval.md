---
type: docs
title: "CharReferenceInterval"
linkTitle: "CharReferenceInterval"
gitUrl: "https://github.com/pip-services3-go/pip-services3-expressions-go"
description: > 
    Represents a character interval that keeps a reference.
    
---

### Description

The CharReferenceInterval allows you to represent a character interval that keeps a reference.

**Important points**

- This class is internal and used by [CharReferenceMap](../char_reference_map).

### Constructors

#### NewCharReferenceInterval
Creates a new instance of the CharReferenceInterval class.

> NewCharReferenceInterval(start rune, end rune, reference interface{}) [*CharReferenceInterval]()

- **start**: rune - start of the interval
- **end**: rune - end of the interval
- **reference**: interface{} - reference

### Properties

#### End
End of the interval

> (c [*CharReferenceInterval]()) End() rune

- **returns**: rune - end of the interval

#### Reference
Reference

> (c [*CharReferenceInterval]()) Reference() interface{}

- **returns**: interface{} - reference


#### Start
Start of the interval

> (c [*CharReferenceInterval]()) Start() rune

- **returns**: rune - start of the interval


### Methods

#### InRange
Determines if a symbol is within a range

> (c [*CharReferenceInterval]()) InRange(symbol rune) bool

- **symbol**: rune - symbol
- **returns**: bool - true if it is within the range and false otherwise.

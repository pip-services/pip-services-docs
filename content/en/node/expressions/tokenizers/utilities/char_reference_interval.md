---
type: docs
title: "CharReferenceInterval<T>"
linkTitle: "CharReferenceInterval"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-expressions-nodex"
description: > 
    Represents a character interval that keeps a reference.
    
---

### Description

The CharReferenceInterval allows you to represent a character interval that keeps a reference.
Important points

- This class is internal and used by [CharReferenceMap](../char_reference_map).

### Constructors
Creates a new instance of the CharReferenceInterval class.

> `public` constructor(start: number, end: number, reference: T)

- **start**: number - start of the interval
- **end**: number - end of the interval
- **reference**: T - reference

### Properties

#### end
End of the interval

> `public` end(): number

- **returns**: number - end of the interval

#### reference
Reference

> `public` reference(): T

- **returns**: T - reference


#### start
Start of the interval

> `public` start(): number

- **returns**: number - start of the interval


### Instance methods

#### inRange
Determines if a symbol is within a range

> `public` inRange(symbol: number): boolean

- **symbol**: number - symbol
- **returns**: boolean - true if it is within the range and false otherwise.

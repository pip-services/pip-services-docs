---
type: docs
title: "CharReferenceInterval<T>"
linkTitle: "CharReferenceInterval"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-expressions-dotnet"
description: > 
    Represents a character interval that keeps a reference.
    
---

### Description

The CharReferenceInterval allows you to represent a character interval that keeps a reference.

**Important points**

- This class is internal and used by [CharReferenceMap](../char_reference_map).

### Constructors
Creates a new instance of the CharReferenceInterval class.

> `public` CharReferenceInterval(char start, char end, T reference)

- **start**: char - start of the interval
- **end**: char - end of the interval
- **reference**: T - reference

### Properties

#### End
End of the interval

> `public` char End { get; }

#### Reference
Reference

> `public` T Reference { get; }


#### Start
Start of the interval

> `public` char Start { get; }


### Instance methods

#### InRange
Determines if a symbol is within a range

> `public` bool InRange(char symbol)

- **symbol**: char - symbol
- **returns**: bool - true if it is within the range and false otherwise.

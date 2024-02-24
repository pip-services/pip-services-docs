---
type: docs
title: "CharReferenceInterval<T>"
linkTitle: "CharReferenceInterval"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-expressions-java"
description: > 
    Represents a character interval that keeps a reference.
    
---

### Description

The CharReferenceInterval allows you to represent a character interval that keeps a reference.

**Important points**

- This class is internal and used by [CharReferenceMap](../char_reference_map).

### Constructors
Creates a new instance of the CharReferenceInterval class.

> `public` CharReferenceInterval(int start, int end, T reference) throws Exception

- **start**: int - start of the interval
- **end**: int - end of the interval
- **reference**: T - reference

### Properties

#### end
End of the interval

> `private final` int _start

#### reference
Reference

> `private final` T _reference

#### start
Start of the interval

> `private final` int _start


### Instance methods
#### getStart
Gets the start.

> `public` int getStart()
- **returns**: int - start
  
#### getEnd
Gets the end.

> `public` int getEnd()
- **symbol**: int - end
  
#### getReference
Gets the reference

> `public` T getReference()
- **symbol**: int - reference
  
#### inRange
Determines if a symbol is within a range

> `public` boolean inRange(int symbol)

- **symbol**: int - symbol
- **returns**: boolean - true if it is within the range and false otherwise.

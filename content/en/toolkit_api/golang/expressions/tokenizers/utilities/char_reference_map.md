---
type: docs
title: "CharReferenceMap"
linkTitle: "CharReferenceMap"
gitUrl: "https://github.com/pip-services3-go/pip-services3-expressions-go"
description: > 
    This class keeps references associated with specific characters
---

### Description

The CharReferenceMap class allows you to keep references associated with specific characters.

### Constructors

#### NewCharReferenceMap
Creates a new instance of this class.

> NewCharReferenceMap() [*CharReferenceMap]()


### Methods

#### AddDefaultInterval
Adds a default interval.

> (c [*CharReferenceMap]()) AddDefaultInterval(reference interface{})

- **reference**: interface{} - reference


#### AddInterval
Adds an interval.

> (c [*CharReferenceMap]()) AddInterval(start rune, end rune, reference interface{})

- **start**: rune - start of the interval
- **end**: rune - end of the interval
- **reference**: interface{} - reference


#### Clear
Clears up the intervals.

> (c [*CharReferenceMap]()) Clear()


#### Lookup
Looks up for a specified symbol.

> (c [*CharReferenceMap]()) Lookup(symbol rune) interface{}

- **symbol**: rune - symbol
- **returns**: interface{} - reference

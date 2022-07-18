---
type: docs
title: "CharReferenceMap<T>"
linkTitle: "CharReferenceMap"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-expressions-dotnet"
description: > 
    This class keeps references associated with specific characters
---

### Description

The CharReferenceMap class allows you to keep references associated with specific characters.

### Constructors
Creates a new instance of this class.

> `public` CharReferenceMap()


### Instance methods

#### AddDefaultInterval
Adds a default interval.

> `public` void AddDefaultInterval(T reference)

- **reference**: T - reference


#### AddInterval
Adds an interval.

> `public` void AddInterval(char start, char end, T reference)

- **start**: char - start of the interval
- **end**: char - end of the interval
- **reference**: T - reference


#### Clear
Clears up the intervals.

> `public` void Clear()


#### Lookup
Looks up for a specified symbol.

> `public` T Lookup(char symbol)

- **symbol**: char - symbol
- **returns**: T - reference

---
type: docs
title: "CharReferenceMap<T>"
linkTitle: "CharReferenceMap"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-expressions-nodex"
description: > 
    This class keeps references associated with specific characters
---

### Description

The CharReferenceMap class allows you to keep references associated with specific characters.

### Constructors
Creates a new instance of this class.

> `public` constructor()


### Instance methods

#### addDefaultInterval
Adds a default interval.

> `public` addDefaultInterval(reference: T): void

- **reference**: T - reference


#### addInterval
Adds an interval.

> `public` addInterval(start: number, end: number, reference: T)

- **start**: number - start of the interval
- **end**: number - end of the interval
- **reference**: T - reference


#### clear
Clears up the intervals.

> `public` clear(): void


#### lookup
Looks up for a specified symbol.

> `public` lookup(symbol: number): T

- **symbol**: number - symbol
- **returns**: T - reference

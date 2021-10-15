---
type: docs
title: "CharReferenceMap<T>"
linkTitle: "CharReferenceMap"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-expressions-dart"
description: > 
    This class keeps references associated with specific characters
---

### Description

The CharReferenceMap class allows you to keep references associated with specific characters.

### Constructors
Creates a new instance of this class.

> CharReferenceMap()


### Instance methods

#### addDefaultInterval
Adds a default interval.

> void addDefaultInterval(T reference)

- **reference**: T - reference


#### addInterval
Adds an interval.

> void addInterval(int start, int end, T reference)

- **start**: int - start of the interval
- **end**: int - end of the interval
- **reference**: T - reference


#### clear
Clears up the intervals.

> void clear()


#### lookup
Looks up for a specified symbol.

> T? lookup(int symbol)

- **symbol**: int - symbol
- **returns**: T? - reference

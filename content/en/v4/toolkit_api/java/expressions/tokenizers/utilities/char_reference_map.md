---
type: docs
title: "CharReferenceMap<T>"
linkTitle: "CharReferenceMap"
gitUrl: "https:/github.com/pip-services4/pip-services4-java/tree/main/pip-services4-expressions-java"
description: > 
    This class keeps references associated with specific characters
---

### Description

The CharReferenceMap class allows you to keep references associated with specific characters.

### Constructors
Creates a new instance of this class.

> `public` CharReferenceMap()


### Instance methods

#### addDefaultInterval
Adds a default interval.

> `public` void addDefaultInterval(T reference) throws Exception

- **reference**: T - reference


#### addInterval
Adds an interval.

> `public` void addInterval(int start, int end, T reference) throws Exception

- **start**: int - start of the interval
- **end**: int - end of the interval
- **reference**: T - reference

#### clear
Clears up the intervals.

> `public` void clear()


#### lookup
Looks up for a specified symbol.

> `public` T lookup(int symbol)

- **symbol**: int - symbol
- **returns**: T - reference

---
type: docs
title: "ICachedCountersOverrides"
linkTitle: "ICachedCountersOverrides"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-components-gox"
description: >
    Interface used to define a save method for counters.
---

### Description

the ICachedCountersOverrides provides a save method for counters.

### Methods

#### Save
Save method for counters.

> Save(ctx context.Context, counters [][*Counter](../counter)) error

- **counters**: [][*Counter](../counter) - counters
- **returns**: error - error if counters not saved

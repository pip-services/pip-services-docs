---
type: docs
title: "CounterType"
linkTitle: "CounterType"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-observability-go"
description: >
    Counter type enumeration containing the types of counters that measure different types of metrics.
---

### Description

The CounterType class enumerates the types of counters that measure different types of metrics.

### Enumeration members

- **Interval** = 0 - Counters that measure execution time intervals
- **LastValue** = 1 - Counters that keeps the latest measured value
- **Statistics** = 2 - Counters that measure min/average/max statistics
- **Timestamp** = 3 - Counter that record timestamps
- **Increment** = 4 - Counter that increment counters

### Methods

#### ToString
Converts counter to string.

> (c [CounterType]()) ToString() string

- **returns**: string - converted string counter.

#### UnmarshalJSON
Unmarshall json bytes into CounterType.

> (c [*CounterType]()) UnmarshalJSON(data []byte) (err error)

- **data**: []byte - json data bytes.
- **err**: error - error unmarshall.

#### MarshalJSON
Marshal CounterType to json.

> (c [*CounterType]()) MarshalJSON() ([]byte, error)

- **data**: ([]byte, error) - json data bytes and error marshall.

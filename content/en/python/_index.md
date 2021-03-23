---
type: docs
title: "Python"
linkTitle: "Python"
weight: 20
<!-- menu:
  main:
    weight: 20 -->
---

### [pip-services3-commons-python](pip-services3-commons)

The Commons module provides portable abstractions and patterns that can be used to implement non-trivial business logic in applications and services. The code provides a reasonably thin abstraction layer over most fundamental functions and delivers symmetric implementation that can be quickly ported between different platforms.

---

### [pip-services3-components-python]()

The Components module contains standard component definitions that can be used to build applications and services.

---

### [pip-services3-container-python]()

The Container module provides a light-weight container that can be embedded inside a service or application, or can be run by itself, as a system process, for example. Container configuration serves as a recipe for instantiating and configuring components inside the container.
The default container factory provides generic functionality on-demand, such as logging and performance monitoring.

---

### [pip-services3-data-python]()

The data module contains a set of basic primitives for working with and storing data. All other data modules are based on it.

---

### [pip-services3-rpc-python]()

The rpc module provides the synchronous communication using local calls or the HTTP(S) protocol. It contains both server and client side implementations.

---

### [pip-services3-messaging-python]()

The Messaging module contains a set of interfaces and classes for working with message queues, as well as an in-memory message queue implementation. 

---

### [pip-services3-mongodb-python]()

The MongoDB module simplifies how we work with Mongo databases and contains everything you need to start working with MongoDB.

---

### [pip-services3-couchbase-python]()

The Couchbase module contains a set of components for the operation of the Couchbase database.

---

### [pip-services3-memcached-python]()

The Memcached module contains the following components: MemcachedLock and MemcachedCache for working with locks and cache on the Memcached server.
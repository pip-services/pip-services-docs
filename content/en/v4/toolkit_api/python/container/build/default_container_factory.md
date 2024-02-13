---
type: docs
title: "DefaultContainerFactory"
linkTitle: "DefaultContainerFactory"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-container-python"
description: >
    Creates default container components (loggers, counters, caches, locks, etc.) by their descriptors.
---

**Implements:** [CompositeFactory](../../../components/build/composite_factory)


### Description

The DefaultContainerFactory class allows you to create factories used to create default container components by their descriptors. The factories included are:

1. [DefaultContextFactory](../../../components/context/default_context_factory)
2. [DefaultLoggerFactory](../../../observability/log/default_logger_factory)
3. [DefaultCountersFactory](../../../observability/count/default_counters_factory)
4. [DefaultConfigReaderFactory](../../../config/config/default_config_reader_factory)
5. [DefaultCredentialStoreFactory](../../../config/auth/default_credential_store_factory)
6. [DefaultDiscoveryFactory](../../../logic/build/default_logic_factory)
7. [DefaultTestFactory](../../../container/test/default_test_factory)
8. [DefaultTracerFactory](../../../observability/trace/default_tracer_factory) 

### Constructors
Creates a new instance of the factory and sets nested factories.

> DefaultContainerFactory(*factories: [IFactory](../../../components/build/ifactory))

- **factories**: [IFactory](../../../components/build/ifactory) - list of nested factories


### See also
- #### [Factory](../../../components/build/factory)



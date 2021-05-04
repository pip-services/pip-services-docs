---
type: docs
title: "DefaultContainerFactory"
linkTitle: "DefaultContainerFactory"
gitUrl: "https://github.com/pip-services3-python/pip-services3-container-python"
description: >
    Creates default container components (loggers, counters, caches, locks, etc.) by their descriptors.
---

**Implements:** [CompositeFactory](../../../components/build/composite_factory)

See also [Factory](../../../components/build/factory), [DefaultInfoFactory](../../../components/info/default_info_factory),
[DefaultLoggerFactory](../../../components/log/default_logger_factory), 
[DefaultCountersFactory](../../../components/count/default_counters_factory),
[DefaultConfigReaderFactory](../../../components/config/default_config_reader_factory),
[DefaultCacheFactory](../../../components/cache/default_cache_factory),
[DefaultCredentialStoreFactory](../../../components/auth/default_credential_store_factory),
[DefaultDiscoveryFactory](../../../components/connect/default_discovery_factory),
[DefaultTestFactory](../../../components/test/default_test_factory)


### Constructors
Create a new instance of the factory and sets nested factories.

> DefaultContainerFactory(*factories: [IFactory](../../../components/build/ifactory))

- **factories**: [IFactory](../../../components/build/ifactory) - a list of nested factories


### See also
- #### [Factory](../../../components/build/factory)
- #### [DefaultInfoFactory](../../../components/info/default_info_factory)
- #### [DefaultLoggerFactory](../../../components/log/default_logger_factory)
- #### [DefaultCountersFactory](../../../components/count/default_counters_factory)
- #### [DefaultConfigReaderFactory](../../../components/config/default_config_reader_factory)
- #### [DefaultCacheFactory](../../../components/cache/default_cache_factory)
- #### [DefaultCredentialStoreFactory](../../../components/auth/default_credential_store_factory)
- #### [DefaultDiscoveryFactory](../../../components/connect/default_discovery_factory)
- #### [DefaultTestFactory](../../../components/test/default_test_factory)

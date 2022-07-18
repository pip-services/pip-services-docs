---
type: docs
title: "ContainerReferences"
linkTitle: "ContainerReferences"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-container-nodex"
description: >
    Container's managed references that can be created from container configuration.
---

**Extends:** [ManagedReferences](../managed_references)

### Description

The ContainerReferences class allows you to create container's managed references that can be created from a container configuration.

### Instance methods

#### putFromConfig
Puts components into the references from the container's configuration.

Throws [CreateException](../../../components/build/create_exception) when one of component cannot be created.

> `public` putFromConfig(config: [ContainerConfig](../../config/container_config)): void
- **config**: [ContainerConfig](../../config/container_config) - container's configuration with information of the components to be added.


### See also
- #### [ManagedReferences](../managed_references)

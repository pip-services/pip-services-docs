---
type: docs
title: "ContainerReferences"
linkTitle: "ContainerReferences"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-container-java"
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

> `public` void putFromConfig([ContainerConfig](../../config/container_config) config) throws ReferenceException
- **config**: [ContainerConfig](../../config/container_config) - container's configuration with information of the components to be added.


### See also
- #### [ManagedReferences](../managed_references)

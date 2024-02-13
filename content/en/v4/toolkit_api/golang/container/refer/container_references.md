---
type: docs
title: "ContainerReferences"
linkTitle: "ContainerReferences"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-container-go"
description: >
    Container's managed references that can be created from container configuration.
---

**Implements:** [ManagedReferences](../managed_references)

### Description

The ContainerReferences class allows you to create container's managed references that can be created from a container configuration.

### Constructors

#### NewContainerReferences
Creates a new instance of the references

> NewContainerReferences() [*ContainerReferences]()

### Methods

#### PutFromConfig
Puts components into the references from the container's configuration.

Throws [CreateError](../../../components/build/create_error) when one of component cannot be created.

> (c [*ContainerReferences]()) PutFromConfig(ctx context.Context, config [config.ContainerConfig](../../config/container_config)) error
- **ctx**: context.Context - operation context.
- **config**: [config.ContainerConfig](../../config/container_config) - container's configuration with information of the components to be added.
- **returns**: error - returns error if not put


### See also
- #### [ManagedReferences](../managed_references)


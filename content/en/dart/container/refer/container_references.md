---
type: docs
title: "ContainerReferences"
linkTitle: "ContainerReferences"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-container-dart"
description: >
    Container's managed references that can be created from container configuration.
---

**Extends:** [ManagedReferences](../managed_references)

### Description

The ContainerReferences class allows you to create container's managed references that can be created from a container configuration.

### Constructors
Creates a new instance of ContainerReferences.

> ContainerReferences(List tuples)

- **tuples**: List - tuples where odd values are component locators (descriptors) and even values are component references

### Instance methods

#### putFromConfig
Puts components into the references from the container's configuration.

Throws [CreateException](../../../components/build/create_exception) when one of component cannot be created.

> void putFromConfig([ContainerConfig](../../config/container_config) config)
- **config**: [ContainerConfig](../../config/container_config) - container's configuration with information of the components to be added.


### See also
- #### [ManagedReferences](../managed_references)

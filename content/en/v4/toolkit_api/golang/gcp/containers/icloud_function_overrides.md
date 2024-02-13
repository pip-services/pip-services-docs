---
type: docs
title: "ICloudFunctionOverrides"
linkTitle: "ICloudFunctionOverrides"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-gcp-go"
description: >
    Interface to perform on-demand registrations.
---

### Description

The ICloudFunctionOverrides interface is used to perform on-demand registrations.

### Methods

#### Register
Performs the required registration steps.

> Register()

#### SetReferences
Sets references to dependent components.

> (c [*AzureFunctionClient]()) SetReferences(ctx context.Context, references [IReferences](../../../components/refer/ireferences))

- **ctx**: context.Context - operation context.
- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component dependencies.


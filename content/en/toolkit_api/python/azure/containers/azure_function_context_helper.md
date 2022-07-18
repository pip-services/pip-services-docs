---
type: docs
title: "AzureFunctionContextHelper"
linkTitle: "AzureFunctionContextHelper"
gitUrl: "https://github.com/pip-services3-python/pip-services3-azure-python"
description: >
    Contains methods used to get correlationIds, commands and bodies from the Azure Function context.
---

### Description

The AzureFunctionContextHelper class contains methods used to get correlationIds, commands and bodies from the Azure Function context.


### Instance methods

#### get_correlation_id
Returns a correlationId from the Azure Function context.

> `staticmethod` get_correlation_id(context: [HttpRequest](https://docs.microsoft.com/en-us/python/api/azure-functions/azure.functions.httprequest?view=azure-python)): str:

- **context**: [HttpRequest](https://docs.microsoft.com/en-us/python/api/azure-functions/azure.functions.httprequest?view=azure-python) - Azure Function context.
- **returns**: str - returned correlationId from context.

#### get_command
Returns a command from the Azure Function context.

> `staticmethod` get_command(context: [HttpRequest](https://docs.microsoft.com/en-us/python/api/azure-functions/azure.functions.httprequest?view=azure-python)): str

- **context**: [HttpRequest](https://docs.microsoft.com/en-us/python/api/azure-functions/azure.functions.httprequest?view=azure-python) - Azure Function context.
- **returns**: str - returned command from context.

#### get_parameters
Returns a body from the Azure Function context http request.

> `staticmethod` get_parameters(context: [HttpRequest](https://docs.microsoft.com/en-us/python/api/azure-functions/azure.functions.httprequest?view=azure-python)): [Parameters](../../../commons/run/parameters)

- **context**: [HttpRequest](https://docs.microsoft.com/en-us/python/api/azure-functions/azure.functions.httprequest?view=azure-python) - Azure Function context.
- **returns**: [Parameters](../../../commons/run/parameters) - returned body from context.

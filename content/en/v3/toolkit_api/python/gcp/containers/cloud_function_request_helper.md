---
type: docs
title: "CloudFunctionRequestHelper"
linkTitle: "CloudFunctionRequestHelper"
gitUrl: "https://github.com/pip-services3-python/pip-services3-gcp-python"
description: >
    Contains methods used to get correlationIds, commands and bodies from the Google Function requests.
---

### Description

The CloudFunctionRequestHelper class contains methods used to get correlationIds, commands and bodies from the Google Function requests.


### Static methods

#### getCorrelationId
Returns a correlationId from the Google Function request.

> `staticmethod` get_correlation_id(req: [flask.Request](https://flask.palletsprojects.com/en/2.1.x/api/#incoming-request-data)): str

- **req**: [flask.Request](https://flask.palletsprojects.com/en/2.1.x/api/#incoming-request-data) - Google Function request.
- **returns**: str - returned correlationId from request.

#### get_command
Returns a command from the Google Function request.

> `staticmethod` get_command(req: [flask.Request](https://flask.palletsprojects.com/en/2.1.x/api/#incoming-request-data)): str

- **req**: [flask.Request](https://flask.palletsprojects.com/en/2.1.x/api/#incoming-request-data) - Google Function request.
- **returns**: str - returned command from request.

#### get_parameters
Returns a body from the Google Function http request.

> `staticmethod` get_parameters(req: [flask.Request](https://flask.palletsprojects.com/en/2.1.x/api/#incoming-request-data)): [Parameters](../../../commons/run/parameters)

- **req**: [flask.Request](https://flask.palletsprojects.com/en/2.1.x/api/#incoming-request-data) - Google Function request.
- **returns**: [Parameters](../../../commons/run/parameters) - returned body from request.

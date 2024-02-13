---
type: docs
title: "CloudFunctionRequestHelper"
linkTitle: "CloudFunctionRequestHelper"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-gcp-python"
description: >
    Contains methods used to get traceIds, commands and bodies from the Google Function requests.
---

### Description

The CloudFunctionRequestHelper class contains methods used to get traceIds, commands and bodies from the Google Function requests.


### Static methods

#### getTraceId
Returns a traceId from the Google Function request.

> `staticmethod` get_trace_id(req: [flask.Request](https://flask.palletsprojects.com/en/2.1.x/api/#incoming-request-data)): str

- **req**: [flask.Request](https://flask.palletsprojects.com/en/2.1.x/api/#incoming-request-data) - Google Function request.
- **returns**: str - returned traceId from request.

#### get_command
Returns a command from the Google Function request.

> `staticmethod` get_command(req: [flask.Request](https://flask.palletsprojects.com/en/2.1.x/api/#incoming-request-data)): str

- **req**: [flask.Request](https://flask.palletsprojects.com/en/2.1.x/api/#incoming-request-data) - Google Function request.
- **returns**: str - returned command from request.

#### get_parameters
Returns a body from the Google Function http request.

> `staticmethod` get_parameters(req: [flask.Request](https://flask.palletsprojects.com/en/2.1.x/api/#incoming-request-data)): [Parameters](../../../components/exec/parameters)

- **req**: [flask.Request](https://flask.palletsprojects.com/en/2.1.x/api/#incoming-request-data) - Google Function request.
- **returns**: [Parameters](../../../components/exec/parameters) - returned body from request.

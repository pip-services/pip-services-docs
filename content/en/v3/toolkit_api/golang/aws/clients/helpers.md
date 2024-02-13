---
type: docs
title: "Helpers"
linkTitle: "Helpers"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-aws-gox"
description: >
    Helper methods for processing AWS responses
---

### Methods

#### HandleLambdaResponse
Method helps get correct result from JSON by prototype

> HandleLambdaResponse[T any](data *lambda.InvokeOutput) (result T, err error)

- **data**: *lambda.InvokeOutput -  AWS lambda response.
- **returns**: (result T, err error) - result item from response or error.
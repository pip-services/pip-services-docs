---
type: docs
title: "Helpers"
linkTitle: "Helpers"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-grpc-gox"
description: > 
    Helper module for processing responses.

---


### Methods

#### HandleHttpResponse
HandleHttpResponse method helps handle http response body.

> HandleHttpResponse[T any](r *grpcproto.InvokeReply, correlationId string) (T, error)

- **r**: *grpcproto.InvokeReply - response object from grpc server.
- **correlationId**: string - transaction id to trace execution through call chain.

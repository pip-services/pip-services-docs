---
type: docs
title: "HttpResponseSender"
linkTitle: "HttpResponseSender"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-http-go"
description: >
    Helper class that handles HTTP-based responses.
---

### Description

The HttpResponseSender class allows you to handle HTTP-based responses.

### Methods

#### SendCreatedResult
Creates a callback function that sends a newly created object as JSON.
This callack function call be called directly or passed
as a parameter to business logic components.

If the object is not nil, it returns 201 status code.
For nil results, it returns 204 status code.
If an error occurs, it sends ErrorDescription with approproate status code.

> (c *THttpResponseSender) SendCreatedResult(res http.ResponseWriter, req *http.Request, result  any, err error)

- **res**: http.ResponseWriter - an HTTP request
- **req**: *http.Request - an HTTP response
- **result**:  any - an execution result
- **error**: error - (optional) error objrct to send


#### SendDeletedResult
Creates a sendDeletedResult function that sends a deleted object as JSON.
That callack function call be called directly or passed
as a parameter to business logic components.

If object is not nil, it returns 201 status code.
For nil results, it returns 204 status code.
If an error occurs, it sends ErrorDescription with the approproate status code.

> (c *THttpResponseSender) SendDeletedResult(res http.ResponseWriter, req *http.Request, result  any, err error)

- **res**: http.ResponseWriter - an HTTP request
- **req**: *http.Request - an HTTP response
- **result**:  any - an execution result
- **error**: error - (optional) error objrct to send


#### SendEmptyResult
Creates a callback function that sends an empty result with 204 status code.
If an error occurs, it sends ErrorDescription with approproate status code.


> (c *THttpResponseSender) SendEmptyResult(res http.ResponseWriter, req *http.Request, err error)

- **res**: http.ResponseWriter - an HTTP request
- **req**: *http.Request - an HTTP response
- **error**: error - (optional) error objrct to send


#### SendError
Sends an error serialized as ErrorDescription object
and an appropriate HTTP status code.
If status code is not defined, it uses 500 status code.


> (c *THttpResponseSender) SendError(res http.ResponseWriter, req *http.Request, err error)

- **res**: http.ResponseWriter - an HTTP request
- **req**: *http.Request - an HTTP response
- **error**: error - (optional) error objrct to send 


#### SendResult
Creates a callback function that sends a result as a JSON object.
That callack function call be called directly or passed
as a parameter to business logic components.

If object is not nil, it returns 200 status code.
For nil results, it returns 204 status code.
If error occur, it sends ErrorDescription with the approproate status code.


> (c *THttpResponseSender) SendResult(res http.ResponseWriter, req *http.Request, result  any, err error)

- **res**: http.ResponseWriter - an HTTP request
- **req**: *http.Request - an HTTP response
- **result**:  any - an execution result
- **error**: error - (optional) error objrct to send


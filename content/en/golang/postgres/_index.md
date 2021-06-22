---
type: docs
title: "Postgres module"
gitUrl: "https://github.com/pip-services3-go/pip-services3-postgres-go"
no_list: true
weight: 30
description: > 
    PostgreSQL components for Pip.Services in Golang. 

    This module is a part of the [Pip.Services](http://pipservices.org) polyglot microservices toolkit. It provides a set of components to implement PostgreSQL persistence.
---

### Packages

The module contains the following packages:
- [**Build**](build) - factory to create PostreSQL persistence components.
- [**Connect**](connect) - connection component to configure PostgreSQL connection to database.
- [**Persistence**](persistence) - abstract persistence components to perform basic CRUD operations.


### Use

Get the package from the Github repository:
```bash
go get -u github.com/pip-services3-go/pip-services3-postgres-go@latest
```

TODO: add example
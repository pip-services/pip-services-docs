---
type: docs
title: "Postgres module"
gitUrl: "github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-postgres-dart"
no_list: true
weight: 500
description: > 
   A set of components used to implement PostgreSQL persistence.
---

### Packages

The module contains the following packages:
- [**Build**](build) - factory to create PostreSQL persistence components.
- [**Connect**](connect) - connection component to configure PostgreSQL connection to database.
- [**Persistence**](persistence) - abstract persistence components to perform basic CRUD operations.


### Use

Add this to your package's pubspec.yaml file:
```yaml
dependencies:
  pip_services4_postgres: version
```

Now you can install package from the command line:
```bash
pub get
```

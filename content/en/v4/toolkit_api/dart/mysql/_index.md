---
type: docs
title: "MySQL module"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-mysql-dart"
no_list: true
weight: 500
description: > 
    Contains components used to implement MySQL persistence.  
---

### Packages

The module contains the following packages:
- [**Build**](build) - a standard factory for constructing components
- [**Connect**](connect) - instruments for configuring connections to the database.
- [**Persistence**](persistence) - abstract classes for working with the database that can be used for connecting to collections and performing basic CRUD operations


### Use

Add this to your package's pubspec.yaml file:
```yaml
dependencies:
  pip_services4_mysql: version
```

Now you can install package from the command line:
```bash
pub get
```



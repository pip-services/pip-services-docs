---
type: docs
no_list: true
title: "Step 2. Project structure"
linkTitle: "Step 2. Project structure" 
gitUrl: "https://github.com/pip-services-samples/pip-samples-beacons-dart"
---

Before we start actually writing our microservice, we need to create a directory structure in the project’s folder.

Create a folder for the project and, inside it, a directory structure to match the one below:

```
/bin
/config
/docker
/lib
└───/src
    └───/build
    └───/container
    └───/data
    │   └───/version1
    └───/logic
    └───/persistence
    └───/service
        └───/version1
/test
└───/logic
└───/persistence
└───/service
    └───/version1

```

Add a package.json file with the following lines to the root of the project’s folder:

**/package.yaml**

```yaml
environment:
  sdk: ">=2.0.0 <3.0.0"

dependencies:
  pip_services3_commons: ">=1.0.5 <2.0.0"
  pip_services3_components: ">=1.0.2 <2.0.0"
  pip_services3_data: ">=1.0.0 <2.0.0"
  pip_services3_mongodb: ">=1.0.2 <2.0.0"
  pip_services3_rpc: ">=1.0.2 <2.0.0"
  pip_services3_container: ">=1.0.3 <2.0.0"
  http: "^0.12.0"
  angel_framework: ^2.1.1
  fixnum: ^0.10.11

dev_dependencies:
  test: '>=1.14.2 <2.0.0'
```

To install all necessary dependencies, run the following command from a terminal at the root of the project’s directory:

```bash
pub get
```

Now that we’ve got the project all set up, we can move on to [Step 3. Data model development.](../step2)

<span class="hide-title-link">

### [Step 3. Data model development.](../step2)

</span>

---
type: docs
no_list: true
title: "Step 1. Setting up the project"
linkTitle: "Step 1. Setting up" 
gitUrl: "https://github.com/pip-services-samples/service-beacons-python"
---

Before we start actually writing our microservice, we need to first set up our environment and create a directory structure in the project’s folder.

To set up our environment, we’ll need to install all the necessary tools, as described on the [Setup environment](../../../getting_started/setup_environment) page.

Don’t forget to select the programming language that you plan on using.

Create a folder for the project and, inside it, a directory structure to match the one below:

```
/bin
/config
/docker
/src
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

Add a requirements.txt file with the following lines to the root of the project’s folder:

**/requirements.txt**

```txt
iso8601
PyYAML
pystache
pytest
pytz
bottle
pybars3
requests
netifaces==0.10.9
 
pip_services3_commons
pip_services3_expressions
pip_services3_components
pip_services3_container
pip_services3_data
pip_services3_mongodb
pip_services3_rpc
pip_services3_swagger
```

To install all necessary dependencies, run the following command from a terminal at the root of the project’s directory:

```bash
pip install -r requirements.txt
```

Now that we’ve got the project all set up, we can move on to [Step 2. Data model development.](../step2)

<span class="hide-title-link">

### [Step 2. Data model development.](../step2)

</span>

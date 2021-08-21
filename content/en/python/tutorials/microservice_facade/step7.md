---
type: docs
no_list: true
title: "Step 7. Running facade"
linkTitle: "Step 7. Running facade" 
gitUrl: "https://github.com/pip-services-samples/facade-sample-python"
---
Before we can run our facade, we need to add three more things: a factory for the component’s we’ve created, a container, and the code that will run it all. The process of implementing these pieces is the same as the one described in [Data Microservice](../../data_microservice), so this time around we’ll just list the code:


Create three factories in the **pip_facades_sample_python/build/** folder:

One factory for the facade in a file named **FacadeFactory.py**, containing the following code:

**/pip_facades_sample_python/build/FacadeFactory.py**

```python
# -*- coding: utf-8 -*-

from pip_services3_commons.refer.Descriptor import Descriptor
from pip_services3_components.build.Factory import Factory

from pip_facades_sample_python.services.version1.FacadeServiceV1 import FacadeServiceV1
from pip_facades_sample_python.services.version2.FacadeServiceV2 import FacadeServiceV2


class FacadeFactory(Factory):
    FacadeServiceV1Descriptor = Descriptor("nov-facades-application", "service", "http", "*", "1.0")
    FacadeServiceV2Descriptor = Descriptor("nov-facades-application", "service", "http", "*", "2.0")

    def __init__(self):
        super(FacadeFactory, self).__init__()
        self.register_as_type(FacadeFactory.FacadeServiceV1Descriptor, FacadeServiceV1)
        self.register_as_type(FacadeFactory.FacadeServiceV2Descriptor, FacadeServiceV2)


```

And last but not least, a factory for the clients that that facade depends on in a file named  **ClientFacadeFactory.py**:

**/pip_facades_sample_python/build/ClientFacadeFactory.py**

```python
# -*- coding: utf-8 -*-

from pip_services3_commons.refer import Descriptor
from pip_services3_components.build import Factory

from pip_facades_sample_python.clients.version1.AccountsMemoryClientV1 import AccountsMemoryClientV1
from pip_facades_sample_python.clients.version1.BeaconsMemoryClientV1 import BeaconsMemoryClientV1
from pip_facades_sample_python.clients.version1.EmailSettingsMemoryClientV1 import EmailSettingsMemoryClientV1
from pip_facades_sample_python.clients.version1.InvitationsNullClientV1 import InvitationsNullClientV1
from pip_facades_sample_python.clients.version1.PasswordsNullClientV1 import PasswordsNullClientV1
from pip_facades_sample_python.clients.version1.RolesMemoryClientV1 import RolesMemoryClientV1
from pip_facades_sample_python.clients.version1.SessionsMemoryClientV1 import SessionsMemoryClientV1
from pip_facades_sample_python.clients.version1.SettingsNullClientV1 import SettingsNullClientV1
from pip_facades_sample_python.clients.version1.SitesMemoryClientV1 import SitesMemoryClientV1


class ClientFacadeFactory(Factory):
    SettingsNullClientV1Descriptor = Descriptor("pip-services-settings", "client", "null", "*", "1.0")
    AccountsMemoryClientV1Descriptor = Descriptor("pip-services-accounts", "client", "memory", "*", "1.0")
    PasswordNullClientV1Descriptor = Descriptor("pip-services-passwords", "client", "null", "*", "1.0")
    RolesMemoryClientV1Descriptor = Descriptor("pip-services-roles", "client", "memory", "*", "1.0")
    SessionsMemoryClientV1Descriptor = Descriptor("pip-services-sessions", "client", "memory", "*", "1.0")
    EmailSettingsMemoryClientV1Descriptor = Descriptor("pip-services-emailsettings", "client", "memory", "*", "1.0")
    SitesMemoryClientV1Descriptor = Descriptor("nov-services-sites", "client", "memory", "*", "1.0")
    InvitationsNullClientV1Descriptor = Descriptor("nov-services-invitations", "client", "null", "*", "1.0")
    BeaconsMemoryClientV1Descriptor = Descriptor("nov-services-beacons", "client", "memory", "*", "1.0")

    def __init__(self):
        super(ClientFacadeFactory, self).__init__()

        self.register_as_type(ClientFacadeFactory.SettingsNullClientV1Descriptor, SettingsNullClientV1)
        self.register_as_type(ClientFacadeFactory.AccountsMemoryClientV1Descriptor, AccountsMemoryClientV1)
        self.register_as_type(ClientFacadeFactory.PasswordNullClientV1Descriptor, PasswordsNullClientV1)
        self.register_as_type(ClientFacadeFactory.RolesMemoryClientV1Descriptor, RolesMemoryClientV1)
        self.register_as_type(ClientFacadeFactory.SessionsMemoryClientV1Descriptor, SessionsMemoryClientV1)
        self.register_as_type(ClientFacadeFactory.EmailSettingsMemoryClientV1Descriptor, EmailSettingsMemoryClientV1)
        self.register_as_type(ClientFacadeFactory.SitesMemoryClientV1Descriptor, SitesMemoryClientV1)
        self.register_as_type(ClientFacadeFactory.InvitationsNullClientV1Descriptor, InvitationsNullClientV1)
        self.register_as_type(ClientFacadeFactory.BeaconsMemoryClientV1Descriptor, BeaconsMemoryClientV1)


```

The container that we want to run our facade in should be implemented in a file named **FacadeProcess.py** and placed in the **/container** folder:


**/pip_facades_sample_python/container/FacadeProcess.py**

```python
# -*- coding: utf-8 -*-
from pip_services3_container import ProcessContainer
from pip_services3_rpc.build.DefaultRpcFactory import DefaultRpcFactory

from ..build.ClientFacadeFactory import ClientFacadeFactory
from ..build.FacadeFactory import FacadeFactory


class FacadeProcess(ProcessContainer):

    def __init__(self):
        super(FacadeProcess, self).__init__("pip-facades-example", "Example Pip.Services facade")

        self._factories.add(ClientFacadeFactory())
        self._factories.add(FacadeFactory())
        self._factories.add(DefaultRpcFactory())

```

For us to be able to run the container, create a run.js file in the **/bin** folder with the following code:

**/bin/run.py**

```python
# -*- coding: utf-8 -*-

import os
import sys

# add parent directory to path
sys.path.append(os.path.dirname(os.path.dirname(os.path.realpath(__file__))))

from pip_facades_sample_python.container.FacadeProcess import FacadeProcess

try:
    FacadeProcess().run()
except Exception as ex:
    sys.stderr.write(str(ex))

```

Our facade will need to be configured before running, so create a **config-distributed.yml** file in the **/config** folder of the project with the following:

**/config/config.yml**

```yml
---
# Container info
- descriptor: "pip-services:container-info:default:default:*"
  name: "nov-facade"
  description: "Sample facade for NOV"

# Console logger
- descriptor: "pip-services:logger:console:default:*"
  level: trace

# Log counters
- descriptor: "pip-services:counters:log:default:*"

# Settings components
- descriptor: "pip-services-settings:client:null:default:*"

# Accounts components
- descriptor: "pip-services-accounts:client:memory:default:*"

# Email settings components
- descriptor: "pip-services-emailsettings:client:memory:default:*"

# Passwords components
- descriptor: "pip-services-passwords:client:null:default:*"

# Roles components
- descriptor: "pip-services-roles:client:memory:default:*"

# Session components
- descriptor: "pip-services-sessions:client:memory:default:*"

# Sites components
- descriptor: "nov-services-sites:client:memory:default:*"

# Beacons components
- descriptor: "nov-services-beacons:client:memory:default:*"

# Invitations components
- descriptor: "nov-services-invitations:client:null:default:*"

# Main facade service
- descriptor: "pip-services:endpoint:http:default:*"
  root_path: ""
  connection:
    protocol: "http"
    host: "0.0.0.0"
    port: 8080
  options:
    debug: true
    maintenance_enabled: false
    max_req_size: "1mb"

# Facade API V1
- descriptor: "nov-facades-application:service:http:default:1.0"

# Facade API V2
- descriptor: "nov-facades-application:service:http:default:2.0"

# Hearbeat service
- descriptor: "pip-services:heartbeat-service:http:default:1.0"

# Status service
- descriptor: "pip-services:status-service:http:default:1.0"
```

For demonstration purposes, we’ll be running our system in a distributed mode, with all of its components running in their own, individual containers. The configuration above is designed specifically for this type of distributed deployment.

The process of running a service in a Docker container is described in detail in the [Microservice Dockerization](../../microservice_dockerization) tutorial.

To run our system using Docker Compose, create a docker-compose.yml file with the following:

**/docker/docker-compose.yml**

```yml
version: '3.3'

services:

  app:
    image: ${IMAGE}
    environment:
      - MAGIC_CODE=magic
      - MONGO_SERVICE_URI=
      - MONGO_SERVICE_HOST=mongo
      - MONGO_SERVICE_PORT=27017
      - MONGO_DB=app   
    ports:
      - "8080:8080"
    links:
      - mongo
      - accounts
      - role
      - passwords
      - sessions
      - beacons     
      
    command: node /app/bin/run.js -c /app/config/config-distributed.yml

  mongo:
    image: mongo:latest
    ports:
      - "27017:27017"

  accounts:
    image: pipdevs/pip-services-accounts-node:latest
    environment:
      - MONGO_SERVICE_HOST=mongo
      - MONGO_SERVICE_PORT=27017
      - MONGO_DB=accounts
    links:
      - mongo   
    ports:
      - "8082:8080"
  
  role:
    image: pipdevs/pip-services-roles-node:latest
    environment:
      - MONGO_SERVICE_HOST=mongo
      - MONGO_SERVICE_PORT=27017
      - MONGO_DB=roles
    links:
        - mongo
    ports:
      - "8083:8080"

  passwords: 
    image: pipdevs/pip-services-passwords-node:1.0.1-12-rc
    environment:
      - MONGO_SERVICE_HOST=mongo
      - MONGO_SERVICE_PORT=27017
      - MONGO_DB=passwd
    links:
        - mongo
    ports:
      - "8084:8080"

  sessions:
    image: pipdevs/pip-services-sessions-node:1.0.1-19-rc
    environment:
      - MONGO_SERVICE_HOST=mongo
      - MONGO_SERVICE_PORT=27017
      - MONGO_DB=sessions
    links:
        - mongo
    ports:
      - "8085:8080"

  beacons:
    image: pipdevs/pip-services-beacons-node:1.0
    environment:
      - MONGO_SERVICE_HOST=mongo
      - MONGO_SERVICE_PORT=27017
      - MONGO_DB=beacons
    links:
        - mongo
    ports:
      - "8086:8080"
  
```

Build and run the facade using the respective scripts (described in the [Docker tutorial](../../microservice_dockerization) we mentioned above), which can be found in this example project’s [repository](https://github.com/pip-services-samples/facade-sample-python).

To build the facade’s image and load the rest of the services’ images, run the “package” script using the command below:

```
.\package.ps1
```

Once the build process successfully finishes, run the entire system with all of its microservices in Docker Compose using the “run” script. This can be done with the following command:

```
.\run.ps1
```

When running the facade, you should see something like this in the console:

```

app_1    | [pip-facades-example:DEBUG:2021-06-17T22:03:56.128800] Opened REST service at http://0.0.0.0:8080
app_1    | [pip-facades-example:INFO:2021-06-17T22:03:56.180451] Container pip-facades-example started.
app_1    | [pip-facades-example:INFO:2021-06-17T22:03:56.180451] Press Control-C to stop the microservice...
```
Now we’re ready to move on to manually testing our facade. In [Step 8 - Manually testing the facade](../step8) - we’ll show you how this can be done.


<span class="hide-title-link">

### [Step 8 - Manually testing the facade](../step8)

</span>

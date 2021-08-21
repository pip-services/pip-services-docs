---
type: docs
no_list: true
title: "Step 7. Running the facade"
linkTitle: "Step 7. Running facade" 
gitUrl: "https://github.com/pip-services-samples/facade-sample-dotnet"
---
Before we can run our facade, we need to add three more things: a factory for the component’s we’ve created, a container, and the code that will run it all. The process of implementing these pieces is the same as the one described in [Data Microservice](../../data_microservice), so this time around we’ll just list the code:


Create three factories in the **src/service/build/** folder:

One factory for the facade in a file named **FacadeFactory.cs**, containing the following code:

**/src/service/build/FacadeFactory.cs**

```cs
using PipServices3.Commons.Refer;
using PipServices3.Components.Build;
using PipServices.Templates.Facade.Services.Version1;
using PipServices.Templates.Facade.Services.Version2;

namespace PipServices.Templates.Facade.Build
{
    public class FacadeFactory : Factory
    {
		public static Descriptor FacadeServiceV1Descriptor = new Descriptor("pip-facade-sample", "service", "http", "*", "1.0");
		public static Descriptor FacadeServiceV2Descriptor = new Descriptor("pip-facade-sample", "service", "http", "*", "2.0");


		public FacadeFactory()
        {
            RegisterAsType(FacadeServiceV1Descriptor, typeof(FacadeServiceV1));
            RegisterAsType(FacadeServiceV2Descriptor, typeof(FacadeServiceV2));
        }
    }
}
```

And last but not least, a factory for the clients that the facade depends on in a file named  **ClientFacadeFactory.cs**:

**/src/service/build/ClientFacadeFactory.cs**

```cs
using PipServices.Templates.Facade.Clients.Version1;
using PipServices3.Commons.Refer;
using PipServices3.Components.Build;

namespace PipServices.Templates.Facade.Build
{
	public class ClientFacadeFactory: Factory
	{
		public static Descriptor SettingsNullClientV1Descriptor = new Descriptor("pip-services-settings", "client", "null", "*", "1.0");
		public static Descriptor AccountsMemoryClientV1Descriptor = new Descriptor("pip-services-accounts", "client", "memory", "*", "1.0");
		public static Descriptor PasswordNullClientV1Descriptor = new Descriptor("pip-services-passwords", "client", "null", "*", "1.0");
		public static Descriptor RolesMemoryClientV1Descriptor = new Descriptor("pip-services-roles", "client", "memory", "*", "1.0");
		public static Descriptor SessionsMemoryClientV1Descriptor = new Descriptor("pip-services-sessions", "client", "memory", "*", "1.0");
		public static Descriptor EmailSettingsMemoryClientV1Descriptor = new Descriptor("pip-services-emailsettings", "client", "memory", "*", "1.0");
		public static Descriptor SitesMemoryClientV1Descriptor = new Descriptor("pip-services-sites", "client", "memory", "*", "1.0");
		public static Descriptor InvitationsNullClientV1Descriptor = new Descriptor("pip-services-invitations", "client", "null", "*", "1.0");
		public static Descriptor InvitationsMemoryClientV1Descriptor = new Descriptor("pip-services-invitations", "client", "memory", "*", "1.0");
		public static Descriptor BeaconsMemoryClientV1Descriptor = new Descriptor("pip-services-beacons", "client", "memory", "*", "1.0");

		public ClientFacadeFactory()
		{
			RegisterAsType(SettingsNullClientV1Descriptor, typeof(SettingsNullClientV1));
			RegisterAsType(AccountsMemoryClientV1Descriptor, typeof(AccountsMemoryClientV1));
			RegisterAsType(PasswordNullClientV1Descriptor, typeof(PasswordsNullClientV1));
			RegisterAsType(RolesMemoryClientV1Descriptor, typeof(RolesMemoryClientV1));
			RegisterAsType(SessionsMemoryClientV1Descriptor, typeof(SessionsMemoryClientV1));
			RegisterAsType(EmailSettingsMemoryClientV1Descriptor, typeof(EmailSettingsMemoryClientV1));
			RegisterAsType(SitesMemoryClientV1Descriptor, typeof(SitesMemoryClientV1));
			//RegisterAsType(InvitationsNullClientV1Descriptor, typeof(InvitationsNullClientV1));
			RegisterAsType(InvitationsMemoryClientV1Descriptor, typeof(InvitationsMemoryClientV1));
			RegisterAsType(BeaconsMemoryClientV1Descriptor, typeof(BeaconsMemoryClientV1));
		}
	}
}


```

The container that we want to run our facade in should be implemented in a file named **FacadeProcess.cs** and placed in the **/container** folder:


**/src/service/container/FacadeProcess.cs**

```cs
using PipServices3.Container;
using PipServices3.Rpc.Build;
using PipServices.Templates.Facade.Build;

namespace PipServices.Templates.Facade.Container
{
    public class FacadeProcess : ProcessContainer
    {
        public FacadeProcess() :
            base("pip-facade-sample", "Sample facade for NOV")
        {
            _factories.Add(new ClientFacadeFactory());
            _factories.Add(new FacadeFactory());
            _factories.Add(new DefaultRpcFactory());
        }
    }
}

```

For us to be able to run the container, create a Program.cs file in the **src/process/** folder with the following code:

**/bin/run.ts**

```cs
using System;
using PipServices.Templates.Facade.Container;

namespace Process
{
    public class Program
    {
        static void Main(string[] args)
        {
            try
            {
                var task = new FacadeProcess().RunAsync(args);
                task.Wait();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                Console.ReadLine();
            }
        }
    }
}


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

The process of running a service in a Docker container is described in detail in the [Dockerization tutorial](../../microservice_dockerization)

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

Build and run the facade using the respective scripts (described in the [Docker tutorial](../../microservice_dockerization) we mentioned above), which can be found in this example project’s [repository](https://github.com/pip-services-samples/facade-sample-dotnet).

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

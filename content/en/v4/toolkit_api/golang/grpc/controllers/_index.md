---
type: docs
title: "Controllers"
linkTitle: "Controllers"
no_list: true
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-grpc-go"
description: >
    This package contains interfaces and classes used to create GRPC services.
---
---
<div class="module-body"> 

### Interfaces

#### [IRegisterable](iregisterable)
Interface to perform on-demand registrations.


### Classes

#### [CommandableGrpcController](commandable_grpc_controller)
Abstract service that receives commands via GRPC protocol
to operations automatically generated for commands defined in [ICommandable](../../commons/commands/icommandable).
Each command is exposed as an invoke method that receives a command name and parameters.

#### [GrpcEndpoint](grpc_endpoint)
Used for creating GRPC endpoints. An endpoint is a URL, at which a given service can be accessed by a client.

#### [GrpcController](grpc_controller)
Abstract service that receives remote calls via GRPC protocol.

</div>



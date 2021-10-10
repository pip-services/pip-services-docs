[Commons](../../commons) - Basic primitives for symmetrical development on various programming languages, as well as patterns, that are used in the rest of the modules.

[Components](../../components) - Contains standard components, such as component logging, performance counters, synchronization, configuration, caching, and others. Specific implementations of these components are found in the extension modules.

The main (basic) modules are shown in blue. Although they are not required, they are used in most microservices:

[Container](../../container) - A basic container, which is used to compose microservices from loosely-coupled components (see [The Structure of a Microservice](../microservice_structure)).

[Data](../../data) - Basic components for storing data and implementing storage of data in memory and in the file system.

[RPC](../../rpc) - Basic components for synchronous communication and implementations using local calls and the HTTP/REST protocol.

[Messaging](../../messaging) - Basic components for asynchronous communication and implementing local queues.

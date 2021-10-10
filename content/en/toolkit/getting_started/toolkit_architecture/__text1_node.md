The core of the toolkit is shown in green. It consists of two modules, both of which are required:

- [Commons](../../../node/commons/) - Basic primitives for symmetrical development on various programming languages, as well as patterns, that are used in the rest of the modules.

- [Components](../../../node/components) - Contains standard components, such as component logging, performance counters, synchronization, configuration, caching, and others. Specific implementations of these components are found in the extension modules.

The main (basic) modules are shown in blue. Although they are not required, they are used in most microservices:

- [Container](../../../node/container) - A basic container, which is used to compose microservices from loosely-coupled components (see [The Structure of a Microservice](../microservice_structure)).

- [Data](../../../node/data) - Basic components for storing data and implementing storage of data in memory and in the file system.

- [RPC](../../../node/rpc) - Basic components for synchronous communication and implementations using local calls and the HTTP/REST protocol.

- [Messaging](../../../node/messaging) - Basic components for asynchronous communication and implementing local queues.

Last but not least are the additional (optional) modules, shown in red. These modules are used to support specific technologies, such as:

- Azure - components for working with the Azure cloud
- [AWS](../../../node/aws) - components for working with the AWS cloud
- [MongoDB](../../../node/mongodb) - components for storing data in MongoDB
- [GRPC](../../../node/grpc) - components for synchronous communication via GRPC
- ActiveMQ - components for asynchronous communication via ActiveMQ
- [MQTT](../../../node/mqtt) - components for asynchronous communication via the MQTT protocol
- [Memcached](../../../node/memcached) - components for caching and synchronizing with Memcached
- [Redis](../../../node/redis) - components for caching and synchronizing with Redis
- [ElasticSearch](../../../node/elasticsearch) - components for logging with ElasticSearch
- [Prometheus](../../../node/prometheus) - components for using performance counters with Prometheus

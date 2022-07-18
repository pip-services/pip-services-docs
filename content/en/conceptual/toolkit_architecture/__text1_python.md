The core of the toolkit is shown in green. It consists of two modules, both of which are required:

- [Commons](../../../python/commons) - Basic primitives for symmetrical development on various programming languages, as well as patterns, that are used in the rest of the modules.

- [Components](../../../python/components) - Contains standard components, such as component logging, performance counters, synchronization, configuration, caching, and others. Specific implementations of these components are found in the extension modules.

The main (basic) modules are shown in blue. Although they are not required, they are used in most microservices:

- [Container](../../../python/container) - A basic container, which is used to compose microservices from loosely-coupled components (see [The Structure of a Microservice](../microservice_structure)).

- [Data](../../../python/data) - Basic components for storing data and implementing storage of data in memory and in the file system.

- [RPC](../../../python/rpc) - Basic components for synchronous communication and implementations using local calls and the HTTP/REST protocol.

- [Messaging](../../../python/messaging) - Basic components for asynchronous communication and implementing local queues.

Last but not least are the additional (optional) modules, shown in red. These modules are used to support specific technologies, such as:

- Azure - components for working with the Azure cloud
- [AWS](../../../python/aws) - components for working with the AWS cloud
- [MongoDB](../../../python/mongodb) - components for storing data in MongoDB
- [GRPC](../../../python/grpc) - components for synchronous communication via GRPC
- ActiveMQ - components for asynchronous communication via ActiveMQ
- [MQTT](../../../python/mqtt) - components for asynchronous communication via the MQTT protocol
- [Memcached](../../../python/memcached) - components for caching and synchronizing with Memcached
- [Redis](../../../python/redis) - components for caching and synchronizing with Redis
- [ElasticSearch](../../../python/elasticsearch) - components for logging with ElasticSearch
- [Prometheus](../../../python/prometheus) - components for using performance counters with Prometheus

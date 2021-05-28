---
type: docs
no_list: true
title: "Architecture of the Pip.Services toolkit"
linkTitle: "Toolkit Architecture"
weight: 1
---

The Pip.Services toolkit is divided into a few dozen modules. A small part of these modules make up the core itself, while the rest are optional add ons. This approach simplifies adding new functionality and minimizes dependencies on 3rd party libraries.


The general structure of the Pip.Services toolkit is shown on the following diagram:

![Toolkit architecture diagram](/images/getting_started/toolkit_architecture/toolkit_diagram.png)

The foundation of the toolkit is shown in grey. It is made up of the stacks for the 6 supported programming languages: Java, Node.js, .NET Core, Python, Dart, and Golang.

The core of the toolkit is shown in green. It consists of two modules, both of which are required:

- [Commons](../../commons) - Basic primitives for symmetrical development on various programming languages, as well as patterns, used in the rest of the modules.

- [Components](../../components) - Contains standard components, such as component logging, performance counters, synchronization, configuration, caching, and others. Specific implementations of these components are found in the extension modules.

The main (basic) modules are shown in blue. Although they are not required, they are used in most microservices:

- [Container](../../container) - A basic container, which is used to compose microservices from loosely-coupled components (see [The Structure of a Microservice](TODO: add link)).

- [Data](../../data) - Basic components for storing data and implementing storage of data in memory and in the file system.

- [RPC](../../rpc) - Basic components for synchronous communication and implementations using local calls and the HTTP/REST protocol.

- [Messaging](../../messaging) - Basic components for asynchronous communication and implementing local queues.

Last but not least are the additional (optional) modules, shown in red. These modules are used to support specific technologies, such as:

- [Azure](../../azure) - components for working with the Azure cloud
- [AWS](../../aws) - components for working with the AWS cloud
- [MongoDB](../../mongodb) - components for storing data in MongoDB
- [GRPC](../../grpc) - components for synchronous communication via GRPC
- [ActiveMQ](../../activemq) - components for asynchronous communication via ActiveMQ
- [MQTT](../../mqtt) - components for asynchronous communication via the MQTT protocol
- [Memcached](../../memcached) - components for caching and synchronizing with Memcached
- [Redis](../../redis) - components for caching and synchronizing with Redis
- [ElasticSearch](../../elasticsearch) - components for logging with ElasticSearch
- [Prometheus](../../prometheus) - components for using performance counters with Prometheus

The Pip.Services toolkit is an actively growing project. While the core has proven to be stable over the course of many years, additional modules are constantly being expanded and added. Be sure to regularly check our [news](https://www.pipservices.org/news) to be informed of the latest updates and releases.


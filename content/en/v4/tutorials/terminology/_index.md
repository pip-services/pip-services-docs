---
type: docs
no_list: true
title: "Terminology"
linkTitle: "Terminology"
weight: 1000
---

<table class="full-width-table entry-table-no-links terminology">
    <thead>
        <tr>
            <th scope="col">Term</th>
            <th scope="col">Definition</th>
            <th scope="col">Helpful article</th>
        </tr>
    </thead>
    <tr>
      <td>Application </td>
      <td>A software package that performs a specific function</td>
    </tr>
    <tr>
      <td>Backend</td>
      <td>The part of an application that is not directly accessed by the user. In general, backends are used to perform business logic and calculations.</td>
    </tr>
    <tr>
      <td>Beacon</td>
      <td>A hardware device that enables data transmission to mobile devices within a specific range of the device.</td>
      <td><a href="../../tutorials/advanced_tutorials/data_microservice/">Data microservice</a></td>
    </tr>
    <tr>
      <td>Benchmark</td>
      <td>TA standard or point of reference.</td>
    </tr>
    <tr>
      <td>BFF</td>
      <td>BFF or Backend For Frontend is a design pattern that considers a dedicated backend for each frontend application interface. It is a variant of the API Gateway pattern, where instead of having a single point of entry that manages all the logic, there are several ones that consider specialized cases.</td>
    </tr>
    <tr>
      <td>Boundary Microservice</td>
      <td>A microservice used to expose the functionality of a system to external entities such as consumers, users, and systems. These microservices can be divided into two categories: facades and connectors.</td>
    </tr>
	  <tr>
      <td>Build factory</td>
      <td>
       A creational pattern that uses factory methods to deal with the problem of creating objects without having to specify the exact class of the object that will be created.
      </td>
    </tr>	
   <tr>
      <td>Business Process Microservice</td>
      <td>A microservice used to implement business transactions. These microservices can be classified as background workers and sagas.</td>
    </tr>
	<tr>
      <td>Caching</td>
      <td>
        The process of storing and accessing data from a cache, where a cache is a high-speed data storage. Typically, the storage is transient and is used to speed up the retrieval of data. <br> <br>
        Within Pip.Services, the user can create components for caching. Also, there are two components that offer caching: the MemoryCaching class, which caches in memory, and the NullCache, which is a dummy cache with no real effect. And, Pip.Services includes modules for Redis and Memcached.
      </td>
      <td><a href="../../tutorials/beginner_tutorials/caching/">Caching</a></td>
    </tr>
    <tr>
      <td>Circuit Breaker pattern</td>
      <td>A pattern used to detect failure and encapsulate the logic of preventing it from cascading between services. It can also detect when a problem has been resolved. By isolating the failure, this pattern provides fault and latency tolerance.</td>
    </tr>
    <tr>
      <td>Client</td>
      <td>
        A hardware device or software program that requests access to a service provided by a server. Clients are typically used in the client-server architecture.
      </td>
    </tr>
   <tr>
      <td>Collection</td>
      <td>
      A class representing a set of similar items as a single unit. Within Pip.Services, there are several useful collections, such as AnyValueMap, StringsValueMap and Arrays.
      </td>
    </tr>
    <tr>
      <td>Command</td>
      <td>
        An instruction given by a user to a computer to perform a specific task. It can be initiated from a command line or a user interface.<br><br>
        Within Pip.Services, commands are defined by the Command class, which can be used to call a method or a function.
      </td>
    </tr>
   <tr>
      <td>Commandable pattern</td>
      <td>
        A behavioral design pattern in which an object is used to contain the information needed to perform certain actions or trigger events.<br><br>
        Within Pip.Services, this pattern is implemented via the CommandSet class, which contains a group of commands that are defined via the Command class. The collection of commands available from the command set is then called by the controller, who uses them according to the implemented business logic. <br><br>
        The toolkit also provides some ready-to-use components that implement this pattern like the CommandableHttpController and CommandableGrpcController, which are abstract controllers that receive commands via the HTTP and gRPC protocols respectively.
      </td>
      <td><a href="../../tutorials/beginner_tutorials/communication/command_set/">Command Set</a></td>
    </tr>
 <tr>
      <td>Communication protocol</td>
      <td>
        A system of rules that allows two or more entities of a communication system to transmit information via any kind of variation of a physical quantity.<br><br>
        Pip.Services offers components for communication for the HTTP and gRPC protocols.
      </td>
    </tr>
    <tr>
      <td>Component</td>
      <td>
        Within Pip.Services, a component is a class with a lifecycle implemented using interfaces (Code augmentation). Usually, within a microservice, components are organized according to a three-layer architecture.
      </td>
      <td><a href="../../tutorials/beginner_tutorials/component/creating_a_component/">Creating a Component</a></td>
    </tr>	
  <tr>
      <td>Component references / Component linking</td>
      <td>
        The way components communicate with each other. Within Pip.Services, components relate to each other via the Locator pattern. To be able to link to dependencies, a component must implement the IReferenceable interface and register its dependencies defined via a References object.
      </td>
    </tr>
    <tr>
      <td>Component types</td>
      <td>
        Components can be classified according to their functionality into data, persistence, logic, controllers, containers, etc. Pip.Services uses this classification to organize the different components in modules, which are in turn internally arranged in packages.
      </td>
    </tr>
    <tr>
      <td>Componentized design</td>
      <td>
        A design approach focused on the decomposition of the system into functional or logical components. Its primary goal is component reusability. <br><br>
        The Pip.Services toolkit follows this approach, which allows for creating microservices from loosely coupled components.
      </td>
    </tr>
   <tr>
      <td>Config file</td>
      <td>
        A file containing information about components. This information is used by containers to locate references (See Locator pattern).
      </td>
    </tr>
    <tr>
      <td>Config params</td>
      <td>
        Config params stands for configuration parameters. Pip.Services offers the ConfigParams component, which contains a key-value map for configuration parameters. This component can be used, for example, to store access control credentials.
      </td>
    </tr>
	<tr>
      <td>Configure</td>
      <td>
        The act of selecting programmable options that make an application function according to the user's needs.<br><br>
        Configurations allow to change microservice behavior, adjust to deployment environments, and set parameters to connect to infrastructure services and other microservices. <br><br>
        For this, the Pip.Services toolkit provides a set of patterns that support design-time, deployment-time, and runtime configurations
      </td>
    </tr>	
  <tr>
      <td>Connection params</td>
      <td>
        Connection params stand for connection parameters. Pip.Services has the ConnectionParams class, which is used to store connection parameters necessary to connect to external services.
      </td>
    </tr>
    <tr>
      <td>Container </td>
      <td>
        A package of software that contains all of the necessary components to run an application in an environment.<br><br>
        Pip.Services offers the Containers module, which has the ProcessContainer component. This component is an inversion of control container that runs the packaged code as a system process.<br><br>
        Additionally, the toolkit provides a variety of other containers, which are used to assemble microservices from components and deploy them on different platforms. They include containers for AWS Lambda, Azure Functions, and Google Cloud Functions among others.<br><br>
        Within Pip.Services, containers manage the lifecycle of the packaged components, from creation to destruction. They use the Locator pattern and obtain information about dependencies from a configuration file.
      </td>
      <td><a href="../../tutorials/beginner_tutorials/containers/" target="_blank">Containers</a></td>
    </tr>	
   <tr>
      <td>Controller </td>
      <td>
	Within Pip.Services, a controller is the component in the first layer of the three-layer design model. It is used to communicate with clients by using protocols such as HTTP and gRPC.
      </td>
      <td><a href="../../tutorials/beginner_tutorials/three_tier_architecture/">Three tier architecture</a></td>
    </tr>

    <tr>
      <td>Counters</td>
      <td>
        A data object used to store the measurements of a performance counter, such as the number of times a function is called.
      </td>
    </tr>	
   <tr>
      <td>Credential params</td>
      <td>
        Credential params stands for credential parameters. Pip.Services contains the CredentialParams component that can be used to hold the credentials required to connect to external services.
      </td>
    </tr>
    <tr>
      <td>Data Microservice</td>
      <td>
        A microservice used to read and store data. These microservices can be classified as CRUD or CQRS microservices.
      </td>
      <td><a href="../../tutorials/advanced_tutorials/data_microservice/">Data microservice</a></td>
    </tr>
    <tr>
      <td>Descriptor</td>
      <td>
        A descriptor is a Pip.Services component that works as a component locator based on the following fields: group, type, kind, name and version of a component. <br><br>
        As matching can be done by using one or more of the fields, many scenarios with various degrees of specificity can be considered. For example: locate all loggers (type) or locate a specific component (name and version).
      </td>
      <td><a href="../../tutorials/beginner_tutorials/component/descriptors/">Descriptors</a></td>
    </tr>
	<tr>
      <td>Direct Client</td>
      <td>
        A client that calls a service directly in the same memory space. It is used when multiple microservices are deployed in a single container (monolith) and communication between them can be done by direct calls rather than through the network.
      </td>
    </tr>
    <tr>
      <td>Discovery</td>
      <td>
        Service discovery refers to the automatic detection of components. <br><br>
        For this functionality, Pip.Services provides the MemoryDiscovery class, which works by keeping connections in memory. 
      </td>
      <td><a href="../../tutorials/beginner_tutorials/discovery_services/">Discovery services</a></td>
    </tr>
    <tr>
      <td>Endpoint</td>
      <td>
        An endpoint represents a connection point for an API. Typically, it is a uniform resource locator (URL) that provides the location of a resource on a server. <br><br>
        Endpoints are used by services and clients to locate each other. Pip.Services contains an HTTP endpoint component, which is used by those components that communicate via this protocol including REST services, Swagger, Prometheus, and health services. Similarly, it has a gRPC endpoint that allows for components to communicate via the gRPC protocol. 
      </td>
    </tr>
    <tr>
      <td>Environment</td>
      <td>
        A collection of programs, libraries, and utilities that allows users to perform specific tasks. 
      </td>
    </tr>
    <tr>
      <td>Facade</td>
      <td>
        A component that serves as a front-facing interface connecting clients to different components. Thus, all requests made by external clients first arrive at the facade from where are then forwarded to the appropriate microservices. This extra layer that facades provides allows for microservices to be changed, without those changes affecting the clients. <br><br>
        Facades can provide some additional functionality such as routing, data aggregation, authentication and authorization, caching, analytics and logging. <br><br>
        Large systems can include several facades, each of them representing a logical isolated API. Moreover, specialized facades can be used for clients that present specific needs (See BFF pattern).
      </td>
    </tr>
   <tr>
      <td>Factory</td>
      <td>
       A factory is an object used to create other objects. The Pip.Services toolkit provides the IComponentFactory abstraction, which can be used to create factories for different components. Additionally, the toolkit supplies specific factories for standard components.
      </td>
    </tr>
    <tr>
      <td>File Persistence</td>
      <td>
       Persistence that stores data in files. Within Pip.Services, this functionality is supported by the FilePersistence component, which stores the data in files and caches them in memory.
      </td>
    </tr>
    <tr>
      <td>Frontend</td>
      <td>
       The part of an application with which the user interacts directly. From a user's point of view, it is synonymous with the user interface. From a developer's point of view, it includes the interface design and the related coding. Within Pip.Services, frontends are usually components that represent clients.
      </td>
    </tr>
    <tr>
      <td>gRPC</td>
      <td>
       An open-source, high-performance Remote Procedure Call (RPC) framework that can run in any environment. Originally developed by Google, Pip.Services implements it via the gRPC module.
      </td>
      <td><a href="../../tutorials/beginner_tutorials/communication/grpc/">gRPC</a></td>
    </tr>
    <tr>
      <td>Health monitoring</td>
      <td>
       A set of activities undertaken to maintain a system in operable condition.<br><br>
       Within Pip.Services, this is done via tracing, logging and performance metrics. Once the information has been created, it can be sent to an external tool, such as Prometheus or Elasticsearch, for analysis.<br><br>
       The toolkit provides several components such as HeartbeatService for heartbeat operations, InstrumentTiming to create logs, counters and timings, and the Count library that includes several useful components to create performance counters.
      </td>
      <td>
        <a href="../../tutorials/beginner_tutorials/observability/prometheus/">Prometheus</a>
        <a href="../../tutorials/beginner_tutorials/observability/elasticsearch/">Elasticsearch</a>
      </td>
    </tr>
  <tr>
      <td>Inversion of Control pattern</td>
      <td>
       Inversion of Control is a principle in software design where the control of components is transferred to a container that handles their lifecycles. This pattern helps create loosely coupled classes that are testable, maintainable and extensible.<br><br>
       This pattern is at the core of Pip.Services approach to containerization, which allows for microservice deployment in different environments. The toolkit provides the ProcessContainer, which runs the packaged code as a system process, and several specialized containers for common platforms such as AWS Lambda, Azure Functions, and Google Cloud Functions among others.
      </td>
    </tr>
    <tr>
      <td>Library</td>
      <td>
       A collection of software resources used by computer programs.
      </td>
    </tr>
   <tr>
      <td>Locator pattern</td>
      <td>
       A pattern that uses a central registry (the "service locator"), which on request returns information about a specific resource, acting as a run-time linker.
      </td>
      <td>
        <a href="../../tutorials/beginner_tutorials/component/component_references/">Component references</a>
      </td>
    </tr>
    <tr>
      <td>Locks</td>
      <td>
       A mechanism for controlling access to something.<br><br>
       Pip.Services provides the MemoryLock component, which is used to synchronize the execution of a process using shared memory. It also has the NullLock, which is a dummy lock with no real effect. 
      </td>
      <td>
        <a href="../../tutorials/beginner_tutorials/locks/">Locks</a>
      </td>
    </tr>
  <tr>
      <td>Log</td>
      <td>
       A file that records either events happening in an operating system or software executions.
      </td>
    </tr>
    <tr>
      <td>Logging</td>
      <td>
       The action of keeping a log.<br><br>
       PIP.Services provides two important logging components namely, the CachedLogger and the ConsoleLogger. The first class stores log messages in memory, whereas the second class displays them on a console.<br><br>
       The toolkit also has the CompositeLogger component, which allows for message aggregation and thus, the creation of a centralized logging point.<br><br>
       Additionally, PIP.Services provides implementations of loggers for CloudWatch, ElasticSearch, and DataDog.
      </td>
      <td>
        <a href="../../tutorials/beginner_tutorials/observability/logging/">Logging</a>
      </td>
    </tr>
    <tr>
      <td>Long-living code</td>
      <td>
       Code that can last long because it is easily updatable and scalable.
      </td>
    </tr>	
    <tr>
      <td>Memory persistence</td>
      <td>
       Persistence that stores data in memory. Within Pip.Services, this functionality is supported by the MemoryPersistence component.
      </td>
    </tr>	
    <tr>
      <td>Metrics</td>
      <td>
       A measure of software characteristics that are quantifiable or countable.
      </td>
    </tr>
    <tr>
      <td>Microapplication</td>
      <td>
       A super-specialized application designed to perform one task or use case.
      </td>
    </tr>
    <tr>
      <td>Microservice</td>
      <td>
       Microservices are an architectural and organizational approach to software development in which software consists of small independent services that communicate via APIs. <br><br>
       Their main characteristics are:
       <ul>
        <li>1. Each microservice uses its own technology stack independently of other microservices.</li>
        <li>2. They are independently deployable.</li>
        <li>3. They communicate with each other through REST APIs and messages.</li>
        <li>4. They are organized around business capabilities by following the "one service–one function" principle.</li>
        <li>5. Their development is usually managed by a small team of people.</li>
       </ul>
      </td>
    </tr>	
	<tr>
      <td>Mock Client</td>
      <td>
        A dummy client that simulates the work of a service in memory. It is used for testing or demonstration purposes.
      </td>
    </tr>
    <tr>
      <td>Module</td>
      <td>
       A collection of components with similar functionalities. Modules allow for the organization of components within the toolkit. <br><br>
       The core of the toolkit consists of two modules namely, Commons and Components. Other modules, such as RPC, gRPC, AWS, MySQL, Cassandra etc, extend the functionality of the toolkit. Each module is implemented in six different languages according to the symmetric implementation principle.
      </td>
    </tr>
    <tr>
      <td>MQTT</td>
      <td>
       MQTT is a lightweight, publish-subscribe, machine-to-machine network protocol. It is designed for connections with remote locations that have devices with resource constraints or limited network bandwidth. <br><br>
       This protocol is implemented in Pip.Services in the  MQTT module, which contains components for sending and receiving messages via an MQTT broker.
      </td>
      <td>
        <a href="../../tutorials/beginner_tutorials/messaging/mqtt/">MQTT</a>
      </td>
    </tr>	
   <tr>
      <td>Mustache templates</td>
      <td>
       Mustache is a web template system with implementations available in several languages. PIP.Services offers an implementation of Mustache in its Expressions module. This implementation is enhanced with the addition of some helpers.
      </td>
      <td>
        <a href="../../tutorials/beginner_tutorials/mustache_templates/">Mustache templates</a>
      </td>
    </tr>
	<tr>
      <td>Null Client</td>
      <td>
        A dummy client with no real effect. It is used for testing
      </td>
    </tr>
   <tr>
      <td>Pattern</td>
      <td>
       A solution to a problem in a specific context.
      </td>
    </tr>
    <tr>
      <td>Performance Counters</td>
      <td>
       A performance monitoring and debugging tool that consists of counting the number of actions that both the application and the operating system perform. Examples include the number of exceptions thrown, loading time, and the number of threads. <br><br>
       Performance counters as considered in the Pip.Services toolkit through the Count package available from the Components module. This package contains a set of interfaces and classes used to create these tools.
      </td>
      <td><a href="../beginner_tutorials/observability">Observability</a></td>
    </tr>
    <tr>
      <td>Persistence</td>
      <td>
       Data stored in a non-volatile resource, so that it survives after the process with which it was created has ended.
      </td>
      <td><a href="../../tutorials/beginner_tutorials/persistences/designing_persistence/">Designing persistence</a></td>
    </tr>
	<tr>
      <td>Pipeline (CI/CD)</td>
      <td>
       A sequence of steps that must be performed to build, test, package and deliver a new version of an application. These processes can vary depending on the type of application, language, environment, etc.
      </td>
    </tr>
	<tr>
      <td>Ported</td>
      <td>
       A computer program that has been reworked to run in a new environment.
      </td>
    </tr>
    <tr>
      <td>Property</td>
      <td>
       In object-oriented programming, a property is a special type of variable that is used to define the characteristics of an object.
      </td>
    </tr>
    <tr>
      <td>Reference</td>
      <td>
       A value that specifies the location of a component. To store and locate references to a component, Pip.Services has the References class.
      </td>
    </tr>
    <tr>
      <td>Saga</td>
      <td>
       A sequence of transactions that updates each service and triggers the next transaction step. If a step fails, the saga executes the necessary compensating transactions that undo the ones previously executed.
      </td>
    </tr>
    <tr>
      <td>Service</td>
      <td>
     Within Pip.Services' three-tier architecture, the service is the class where the business logic of the microservice is implemented. From this component, methods can call other components.<br><br>  
      </td>
    </tr>
	<tr>
      <td>Swagger</td>
      <td>
       A suite of tools for API development. Pip.Services offers access to these tools via the Swagger module, which has the functionality to document an API via a Swagger interface.
      </td>
      <td><a href="../../tutorials/beginner_tutorials/communication/swagger/">Swagger</a></td>
    </tr>
    <tr>
      <td>Symmetric implementation</td>
      <td>
       The architectural principle that says that for every programming language the toolkit implements, there is a common set of classes, methods, and method signatures that applies to all implemented languages.
      </td>
    </tr>
   <tr>
      <td>Toolkit</td>
      <td>
       A set of software utilities used to develop or maintain a software system.
      </td>
    </tr>
    	    <tr>
      <td>Trace ID</td>
      <td>
        A transaction id used to trace execution through a call chain. It can be a number, a string, or a combination of both.<br><br>
        Trace ids are important for tracing errors, debugging, and logging. 
      </td>
    </tr>
    <tr>
      <td>Validation</td>
      <td>
       The process used to determine whether a program or entity satisfies a specified requirement.
      </td>
      <td><a href="../../tutorials/beginner_tutorials/data_handling/data_validation/">Data validation</a></td>
    </tr>
	<tr>
      <td>Validation schema</td>
      <td>
       An object-based way of defining validations on requests. Within the Commons module, Pip.Services offers several classes that can be used as validation schemas, such as ObjectsSchema to validate user defined objects, FilterParamsSchema to validate FilterParams, and MapSchema to validate maps.
      </td>
    </tr>
    <tr>
      <td>Validity</td>
      <td>
       The extent to which a concept, conclusion or measurement satisfies a specified requirement. <br><br>
       Within the Commons module, Pip.Services offers the Validate package, which contains interfaces and classes that can be used to create custom validation rules.
      </td>
      <td><a href="../../tutorials/beginner_tutorials/data_handling/data_validation/">Data validation</a></td>
    </tr>
</table>

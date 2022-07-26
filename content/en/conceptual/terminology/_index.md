---
type: docs
no_list: true
title: "Terminology"
linkTitle: "Terminology"
weight: 90
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
      <td><a href="../../getting_started/tutorials/data_microservice/">Data microservice</a></td>
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
      <td><a href="../../getting_started/caching/">Caching</a></td>
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
        The toolkit also provides some ready-to-use components that implement this patter like the CommandableHttpService and CommandableGrpcService, which are abstract services that receive commands via the HTTP and gRPC protocols respectively.
      </td>
      <td><a href="../../getting_started/recipes/command_set/">Command Set</a></td>
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
      <td><a href="../../getting_started/recipes/creating_a_component/">Command Set</a></td>
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
        Components can be classified according to their functionality into data, persistence, logic, services, containers, etc. Pip.Services uses this classification to organize the different components in modules, which are in turn internally arranged in packages.
      </td>
    </tr>
    <tr>
      <td>Componentized design</td>
      <td>
        A design approach focused on the decomposition of the system into functional or logical components. Its primary goal is component reusability. <br><br>
        The Pip.Services toolkit follows this approach, which allows for creating microservices from loosely coupled components.
      </td>
      <td><a href="../building_blocks/components/#microservice-componentized-design">microservice-componentized-design</a></td>
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
        The act of selecting programmable options that make an application function according to the user’s needs.<br><br>
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
      <td><a href="../../getting_started/recipes/containers/">Command Set</a></td>
    </tr>	
   <tr>
      <td>Controller </td>
      <td>
        Within Pip.Services’ three-tier architecture, the controller is the class where the business logic of the microservice is implemented. From this component, methods can call other components.<br><br>
        This approach differs from other frameworks such as Spring Boot, where the controller is used to implement communication functions.
      </td>
      <td><a href="../../getting_started/recipes/three_tier_architecture/">Three tier architecture</a></td>
    </tr>
	    <tr>
      <td>Correlation ID</td>
      <td>
        A transaction id used to trace execution through a call chain. It can be a number, a string, or a combination of both.<br><br>
        Correlation ids are important for tracing errors, debugging, and logging. 
      </td>
    </tr>
    <tr>
      <td>Counters</td>
      <td>
        A data object used to store the measurements of a performance counter, such as the number of times a function is called.
      </td>
    </tr>	
</table>

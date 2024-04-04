---
type: docs
title: "Tutorials"
linkTitle: "Tutorials" 
no_list: true
exclude_from_list: true
weight: 15
---
---

<div id="concepts-main">


### Introduction

Pip.Services is a multi-language, cross-platform toolkit that makes it easy for developers to create long-living microservice systems. From its beginnings, the toolkit was designed to be expandable and portable across programming languages and, at the same time, support microservice deployment on existing and future platforms.

#### Multi-language, cross-platform 

The current technical environment is characterized by a variety of programming languages and deployment platforms. Pip.Services embraces this diversity through symmetric language implementation and containerization.  

Symmetric implementation means that for every programming language it is implemented in, there is a common set of classes, methods, and method signatures that applies to all implemented languages. This carefully designed architecture allows the toolkit to support a variety of programming languages that can be compiled or interpreted, statically- or dynamically-typed, object-oriented or not. Currently, the toolkit is available in six different languages namely, Go, Node.js, .NET, Python, Dart, and Java.  


<div class="card-group intro-cards">
  <div class="card">
    <div class="card-body text-center">
      <img class="card-img-top" src="/images/icons/nodejs-icon.png" alt="Node.js icon">
      <a href="../toolkit_api/node" class="stretched-link"></a>
    </div>
    <div class="card-footer text-center">
        Node.js
    </div>
  </div>
  <div class="card">
    <div class="card-body text-center ">
      <img class="card-img-top" src="/images/icons/dotnet-icon.png" alt="Dotnet icon">
      <a href="../toolkit_api/net" class="stretched-link"></a>
    </div>
    <div class="card-footer text-center">
        .NET
    </div>
  </div>
  <div class="card">
    <div class="card-body text-center">
      <img class="card-img-top" src="/images/icons/golang-icon.png" alt="Golang icon">
      <a href="../toolkit_api/golang" class="stretched-link"></a>
    </div>
    <div class="card-footer text-center">
        Golang
    </div>
  </div>
  <div class="card">
    <div class="card-body text-center">
      <img class="card-img-top" src="/images/icons/dart-icon.png" alt="Dart icon">
      <a href="../toolkit_api/dart" class="stretched-link"></a>
    </div>
    <div class="card-footer text-center">
        Dart
    </div>
  </div>
  <div class="card">
    <div class="card-body text-center">
      <img class="card-img-top" src="/images/icons/python-icon.png" alt="Python icon">
      <a href="../toolkit_api/python" class="stretched-link"></a>
    </div>
    <div class="card-footer text-center">
        Python
    </div>
  </div>
  <div class="card">
    <div class="card-body text-center">
      <img class="card-img-top" src="/images/icons/java-icon.png" alt="Java icon">
      <a href="../toolkit_api/java" class="stretched-link"></a>
    </div>
    <div class="card-footer text-center">
        Java
    </div>
  </div>
</div>

<br>

Moreover, to support the big number of existing deployment platforms, Pip.Services uses the concept of containerization. This allows for the packaging of microservice components into different types of containers that support the most common existing platforms - such as Processes, Docker, AWS Lambda, Azure Functions, and Google Cloud Functions, and the reuse of over 90% of the implemented and tested code in the process.

<div class="card-group intro-cards technology-cards">
  <div class="card">
    <img class="card-img-top" src="/images/icons/system_processes.svg" alt="System process icon">
    <div class="card-footer text-center">
      <b>System Processes</b>
    </div>
  </div>
   <div class="card">
    <img class="card-img-top" src="images/icons/docker.svg" alt="Docker icon">
    <div class="card-footer text-center">
      <b>Docker</b>
    </div>
  </div>
   <div class="card">
    <img class="card-img-top" src="/images/icons/aws_lambda.svg" alt="AWS icon">
    <div class="card-footer text-center">
      <b>AWS Lambda</b>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="/images/icons/azure_functions.svg" alt="Azure icon">
    <div class="card-footer text-center">
      <b>Azure Functions</b>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="/images/icons/google_cloud_functions.svg" alt="GCP icon">
    <div class="card-footer text-center">
      <b>Cloud Functions</b>
    </div>
  </div>
</div>

<br>

#### Organized in a modular fashion
The toolkit is designed in a modular fashion, where there are a few core modules that provide common abstractions and patterns, and a growing number of additional modules that offer reusable components and patterns built on top of popular technologies. This approach facilitates the optimization of microservice dependencies and the rapid expansion of the toolkit's functionalities.  

At present, the toolkit contains the following modules:


<div class="container">
  <div class="row justify-content-center intro-cards toolkit-card">
    <div class="card">
      <div class="card-body text-center">
        <b>Commons</b>
        <!-- <a href="node" class="stretched-link"></a> -->
      </div>
    </div>
    <div class="card">
      <div class="card-body text-center">
        <b>Components</b>
        <!-- <a href="net" class="stretched-link"></a> -->
      </div>
    </div>
    <div class="card">
      <div class="card-body text-center">
        <b>Containers</b>
        <!-- <a href="golang" class="stretched-link"></a> -->
      </div>
    </div>
    <div class="card">
      <div class="card-body text-center">
        <b>Data</b>
        <!-- <a href="golang" class="stretched-link"></a> -->
      </div>
    </div>
    <div class="card">
      <div class="card-body text-center">
        <b>RPC</b>
        <!-- <a href="golang" class="stretched-link"></a> -->
      </div>
    </div>
    <div class="card">
      <div class="card-body text-center">
        <b>Messaging</b>
        <!-- <a href="golang" class="stretched-link"></a> -->
      </div>
    </div>
  </div>

  <div class="row justify-content-center intro-cards toolkit-card">
    <div class="card">
      <div class="card-body text-center">
        <b>AWS</b>
        <!-- <a href="node" class="stretched-link"></a> -->
      </div>
    </div>
    <div class="card">
      <div class="card-body text-center">
        <b>Azure</b>
        <!-- <a href="net" class="stretched-link"></a> -->
      </div>
    </div>
    <div class="card">
      <div class="card-body text-center">
        <b>Google Cloud</b>
        <!-- <a href="golang" class="stretched-link"></a> -->
      </div>
    </div>
    <div class="card">
      <div class="card-body text-center">
        <b>Mongo</b>
        <!-- <a href="golang" class="stretched-link"></a> -->
      </div>
    </div>
    <div class="card">
      <div class="card-body text-center">
        <b>MySQL</b>
        <!-- <a href="golang" class="stretched-link"></a> -->
      </div>
    </div>
    <div class="card">
      <div class="card-body text-center">
        <b>SQLServer</b>
        <!-- <a href="golang" class="stretched-link"></a> -->
      </div>
    </div>
  </div>

  <div class="row justify-content-center intro-cards toolkit-card">
    <div class="card">
      <div class="card-body text-center">
        <b>Postgres</b>
        <!-- <a href="node" class="stretched-link"></a> -->
      </div>
    </div>
    <div class="card">
      <div class="card-body text-center">
        <b>Cassandra</b>
        <!-- <a href="net" class="stretched-link"></a> -->
      </div>
    </div>
    <div class="card">
      <div class="card-body text-center">
        <b>Couchbase</b>
        <!-- <a href="golang" class="stretched-link"></a> -->
      </div>
    </div>
    <div class="card">
      <div class="card-body text-center">
        <b>SQLite</b>
        <!-- <a href="golang" class="stretched-link"></a> -->
      </div>
    </div>
    <div class="card">
      <div class="card-body text-center">
        <b>Redis</b>
        <!-- <a href="golang" class="stretched-link"></a> -->
      </div>
    </div>
    <div class="card">
      <div class="card-body text-center">
        <b>Memcached</b>
        <!-- <a href="golang" class="stretched-link"></a> -->
      </div>
    </div>
  </div>

  <div class="row justify-content-center intro-cards toolkit-card">
    <div class="card">
      <div class="card-body text-center">
        <b>MQTT</b>
        <!-- <a href="node" class="stretched-link"></a> -->
      </div>
    </div>
    <div class="card">
      <div class="card-body text-center">
        <b>Kafka</b>
        <!-- <a href="net" class="stretched-link"></a> -->
      </div>
    </div>
    <div class="card">
      <div class="card-body text-center">
        <b>NATS</b>
        <!-- <a href="golang" class="stretched-link"></a> -->
      </div>
    </div>
    <div class="card">
      <div class="card-body text-center">
        <b>RabbitMQ</b>
        <!-- <a href="golang" class="stretched-link"></a> -->
      </div>
    </div>
    <div class="card">
      <div class="card-body text-center">
        <b>ActiveMQ</b>
        <!-- <a href="golang" class="stretched-link"></a> -->
      </div>
    </div>
    <div class="card">
      <div class="card-body text-center">
        <b>Prometheus</b>
        <!-- <a href="golang" class="stretched-link"></a> -->
      </div>
    </div>
  </div>

  <div class="row justify-content-center intro-cards toolkit-card">
    <div class="card">
      <div class="card-body text-center">
        <b>Grpc</b>
        <!-- <a href="net" class="stretched-link"></a> -->
      </div>
    </div>
    <div class="card">
      <div class="card-body text-center">
        <b>Elasticsearch</b>
        <!-- <a href="golang" class="stretched-link"></a> -->
      </div>
    </div>
    <div class="card">
      <div class="card-body text-center">
        <b>Datadog</b>
        <!-- <a href="golang" class="stretched-link"></a> -->
      </div>
    </div>
    <div class="card">
      <div class="card-body text-center">
        <b>Swagger</b>
        <!-- <a href="golang" class="stretched-link"></a> -->
      </div>
    </div>
    <div class="card">
      <div class="card-body text-center">
        <b>Fluentd</b>
        <!-- <a href="golang" class="stretched-link"></a> -->
      </div>
    </div>
    <div class="card">
      <div class="card-body text-center">
        <b>Expressions</b>
        <!-- <a href="golang" class="stretched-link"></a> -->
      </div>
    </div>
  </div>
</div>

<br>

#### Reusable building blocks

The Pip.Services toolkit consists of a set of nine building blocks that can be implemented in any of the supported programming languages. With a focus on rapid architecting and development, these nine building blocks offer the reusable components and patterns that developers need to create feature-rich, production-grade microservices in a short time.


<table class="table entry-table">
  <tr>
    <td>
      <a href="./beginner_tutorials/building_blocks/components">
          <h5>
            Components
          </h5>
      </a>
    </td>
    <td>
      <a href="./beginner_tutorials/building_blocks/components">
        <p>
          Pip.Services toolkit is built around components, which can be created from scratch, obtained from existing code via simple augmentation, or selected from a large collection of prebuilt modules. These components are assembled into fully-functional microservices using a number of inversion-of-control containers.
        </p>
      </a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="./beginner_tutorials/building_blocks/data_handling">
        <h5>
          Data handling
        </h5>
      </a>
    </td>
    <td>
      <a href="./beginner_tutorials/building_blocks/data_handling">
        <p>
          Pipelines receive data in many different and sometimes incompatible formats. To help facilitate this diversity of data, PIP.Services offers tools for the conversion to common formats, methods for the construction of complex validation rules, and components for filtering, sorting and paging data sets.
        </p>
      </a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="./beginner_tutorials/building_blocks/configurations">
        <h5>
          Configurations
        </h5>
      </a>
    </td>
    <td> 
      <a href="./beginner_tutorials/building_blocks/configurations">
        <p>
          PIP.Services offers the flexibility to configure components at runtime and deployment time.
        </p>
      </a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="./beginner_tutorials/building_blocks/connectivity">
        <h5>
          Connectivity
        </h5>
      </a>
    </td>
    <td>
      <a href="./beginner_tutorials/building_blocks/connectivity">
        <p>
          Applications need to work with other apps. For this, PIP.Services offers discovery components and credential stores.
        </p>
      </a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="./beginner_tutorials/building_blocks/observability">
        <h5>
          Observability
        </h5>
      </a>
    </td>
    <td>
      <a href="./beginner_tutorials/building_blocks/observability">
        <p>
          Applications require an understanding of how the system is behaving through continuous monitoring of their behavior. PIP.Services contains several components that allow for the implementation of logging, tracing and metrics with a few lines of code.
        </p>
      </a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="./beginner_tutorials/building_blocks/persistence">
        <h5>
          Persistence
        </h5>
      </a>
    </td>
    <td>
      <a href="./beginner_tutorials/building_blocks/persistence">
        <p>
          Data needs to be persisted in different storages, such as memory, and relational and NoSQL databases. For this, Pip.Services offers a broad collection of persistent components that support a variety of the most popular databases.
        </p>
      </a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="./beginner_tutorials/building_blocks/synchronous_calls">
        <h5>
          Synchronous calls
        </h5>
      </a>
    </td>
    <td>
      <a href="./beginner_tutorials/building_blocks/synchronous_calls">
        <p>
          Microservices need to communicate with each other. The simplest and most widely used method of communication is via synchronous remote procedure calls. For this, Pip.Services offers components for in-process and inter-process communication via a number of technologies like HTTP/REST or GRPC. The implemented Commandable pattern helps to build a reliable fully-featured communication between microservices in minutes.
        </p>
      </a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="./beginner_tutorials/building_blocks/asynchronous_messaging">
        <h5>
          Asynchronous messaging
        </h5>
      <a>
    </td>
    <td>
      <a href="./beginner_tutorials/building_blocks/asynchronous_messaging">
        <p>
          Messaging provides another way to communicate between microservices. Pip.Services offers components that abstract various message brokers like MQTT, Kafka, RabbitMQ and NATS, and provide a portable communication layer to enable event-driven microservices.
        </p>
      </a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="./beginner_tutorials/building_blocks/concurrency">
        <h5>
          Concurrency
        </h5>
      </a>
    </td>
    <td>
      <a href="./beginner_tutorials/building_blocks/concurrency">
        <p>
          To achieve a high scale and reliability, microservices need to support horizontal scaling where multiple copies of the same microservice work concurrently. To prevent conflicts and enable complex collaboration scenarios, Pip.Services offers components like distributed caches and locks.
        </p>
      </a>
    </td>
  </tr>
</table>

<br>

#### Fast learning, fast development

One of the most pressing aspects that developers face is keeping up with the pace of knowledge and technology changes.  

Pip.Services' inner design based on building blocks and reusable components that embrace current best practices and patterns reduces the amount of time necessary to achieve programming productivity. Developers can concentrate on specific technologies, use the language of their preference and obtain new skills based on what they already know, without the need to master the entire development tool.  

In addition, its symmetric implementation provides a common ground that speeds up communication and knowledge transfer between developers and teams.  

The result is that, as experience demonstrates, an average developer with proper training can become productive in two to three weeks; and, once the toolkit has been adopted, total development efficiency can double or even triple.  

#### Designed for long-living systems
Present-day technologies and business requirements change fast. Pip.Services was designed with these challenges in mind and with the idea of creating adaptable systems that stand the test of time and are functional and performant.   

Its architecture based on a modular approach and reusable components makes this toolkit easily adaptable to business and technical innovations. Its fast learning and development style helps developers to implement those updates swiftly and accurately. And, its symmetric language implementation means that adding a new language is simply a matter of building on what already exists.

</div>


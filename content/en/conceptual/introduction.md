---
type: docs
no_list: true
title: "Introduction"
linkTitle: "Introduction"
weight: 1
---

Pip.Services is a multi-language, cross-platform toolkit that makes it easy for developers to create long-living microservice systems. From its beginnings, the toolkit was designed to be expandable and portable across programming languages and, at the same time, support microservice deployment on existing and future platforms.

#### Multi-language, cross-platform 

The current technical environment is characterized by a variety of programming languages and deployment platforms. Pip.Services embraces this diversity through symmetric language implementation and containerization.  

Symmetric implementation means that for every programming language it is implemented in, there is a common set of classes, methods, and method signatures that applies to all implemented languages. This carefully designed architecture allows the toolkit to support a variety of programming languages that can be compiled or interpreted, statically- or dynamically-typed, object-oriented or not. Currently, the toolkit is available in six different languages namely, Go, Node.js, .NET, Python, Dart, and Java.  

<div id="intro-langs" class="row mr-3">
  <div class="col-6 col-md-12 d-flex pb-md-4 justify-content-center">
    <div class="card-deck title-cards">
      <div class="card">
        <div class="card-body text-center">
          <img class="card-img-top" src="/images/icons/nodejs-icon.png" alt="Node.js icon">
          <a href="../../toolkit_api/node" class="stretched-link"></a>
        </div>
        <div class="card-footer text-center">
            <b>Node.js</b>
        </div>
      </div>
      <div class="card">
        <div class="card-body text-center">
          <img class="card-img-top" src="/images/icons/dotnet-icon.png" alt="Dotnet icon">
          <a href="../../toolkit_api/net" class="stretched-link"></a>
        </div>
        <div class="card-footer text-center">
            <b>.NET</b>
        </div>
      </div>
      <div class="card">
        <div class="card-body text-center">
          <img class="card-img-top" src="/images/icons/golang-icon.png" alt="Golang icon">
          <a href="../../toolkit_api/golang" class="stretched-link"></a>
        </div>
        <div class="card-footer text-center">
            <b>Golang</b>
        </div>
      </div>
    </div>
  </div>
  
  <div class="col-6 col-md-12 d-flex justify-content-center">
    <div class="card-deck title-cards">
      <div class="card">
        <div class="card-body text-center">
          <img class="card-img-top" src="/images/icons/dart-icon.png" alt="Dart icon">
          <a href="../../toolkit_api/dart" class="stretched-link"></a>
        </div>
        <div class="card-footer text-center">
            <b>Dart</b>
        </div>
      </div>
      <div class="card">
        <div class="card-body text-center">
          <img class="card-img-top" src="/images/icons/python-icon.png" alt="Python icon">
          <a href="../../toolkit_api/python" class="stretched-link"></a>
        </div>
        <div class="card-footer text-center">
            <b>Python</b>
        </div>
      </div>
      <div class="card">
        <div class="card-body text-center">
          <img class="card-img-top" src="/images/icons/java-icon.png" alt="Java icon">
          <a href="../../toolkit_api/java" class="stretched-link"></a>
        </div>
        <div class="card-footer text-center">
            <b>Java</b>
        </div>
      </div>
    </div>
  </div>
</div>

<br>

Moreover, to support the big number of existing deployment platforms, Pip.Services uses the concept of containerization. This allows for the packaging of microservice components into different types of containers that support the most common existing platforms - such as Processes, Docker, AWS Lambda, Azure Functions, and Google Cloud Functions -, and the reuse of over 90% of the implemented and tested code in the process.

#### Organized in a modular fashion

The toolkit is designed in a modular fashion, where there are a few core modules that provide common abstractions and patterns, and a growing number of additional modules that offer reusable components and patterns built on top of popular technologies. This approach facilitates the optimization of microservice dependencies and the rapid expansion of the toolkit’s functionalities.
At present, the toolkit contains the following modules:

##### TODO nedd add icons


#### Organized in a modular fashion
The toolkit is designed in a modular fashion, where there are a few core modules that provide common abstractions and patterns, and a growing number of additional modules that offer reusable components and patterns built on top of popular technologies. This approach facilitates the optimization of microservice dependencies and the rapid expansion of the toolkit’s functionalities.  

At present, the toolkit contains the following modules:


<div class="container ">
  <div id="intro-mods" class="row justify-content-center col-md-12 col-sm-4">
    <div class="card">
      <div class="card-body text-center">
        <b>Commons</b>
        <!-- <a href="node" class="stretched-link"></a> -->
      </div>
    </div>
    <div class="card">
      <div class="card-body text-center">
        <b>Components</b>
        <a href="net" class="stretched-link"></a>
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
        <a href="golang" class="stretched-link"></a>
      </div>
    </div>
    <div class="card">
      <div class="card-body text-center">
        <b>Messaging</b>
        <!-- <a href="golang" class="stretched-link"></a> -->
      </div>
    </div>
  </div>

  <div id="intro-mods" class="row justify-content-center col-md-12 col-sm-4">
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

  <div id="intro-mods" class="row justify-content-center col-md-12 col-sm-4">
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

  <div id="intro-mods" class="row justify-content-center col-md-12 col-sm-4">
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

  <div id="intro-mods" class="row justify-content-center col-md-12 col-sm-4">
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


#### Reusable building blocks

The Pip.Services toolkit consists of a set of nine building blocks that can be implemented in any of the supported programming languages. With a focus on rapid architecting and development, these nine building blocks offer the reusable components and patterns that developers need to create feature-rich, production-grade microservices in a short time.

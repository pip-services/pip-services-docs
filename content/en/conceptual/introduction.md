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
          <a href="node" class="stretched-link"></a>
        </div>
        <div class="card-footer text-center">
            <b>Node.js</b>
        </div>
      </div>
      <div class="card">
        <div class="card-body text-center">
          <img class="card-img-top" src="/images/icons/dotnet-icon.png" alt="Dotnet icon">
          <a href="net" class="stretched-link"></a>
        </div>
        <div class="card-footer text-center">
            <b>.NET</b>
        </div>
      </div>
      <div class="card">
        <div class="card-body text-center">
          <img class="card-img-top" src="/images/icons/golang-icon.png" alt="Golang icon">
          <a href="golang" class="stretched-link"></a>
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
          <a href="dart" class="stretched-link"></a>
        </div>
        <div class="card-footer text-center">
            <b>Dart</b>
        </div>
      </div>
      <div class="card">
        <div class="card-body text-center">
          <img class="card-img-top" src="/images/icons/python-icon.png" alt="Python icon">
          <a href="python" class="stretched-link"></a>
        </div>
        <div class="card-footer text-center">
            <b>Python</b>
        </div>
      </div>
      <div class="card">
        <div class="card-body text-center">
          <img class="card-img-top" src="/images/icons/java-icon.png" alt="Java icon">
          <a href="java" class="stretched-link"></a>
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


TODO: ....


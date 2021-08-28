---
type: docs
no_list: true
title: "Microservice Dockerization"
linkTitle: "Microservice Dockerization" 
---
---

### Introduction

Running microservices in Docker containers has become one of the most popular ways of deploying a system. However, Docker can be used for much more. Containers can be used for automating builds and testing, resulting in a 100% standardized process between developers and the CI/CD pipelines on build servers.

In this tutorial, we will be demonstrating the entire process of building a microservice using Docker containers - from compiling the source code, to composing the built microservice in a container and publishing it to a repository. This can be done with any language that is supported by the Pip.Services Toolkit.

The scripts used in this tutorial are meant to be used by developers, as well as by CI/CD pipelines. At the same time however, the CI/CD pipelines are always simple and look alike, no matter the language or features of the microservice itself. Build, Test, Package, and Publish scripts make up the standard set that we use in our projects.

![Pipeline scheme](/images/tutorials/microservice_dockerization/pipeline_scheme.png)

### Creating a dockerized microservice

To make it easier to follow along, we’ve broken up this tutorial into the following steps:

- [Step 1. Setting up the environment](step0)
- [Step 2. Building a microservice](step1)
- [Step 3. Running automated tests](step2)
- [Step 4. Packaging a microservice into a container](step3)
- [Step 5. Publishing a microservice container to a registry](step4)
- [Step 6. Running a dockerized microservice](step5)


<span class="hide-title-link">

#### [Step 1. Setting up the environment](step1)
#### [Step 2. Building a microservice](step1)
#### [Step 3. Running automated tests](step2)
#### [Step 4. Packaging a microservice into a container](step3)
#### [Step 5. Publishing a microservice container to a registry](step4)
#### [Step 6. Running a dockerized microservice](step5)

</span>

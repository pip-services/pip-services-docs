---
type: docs
title: "Getting Started"
linkTitle: "Getting Started" 
weight: 2
no_list: true
exclude_from_list: true
---
---

### [Toolkit Architecture](toolkit_architecture)
The Pip.Services toolkit is divided into a few dozen modules. A small part of these modules make up the core itself, while the rest are optional add ons. This approach simplifies adding new functionality and minimizes dependencies on 3rd party libraries.

### [Microservice Structure](microservice_structure)
In essence, microservices are an architectural style that structures a system as a set of relatively small services. Each of these services has its own independent life cycle, and communication between them is usually built upon light-weight communication protocols. However, there don’t exist any standards regarding the structure of the microservices themselves. Each company, team, and/or developer is free to choose a design that fits their own unique requirements.

### [Setup environment](setup_environment)
Before we can start writing-up some microservices, we’ll need to install a few mandatory prerequisites. These include a compiler and an IDE, a Git client, a database such as MongoDB, and a container such as Docker that will allow us to start up all the necessary infrastructure services.

### [Your first microservice](your_first_microservice)
So, let’s start developing microservices using the Pip.Services toolkit. As a simple example, we will make a Hello World microservice, which will greet you in response to your request. The communication protocol will be HTTP REST.

### [Frequently Asked Questions](faq)
Here you will find answers to questions such as what is the origin of the toolkit’s name, how stable is PIP.Services, and more.

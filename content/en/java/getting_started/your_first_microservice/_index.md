---
type: docs
no_list: true
title: "Your first microservice in Java"
linkTitle: "Your first microservice"
weight: 30
---

So, let’s start developing microservices using the Pip.Services toolkit. As a simple example, we will make a Hello World microservice, which will greet you in response to your request. The communication protocol will be HTTP REST.

The microservice is structurally made up of these components:

- The controller, which generates responses to requests
- A REST service for the transmission of responses and requests
- The component factory for the dynamic creation of components
- A container process, which will be filled with the necessary components, based on yml configuration.

### Step 1. Environment setup

Before we can start writing-up some microservices, we’ll need to install a few mandatory prerequisites.

#### 1. Compiler and IDE

First and foremost - we’ll need a compiler for your programming language of choice, as well as some sort of code editor. In our examples, we usually use Visual Studio Code, but any fitting IDE will do.

For working with the Java programming language, you’ll need to perform its installation and setup the environment. To do this, download and install Java from their official site https://www.java.com/ru/download/manual.jsp. Select the download that corresponds to the operating system you’re using, and follow the installation instructions listed on their site.

Once installed, check that the installation was completed successfully by running the following command from your console:

```bash
java -version
```

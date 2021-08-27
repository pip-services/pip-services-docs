---
type: docs
no_list: true
title: "Step 1. Setting up the environment"
linkTitle: "Setup environment"
weight: 20

---

Before we can start writing-up some microservices, we’ll need to install a few mandatory prerequisites.

### 1. Compiler and IDE

First and foremost - we’ll need a compiler for your programming language of choice, as well as some sort of code editor. In our examples, we usually use Visual Studio Code, but any fitting IDE will do.

For working with the Node.js programming language, you’ll need to perform its installation and setup the environment. To do this, download and install Node.js from their official site https://nodejs.org/en/download/ . Select the download that corresponds to the operating system you’re using, and follow the installation instructions listed on their site.

Once installed, check that the installation was completed successfully by running the following command from your console:

```bash
node -version
```

If everything was installed successfully, the screen will display the latest version of the Node.js programming language.
We’ll be needing a few additional instruments - use the following commands to install them as well:

```bash
# Install typescript compiler
npm install typescript -g
# Install typescript definitions utility
npm install tsd -g 
# Install typescript api document generator
npm install typedoc -g
# Install mocha test runner
npm install mocha -g
```

### 2. Git client
Example projects are stored in repositories on github.com. To download their source code to your computer, you’ll need a Git client. You can download and install Git using the following link: https://git-scm.com/downloads

If you don’t feel comfortable using the Git CLI, you can download and install an additional UI utility called GitHub Desktop. The installation procedure for GitHub Desktop can be found on github.com.

### 3. MongoDB
Data microservice examples use MongoDB for storing data. You can either install MongoDB locally on your computer, or start it in a docker container.

To install MongoDB locally, download the installer from their official website https://www.mongodb.org/downloads . Select the download that corresponds to the operating system you’re using, and follow the installation instructions listed on their site.

### 4.Docker
Microservices that are developed using Pip.Services have more than just one way of being launched. For example, they can be launched as a system process, as a serverless (Lambda) function, or as a Service Fabric microservice. However, the most popular method of launching these microservices is to assemble them into a Docker container. Additionally, Docker will allow us to start up all the necessary infrastructure services, such as: databases, message brokers, logging, and monitoring.

To install Docker, download the Docker Desktop installer that corresponds to the operating system you’re using from the official Docker site https://www.docker.com/get-started. Once downloaded, launch the installer and follow the installation instructions.

Once installed, check that the installation was completed successfully by running the following commands from your console:

```bash
docker --version
```

If everything was installed successfully, the screen will display the latest version of Docker.

Once all of the prerequisites are installed and set up - you’re ready to get started!

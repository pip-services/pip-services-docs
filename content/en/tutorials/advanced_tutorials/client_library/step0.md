---
type: docs
no_list: true
title: "Step1. Setting up the environment"
linkTitle: "Step 1. Environment setup"
gitUrl: "https://github.com/pip-services-samples"
---

{{< tabselector "Node" ".NET" "Golang" "Dart" "Python" "Java" >}}

Before we can start writing-up some microservices, we'll need to install a few mandatory prerequisites.

### 1. Compiler and IDE

First and foremost - we'll need a compiler for your programming language of choice, as well as some sort of code editor. In our examples, we usually use Visual Studio Code, but any fitting IDE will do.

{{< tabsection >}}
  {{< include "../__code1_node.md" >}}  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code1_net.md" >}}    
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code1_go.md" >}}    
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code1_dart.md" >}}    
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "../__code1_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

### 2.Docker and Docker Compose
To install Docker, download the Docker Desktop installer that corresponds to the operating system you're using from the official [Docker site](https://www.docker.com/get-started). Once downloaded, launch the installer and follow the installation instructions.

Once installed, check that the installation was completed successfully by running the following commands from your console:

```bash
docker --version
```

If everything was installed successfully, the screen will display the latest version of Docker.

To install Docker Compose, follow the guideles available [here](https://docs.docker.com/compose/install/).    

Now that we've got the environment set up, we can move on to [Step 2. Setting up the project.](../step1)

<span class="hide-title-link">

### [Step 2. Setting up the project.](../step1)

</span>


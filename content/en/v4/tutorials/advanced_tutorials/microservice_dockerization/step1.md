---
type: docs
no_list: true
title: "Step 2. Building a microservice"
linkTitle: "Step 2. Build" 
---

{{< tabselector "Node" ".NET" "Golang" "Dart" "Python" "Java" >}}

Some of the programming languages used in the Pip.Services Toolkit require a project to be built, yielding executable files. A separate stage is used for this, which builds a special "build" Docker image. The project's source code is copied to the image, after which the container is run and the project is compiled from inside the container. If the project compiles successfully, the generated files will be copied from the container back to the project for further use.



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


Note that the file requirements.txt is copied first, then the dependencies are installed, and only after that do we copy the rest of the source code. This is done to speed up container creation during future runs, as the steps that haven't changed from the last run are simply taken from Docker's cache. In other words, unless we add or remove a dependency, Docker can use the cached image with all of the dependencies already installed, and only has to perform the "copy" steps when we change the project's source code.

In our projects, we strive to make our scripts as universal as possible. Because of this, all variable values are defined in a separate file named **component.json**, which looks like this:

```json
{
    "name":  "component-name",
    "registry":  "registry-name",
    "version":  "1.0.0",
    "build":    "1"
}

```

This file contains basic information about the component we are dealing with: its name, Docker Hub registry, version, and build number.

We've developed a special script called **build.ps1** for building our projects. This script is written in PowerShell - a scripting language used for creating system scripts. Since version 6.0, PowerShell is supported by most platforms that are used for development, such as Windows, Mac, and Linux. If for some reason PowerShell can't be used, you can rewrite the script using bash or any other scripting language.

```ps1
#!/usr/bin/env pwsh

Set-StrictMode -Version latest
$ErrorActionPreference = "Stop"

# Get component data and set necessary variables
$component = Get-Content -Path "component.json" | ConvertFrom-Json
$buildImage="$($component.registry)/$($component.name):$($component.version)-$(
$component.build)-build"
$container=$component.name

# Get build number from teamcity agent
$component.build = $env:BUILD_NUMBER
Set-Content -Path "component.json" -Value $($component | ConvertTo-Json)

# Copy private keys to access git repo
if (-not (Test-Path -Path "docker/id_rsa")) {
    if ($env:GIT_PRIVATE_KEY -ne $null) {
        Set-Content -Path "docker/id_rsa" -Value $env:GIT_PRIVATE_KEY
    } else {
        Copy-Item -Path "~/.ssh/id_rsa" -Destination "docker"
    }
}

# Build docker image
docker build -f docker/Dockerfile.build -t $buildImage .

# Create container, then destroy
docker create --name $container $buildImage
docker rm $container

```


This script generates a name for the image using the data in the **component.json** file, cleans the project of files from previous compilations, runs the Docker build scenario, and then copies the compiled files from the image back into the project. Once the files are copied, the container is deleted, and the script outputs the results of the build to the console.

This finishes up the build process. Continue on to [Step 3](../step2) to dockerize the testing process.

<span class="hide-title-link">

### [Step 3. Running automated tests.](../step2)

</span>

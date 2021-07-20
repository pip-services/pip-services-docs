---
type: docs
no_list: true
title: "Step 1. Build"
linkTitle: "Step 1. Build" 
---

Some of the programming languages used in the Pip.Services Toolkit require a project to be built, yielding executable files. A separate stage is used for this, which builds a special “build” Docker image. The project’s source code is copied to the image, after which the container is run and the project is compiled from inside the container. If the project compiles successfully, the generated files will be copied from the container back to the project for further use.

To perform the build process for a .NET project, we’ll be creating a Docker container build scenario in a file named **Dockerfile.build**. Copy the following into this file:

```dockerfile
FROM mcr.microsoft.com/dotnet/core/sdk:3.1

# Set working directory
WORKDIR /app

# Restore
COPY src/Interface/Interface.csproj ./src/Interface/
RUN dotnet restore --disable-parallel src/Interface/Interface.csproj
COPY src/Service/Service.csproj ./src/Service/
RUN dotnet restore --disable-parallel src/Service/Service.csproj
COPY src/Client/Client.csproj ./src/Client/
RUN dotnet restore --disable-parallel src/Client/Client.csproj
COPY src/Process/Process.csproj ./src/Process/
RUN dotnet restore --disable-parallel src/Process/Process.csproj
COPY test/Service.Test/Service.Test.csproj ./test/Service.Test/
RUN dotnet restore --disable-parallel test/Service.Test/Service.Test.csproj
COPY test/Client.Test/Client.Test.csproj ./test/Client.Test/
RUN dotnet restore --disable-parallel test/Client.Test/Client.Test.csproj

# Copy src
COPY . .

# Publish
RUN dotnet build src/Process/Process.csproj
RUN dotnet publish src/Process/Process.csproj -o /obj

# Pack Nuget
RUN dotnet build src/Interface/Interface.csproj -c Release
RUN dotnet pack src/Interface/Interface.csproj -c Release -o ../../../dist
RUN dotnet build src/Service/Service.csproj -c Release
RUN dotnet pack src/Service/Service.csproj -c Release -o ../../../dist
RUN dotnet build src/Client/Client.csproj -c Release
RUN dotnet pack src/Client/Client.csproj -c Release -o ../../../dist

```

This file, along with the others we will be creating, should be placed in the docker folder at the root of the project.

Let’s have a look at what this Docker script will be doing. The standard Core SDK v3 image is going to be used as the base image. Next, /app is set as the working directory and our project’s **csproj** files is copied there and restore dependencies. This file contains a list of dependencies that are required to build the project, which are installed using the **dotnet restore** command. The last steps of the script simply copies the rest of the project to the image and performs compilation using the **build** command.

Note these the **csproj** files is copied first, then the dependencies are installed, and only after that do we copy the rest of the source code. This is done to speed up container creation during future runs, as the steps that haven’t changed from the last run are simply taken from Docker’s cache. In other words, unless we add or remove a dependency, Docker can use the cached image with all of the dependencies already installed, and only has to perform the “copy” and “compile” steps when we change the project’s source code.

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

We’ve developed a special script called **build.ps1** for building our projects. This script is written in PowerShell - a scripting language used for creating system scripts. Since version 6.0, PowerShell is supported by most platforms that are used for development, such as Windows, Mac, and Linux. If for some reason PowerShell can’t be used, you can rewrite the script using bash or any other scripting language.

```ps1
#!/usr/bin/env pwsh

Set-StrictMode -Version latest
$ErrorActionPreference = "Stop"

$component = Get-Content -Path "component.json" | ConvertFrom-Json

# Get buildnumber from github actions
if ($env:GITHUB_RUN_NUMBER -ne $null) {
    $component.build = $env:GITHUB_RUN_NUMBER
    Set-Content -Path "component.json" -Value $($component | ConvertTo-Json)
}

$buildImage="$($component.registry)/$($component.name):$($component.version)-$($component.build)-build"
$container=$component.name

# Remove build files
if (Test-Path "obj") {
    Remove-Item -Recurse -Force -Path "obj"
}

# Build docker image
docker build -f docker/Dockerfile.build -t $buildImage .

# Create and copy compiled files, then destroy
docker create --name $container $buildImage
docker cp "$($container):/obj" ./obj
docker rm $container

if (!(Test-Path ./obj)) {
    Write-Host "obj folder doesn't exist in root dir. Build failed. Watch logs above."
    exit 1
}
```


This script generates a name for the image using the data in the component.json file, cleans the project of files from previous compilations, runs the Docker build scenario, and then copies the compiled files from the image back into the project. Once the files are copied, the container is deleted, and the script outputs the results of the build to the console.

If the build was successful, the project will have an /obj directory added, containing the newly compiled files.

This finishes up the build process. Continue on to [Step 2 to dockerize the testing process.](../step2)

<span class="hide-title-link">

### [Step 2. Running automated tests.](../step2)

</span>

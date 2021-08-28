---
type: docs
no_list: true
title: "Step 2. Creating the Project’s Structure"
linkTitle: "Step 2. Project’s Structure" 
gitUrl: "https://github.com/pip-services-samples/facade-sample-dotnet"
---

In this tutorial, we will be using a demo project to develop a small facade for a system that consists of a few microservices:

- Beacons - business logic microservice that performs the main operations of the system.
- Accounts - microservice for managing user accounts
- Passwords - microservice for managing user passwords
- Roles - microservice for managing user roles
- Sessions - microservice for processing user sessions

The Beacons microservice was demonstrated in [the Data Microservice tutorial](../../data_microservice). The rest of the microservices are from our free Pip.Services Library.


The architecture of the system looks like this:

![facade architecture diagram](/images/tutorials/microservice_facade/facade_architecture_diagram1.png)

The facade microservice will be responsible for:

- registering new users;
- authorizing users and creating sessions for them;
- checking whether or not a session has expired when an authorized user makes another request (session restoration);
- providing access to the functionality of the Beacons microservice for authorized users.

Before starting, be sure to set up your [environment](../../../getting_started/setup_environment) and create a folder for the project. The directory structure of facade projects differs a bit from the structure we use when developing data microservices.

```
/config
/docker
/test
└───/fixture
└───/services
    └───/version1
/src
└───/service
|   └───/build
|   └───/container
|   └───/operations
|   |   └───/version1
|   └───/services
|       └───/version1
|       └───/version2
└───/client
|   └───/clients
|       └───/version1
└───/process

/pip-templates-facade-dotnet.sln
```

Create a **Service.csproj**, **Client.csproj** and **Process.csproj** files at the **/src/service**, **/src/client** and **/src/process** folders with the following content to configure dependencies and project parameters:

**/src/service/service.csproj**

```xml
<Project Sdk="Microsoft.NET.Sdk">

    <PropertyGroup>
        <TargetFramework>netstandard2.0</TargetFramework>
        <AssemblyName>PipServices.Templates.Facade.Service</AssemblyName>
        <RootNamespace>PipServices.Templates.Facade</RootNamespace>
        <Version>1.0.1</Version>
        <Authors>Sergey Seroukhov, Denis Kuznetsov</Authors>
        <Copyright>Conceptual Vision Consulting LLC. 2017-2020</Copyright>
        <Description>PipServices.Templates facade</Description>
      <Company>Conceptual Vision Consulting LLC.</Company>
      <Product>PipServices.Templates.Facade</Product>
    </PropertyGroup>

    <ItemGroup>
        <Compile Remove="Data.cs" />
    </ItemGroup>
    <ItemGroup>
      <PackageReference Include="PipServices3.Commons" Version="3.1.2" />
      <PackageReference Include="PipServices3.Container" Version="3.1.1" />
      <PackageReference Include="PipServices3.Rpc" Version="3.3.9" />
    </ItemGroup>
    <ItemGroup>
      <ProjectReference Include="..\Client\Client.csproj" />
    </ItemGroup>
</Project>
```

**/src/client/client.csproj**
```xml
<Project Sdk="Microsoft.NET.Sdk">

    <PropertyGroup>
        <TargetFramework>netstandard2.0</TargetFramework>
        <AssemblyName>PipServices.Templates.Facade.Client</AssemblyName>
        <RootNamespace>PipServices.Templates.Facade</RootNamespace>
        <Version>1.0.0</Version>
    </PropertyGroup>

    <ItemGroup>
      <PackageReference Include="PipServices3.Commons" Version="3.1.2" />
    </ItemGroup>

</Project>

```

**/src/process/process.csproj**
```xml
<Project Sdk="Microsoft.NET.Sdk">

    <PropertyGroup>
        <TargetFramework>netcoreapp2.1</TargetFramework>
        <OutputType>Exe</OutputType>
        <AssemblyName>run</AssemblyName>
    </PropertyGroup>

    <ItemGroup>
      <ProjectReference Include="..\Service\Service.csproj" />
    </ItemGroup>

</Project>

```

Install all necessary dependencies using the command:

```bash
dotnet restore
```

Now our project is ready for development. Continue on to [Step 3 - Business operations](../step2).


<span class="hide-title-link">

### [Step 3. Designing a Direct Client](../step2)

</span>

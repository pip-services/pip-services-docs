Create a **Service.csproj**, **Client.csproj** and **Process.csproj** files at the **/src/service**, **/src/client** and **/src/process** folders with the following content to configure dependencies and project parameters:

**/src/service/service.csproj**

```xml
<Project Sdk="Microsoft.NET.Sdk">

    <PropertyGroup>
        <TargetFrameworks>netstandard2.1;net5.0</TargetFrameworks>
        <AssemblyName>Pip.Services.SampleFacade.Service</AssemblyName>
        <RootNamespace>Pip.Services.SampleFacade</RootNamespace>
        <Version>1.0.0</Version>
    </PropertyGroup>

    <ItemGroup>
        <Compile Remove="Data.cs" />
    </ItemGroup>
    <ItemGroup>
      <PackageReference Include="PipServices3.Commons" Version="3.3.0" />
      <PackageReference Include="PipServices3.Container" Version="3.2.0" />
      <PackageReference Include="PipServices3.Rpc" Version="3.5.2" />
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
      <TargetFrameworks>netstandard2.1;net5.0</TargetFrameworks>
        <AssemblyName>Pip.Services.SampleFacade.Client</AssemblyName>
        <RootNamespace>Pip.Services.SampleFacade</RootNamespace>
        <Version>1.0.0</Version>
    </PropertyGroup>

    <ItemGroup>
      <PackageReference Include="PipServices3.Commons" Version="3.3.0" />
    </ItemGroup>

</Project>

```

**/src/process/process.csproj**
```xml
<Project Sdk="Microsoft.NET.Sdk">

    <PropertyGroup>
      <TargetFramework>net5.0</TargetFramework>
        <OutputType>Exe</OutputType>
        <AssemblyName>run</AssemblyName>
    </PropertyGroup>

    <ItemGroup>
      <ProjectReference Include="..\Service\Service.csproj" />
    </ItemGroup>

</Project>


```


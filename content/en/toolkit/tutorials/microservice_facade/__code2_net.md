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


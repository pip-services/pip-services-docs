Create a folder for the project, open it and run the command:

```bash
dotnet new console
```

This command will automatically create two files: HelloWorld.csproj and Program.cs. Open the HelloWorld.csproj file and add the necessary dependencies to it.

**/HelloWorld.csproj**

```xml
<Project Sdk="Microsoft.NET.Sdk">  
  <PropertyGroup>    
    <OutputType>Exe</OutputType>    
    <TargetFramework>netcoreapp3.1</TargetFramework>  
  </PropertyGroup>  
  <ItemGroup>    
    <PackageReference Include="PipServices3.Commons" Version="3.1.0" />    
    <PackageReference Include="PipServices3.Components" Version="3.1.0" />    
    <PackageReference Include="PipServices3.Container" Version="3.1.0" />    
    <PackageReference Include="PipServices3.Data" Version="3.1.0" />    
    <PackageReference Include="PipServices3.Rpc" Version="3.3.0" />  
  </ItemGroup>
</Project>
```

In the command line, type out the command below to install the dependencies:

```bash
dotnet restore
```

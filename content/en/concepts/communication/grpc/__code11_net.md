
For C# add next configs to project file **csproj**  

```yml
<ItemGroup>
  <PackageReference Include="Grpc.Tools" Version="2.23.0" PrivateAssets="All" />
  <Protobuf Include="summator.proto" Link="summator.proto" OutputDir="."/>
</ItemGroup>

```

See [gRPC services with C#](https://docs.microsoft.com/en-us/aspnet/core/grpc/basics?view=aspnetcore-6.0)
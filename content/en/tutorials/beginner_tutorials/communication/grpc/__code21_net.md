
For C# add next configs to project file **csproj**  

```yml
<ItemGroup>
  <PackageReference Include="Grpc.Tools" Version="2.23.0" PrivateAssets="All" />
  <Protobuf Include="summator.proto" Link="summator.proto" OutputDir="."/>
</ItemGroup>

```

See [Add a .proto file to a C# app](https://docs.microsoft.com/en-us/aspnet/core/grpc/basics?view=aspnetcore-6.0#add-a-proto-file-to-a-c-app)
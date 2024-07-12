To perform the build process for a ,NET project, we'll be creating a Docker container build scenario in a file named **Dockerfile.build**. Copy the following into this file:     

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

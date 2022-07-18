
```dockerfile
FROM mcr.microsoft.com/dotnet/core/sdk:3.1

# set working directory
WORKDIR /app

# Restore
COPY src/src.csproj ./src/
RUN dotnet restore src/src.csproj
COPY test/test.csproj ./test/
RUN dotnet restore test/test.csproj

# Copy src
COPY . .

# Test
CMD [ "dotnet", "test", "test/test.csproj" ]

```


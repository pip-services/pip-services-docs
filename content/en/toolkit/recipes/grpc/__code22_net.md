
1. `Summator.cs` contains all the protocol buffer code to populate, serialize, and retrieve our request and response message types
2. `SummatorGrpc.cs` provides generated client and server classes, including:
    - an abstract class `Summator.SummatorBase` to inherit from when defining Summator service implementations
    - a class `Summator.SummatorClient` that can be used to access remote Summator instances

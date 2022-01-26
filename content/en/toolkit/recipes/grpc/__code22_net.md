
1. `Summator.cs` contains all the protocol buffer code to populate, serialize, and retrieve our request and response message types
2. `SummatorGrpc.cs` provides generated client and server classes, including:
    - the abstract class `Summator.SummatorBase` to inherit from when defining Summator service implementations
    - the class `Summator.SummatorClient` used to access remote Summator instances

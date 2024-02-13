
1. `summator.pb.go`, which contains all the protocol buffer code to populate, serialize, and retrieve request and response message types.
2. `summator_grpc.pb.go`, which contains the following:
    - An interface type (or stub) for clients with the methods defined in the `Summator` service.
    - An interface type for servers to implement with the methods defined in the `Summator` service.

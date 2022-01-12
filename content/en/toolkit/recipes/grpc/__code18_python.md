
```
syntax = "proto3";

message Number {
    float value = 1;
}

service Summator {
    rpc Sum(Number) returns (Number) {}
}
```

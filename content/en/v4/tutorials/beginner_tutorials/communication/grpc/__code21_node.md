
```ts
// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var summator_pb = require('./summator_pb.js');

function serialize_Number1(arg) {
  if (!(arg instanceof summator_pb.Number1)) {
    throw new Error('Expected argument of type Number1');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Number1(buffer_arg) {
  return summator_pb.Number1.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Number2(arg) {
  if (!(arg instanceof summator_pb.Number2)) {
    throw new Error('Expected argument of type Number2');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Number2(buffer_arg) {
  return summator_pb.Number2.deserializeBinary(new Uint8Array(buffer_arg));
}


var SummatorService = exports.SummatorService = {
  sum: {
    path: '/Summator/sum',
    requestStream: false,
    responseStream: false,
    requestType: summator_pb.Number1,
    responseType: summator_pb.Number2,
    requestSerialize: serialize_Number1,
    requestDeserialize: deserialize_Number1,
    responseSerialize: serialize_Number2,
    responseDeserialize: deserialize_Number2,
  },
};

exports.SummatorClient = grpc.makeGenericClientConstructor(SummatorService);


```

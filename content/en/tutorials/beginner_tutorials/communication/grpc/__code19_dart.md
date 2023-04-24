
```dart
///
//  Generated code. Do not modify.
//  source: summator.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields

import 'dart:async' as $async;

import 'dart:core' as $core;

import 'package:grpc/service_api.dart' as $grpc;
import 'summator.pb.dart' as $0;
export 'summator.pb.dart';

class SummatorClient extends $grpc.Client {
  static final _$sum = $grpc.ClientMethod<$0.Number1, $0.Number2>(
      '/Summator/sum',
      ($0.Number1 value) => value.writeToBuffer(),
      ($core.List<$core.int> value) => $0.Number2.fromBuffer(value));

  SummatorClient($grpc.ClientChannel channel,
      {$grpc.CallOptions? options,
      $core.Iterable<$grpc.ClientInterceptor>? interceptors})
      : super(channel, options: options, interceptors: interceptors);

  $grpc.ResponseFuture<$0.Number2> sum($0.Number1 request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$sum, request, options: options);
  }
}

abstract class SummatorServiceBase extends $grpc.Service {
  $core.String get $name => 'Summator';

  SummatorServiceBase() {
    $addMethod($grpc.ServiceMethod<$0.Number1, $0.Number2>(
        'sum',
        sum_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $0.Number1.fromBuffer(value),
        ($0.Number2 value) => value.writeToBuffer()));
  }

  $async.Future<$0.Number2> sum_Pre(
      $grpc.ServiceCall call, $async.Future<$0.Number1> request) async {
    return sum(call, await request);
  }

  $async.Future<$0.Number2> sum($grpc.ServiceCall call, $0.Number1 request);
}

```
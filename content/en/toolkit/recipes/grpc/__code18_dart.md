
```dart
///
//  Generated code. Do not modify.
//  source: summator.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields

import 'dart:core' as $core;

import 'package:protobuf/protobuf.dart' as $pb;

class Number1 extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Number1', createEmptyInstance: create)
    ..a<$core.double>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'value1', $pb.PbFieldType.OF)
    ..a<$core.double>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'value2', $pb.PbFieldType.OF)
    ..hasRequiredFields = false
  ;

  Number1._() : super();
  factory Number1({
    $core.double? value1,
    $core.double? value2,
  }) {
    final _result = create();
    if (value1 != null) {
      _result.value1 = value1;
    }
    if (value2 != null) {
      _result.value2 = value2;
    }
    return _result;
  }
  factory Number1.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Number1.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  Number1 clone() => Number1()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  Number1 copyWith(void Function(Number1) updates) => super.copyWith((message) => updates(message as Number1)) as Number1; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Number1 create() => Number1._();
  Number1 createEmptyInstance() => create();
  static $pb.PbList<Number1> createRepeated() => $pb.PbList<Number1>();
  @$core.pragma('dart2js:noInline')
  static Number1 getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Number1>(create);
  static Number1? _defaultInstance;

  @$pb.TagNumber(1)
  $core.double get value1 => $_getN(0);
  @$pb.TagNumber(1)
  set value1($core.double v) { $_setFloat(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasValue1() => $_has(0);
  @$pb.TagNumber(1)
  void clearValue1() => clearField(1);

  @$pb.TagNumber(2)
  $core.double get value2 => $_getN(1);
  @$pb.TagNumber(2)
  set value2($core.double v) { $_setFloat(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasValue2() => $_has(1);
  @$pb.TagNumber(2)
  void clearValue2() => clearField(2);
}

class Number2 extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Number2', createEmptyInstance: create)
    ..a<$core.double>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'value', $pb.PbFieldType.OF)
    ..hasRequiredFields = false
  ;

  Number2._() : super();
  factory Number2({
    $core.double? value,
  }) {
    final _result = create();
    if (value != null) {
      _result.value = value;
    }
    return _result;
  }
  factory Number2.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Number2.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  Number2 clone() => Number2()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  Number2 copyWith(void Function(Number2) updates) => super.copyWith((message) => updates(message as Number2)) as Number2; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Number2 create() => Number2._();
  Number2 createEmptyInstance() => create();
  static $pb.PbList<Number2> createRepeated() => $pb.PbList<Number2>();
  @$core.pragma('dart2js:noInline')
  static Number2 getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Number2>(create);
  static Number2? _defaultInstance;

  @$pb.TagNumber(1)
  $core.double get value => $_getN(0);
  @$pb.TagNumber(1)
  set value($core.double v) { $_setFloat(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasValue() => $_has(0);
  @$pb.TagNumber(1)
  void clearValue() => clearField(1);
}

```

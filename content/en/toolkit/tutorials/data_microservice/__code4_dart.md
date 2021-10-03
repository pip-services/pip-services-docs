
**/src/data/version1/BeaconV1.dart**

```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';

class BeaconV1 implements IStringIdentifiable {
  @override
  String id;
  String site_id;
  String type;
  String udi;
  String label;
  Map<String, dynamic> center; // GeoJson
  double radius;

  BeaconV1(
      {String id,
      String site_id,
      String type,
      String udi,
      String label,
      Map<String, dynamic> center,
      double radius})
      : id = id,
        site_id = site_id,
        type = type,
        udi = udi,
        label = label,
        center = center, // GeoJson
        radius = radius;

  void fromJson(Map<String, dynamic> json) {
    id = json['id'];
    site_id = json['site_id'];
    type = json['type'];
    udi = json['udi'];
    label = json['label'];
    center = json['center']; // GeoJson
    if (json['radius'] is int) {
      radius = json['radius'].toDouble();
    } else {
      radius = json['radius'];
    }
  }

  Map<String, dynamic> toJson() {
    return <String, dynamic>{
      'id': id,
      'site_id': site_id,
      'type': type,
      'udi': udi,
      'label': label,
      'center': center, // GeoJson
      'radius': radius
    };
  }
}


```

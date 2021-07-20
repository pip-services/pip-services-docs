---
type: docs
no_list: true
title: "Step 2. Data model development"
linkTitle: "Step 2. Data model."
gitUrl: "https://github.com/pip-services-samples/service-beacons-dart"
---

We’ll start the development of our microservice with defining and implementing the data model that it is going to be working with. We’ll start by adding some folders to our project’s directory structure. In the **src** folder, create a **data** folder and, inside it, a **version1** folder. This is done to allow us to create new versions of the data model later on, without breaking the old one.

Now, in the version1 folder, create a **BeaconV1** class that implements `IStringIdentifiable`. By implementing the `IStringIdentifiable` interface, we can be sure that all objects of that given class have a string key by which they can be identified. Below is a listing of this class’s code:

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

All fields are of simple data types, and their names give us a good idea of their purpose. The only exception to this is the center field, in which we are going to be storing data of type GeoJSON. The beacon’s type will be represented by a string, but we’re going to have a separate class be responsible for managing the available types, using static fields. This class is going to be called **BeaconTypeV1**, and it’s going to simply contain a list of beacon types:

**/src/data/version1/BeaconTypeV1.dart**

```dart
class BeaconTypeV1 {
  static final unknown = 'unknown';
  static final altBeacon = 'altbeacon';
  static final iBeacon = 'ibeacon';
  static final eddyStoneUdi = 'eddystone-udi';
}


```

For checking the validity of the data we are going to be receiving, let’s create a data validation schema in a class called **BeaconV1Schema**: 

**/src/data/version1/BeaconV1Schema.dart**

```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';

class BeaconV1Schema extends ObjectSchema {
  BeaconV1Schema() : super() {
    withOptionalProperty('id', TypeCode.String);
    withRequiredProperty('site_id', TypeCode.String);
    withOptionalProperty('type', TypeCode.String);
    withRequiredProperty('udi', TypeCode.String);
    withOptionalProperty('label', TypeCode.String);
    withOptionalProperty('center', null);
    withOptionalProperty('radius', TypeCode.Float);
  }
}


```

Let’s take a closer look at what’s going on in this class. First and foremost, we create a new class that extends the standard validation class Schema, implemented in the components module of the Pip.Services Toolkit. This class contains all of the functions that we need for checking the validity of the data we receive. All that we have to do is state which fields we are expecting, what their types should be, and whether or not any of them are required. All of this is done in the class’s constructor.

Since everything we’ve done so far is quite simple and transparent, we’re not going to be writing any tests yet for the data model we’ve created.

With our data model defined, we can now move on to [Step 3. Implementing persistence components.](../step3)


<span class="hide-title-link">

### [Step 3. Implementing persistence components.](../step3)

</span>
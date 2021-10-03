
**/src/logic/BeaconsCommandSet.dart**

```dart
import 'dart:async';

import 'package:pip_services3_commons/pip_services3_commons.dart';

import '../../src/data/version1/BeaconV1Schema.dart';
import '../../src/logic/IBeaconsController.dart';
import '../../src/data/version1/BeaconV1.dart';

class BeaconsCommandSet extends CommandSet {
  IBeaconsController _controller;

  BeaconsCommandSet(IBeaconsController controller) : super() {
    _controller = controller;

    addCommand(_makeGetBeaconsCommand());
    addCommand(_makeGetBeaconByIdCommand());
    addCommand(_makeGetBeaconByUdiCommand());
    addCommand(_makeCalculatePositionCommand());
    addCommand(_makeCreateBeaconCommand());
    addCommand(_makeUpdateBeaconCommand());
    addCommand(_makeDeleteBeaconByIdCommand());
  }

  ICommand _makeGetBeaconsCommand() {
    return Command(
        'get_beacons',
        ObjectSchema(true)
            .withOptionalProperty('filter', FilterParamsSchema())
            .withOptionalProperty('paging', PagingParamsSchema()),
        (String correlationId, Parameters args) {
      var filter = FilterParams.fromValue(args.get('filter'));
      var paging = PagingParams.fromValue(args.get('paging'));
      return _controller.getBeacons(correlationId, filter, paging);
    });
  }

  ICommand _makeGetBeaconByIdCommand() {
    return Command('get_beacon_by_id',
        ObjectSchema(true).withRequiredProperty('beacon_id', TypeCode.String),
        (String correlationId, Parameters args) {
      var beaconId = args.getAsString('beacon_id');
      return _controller.getBeaconById(correlationId, beaconId);
    });
  }

  ICommand _makeGetBeaconByUdiCommand() {
    return Command('get_beacon_by_udi',
        ObjectSchema(true).withRequiredProperty('udi', TypeCode.String),
        (String correlationId, Parameters args) {
      var udi = args.getAsString('udi');
      return _controller.getBeaconByUdi(correlationId, udi);
    });
  }

  ICommand _makeCalculatePositionCommand() {
    return Command(
        'calculate_position',
        ObjectSchema(true)
            .withRequiredProperty('site_id', TypeCode.String)
            .withRequiredProperty('udis', ArraySchema(TypeCode.String)),
        (String correlationId, Parameters args) async {
      var siteId = args.getAsString('site_id');
      var udis = List<String>.from(args.getAsObject('udis'));
      return _controller.calculatePosition(correlationId, siteId, udis);
    });
  }

  ICommand _makeCreateBeaconCommand() {
    return Command('create_beacon',
        ObjectSchema(true).withRequiredProperty('beacon', BeaconV1Schema()),
        (String correlationId, Parameters args) {
      var beacon = BeaconV1();
      beacon.fromJson(args.get('beacon'));
      return _controller.createBeacon(correlationId, beacon);
    });
  }

  ICommand _makeUpdateBeaconCommand() {
    return Command('update_beacon',
        ObjectSchema(true).withRequiredProperty('beacon', BeaconV1Schema()),
        (String correlationId, Parameters args) {
      var beacon = BeaconV1();
      beacon.fromJson(args.get('beacon'));
      return _controller.updateBeacon(correlationId, beacon);
    });
  }

  ICommand _makeDeleteBeaconByIdCommand() {
    return Command('delete_beacon_by_id',
        ObjectSchema(true).withRequiredProperty('beacon_id', TypeCode.String),
        (String correlationId, Parameters args) {
      var beaconId = args.getAsString('beacon_id');
      return _controller.deleteBeaconById(correlationId, beaconId);
    });
  }
}


```


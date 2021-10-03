
**/src/persistence/BeaconsMemoryPersistence.dart**

```dart
import 'dart:async';
import 'package:pip_services3_commons/pip_services3_commons.dart';
import 'package:pip_services3_data/pip_services3_data.dart';
import '../data/version1/BeaconV1.dart';
import './IBeaconsPersistence.dart';

class BeaconsMemoryPersistence
    extends IdentifiableMemoryPersistence<BeaconV1, String>
    implements IBeaconsPersistence {
  BeaconsMemoryPersistence() : super() {
    maxPageSize = 1000;
  }

  Function composeFilter(FilterParams filter) {
    filter = filter ?? FilterParams();

    var id = filter.getAsNullableString('id');
    var siteId = filter.getAsNullableString('site_id');
    var label = filter.getAsNullableString('label');
    var udi = filter.getAsNullableString('udi');
    var labelLike = filter.getAsNullableString('label_like');
    var udis = filter.getAsObject('udis');
    if (udis != null && udis is String) {
      udis = (udis as String).split(',');
    }
    if (udis != null && !(udis is List)) {
      udis = null;
    }

    return (item) {
      if (id != null && item.id != id) {
        return false;
      }
      if (siteId != null && item.site_id != siteId) {
        return false;
      }
      if (label != null && item.label != label) {
        return false;
      }

      if (labelLike != null) {
        var regexp = RegExp(r'^' + labelLike, caseSensitive: false);
        if (regexp.allMatches(item.label).isEmpty) {
          return false;
        }
      }

      if (udi != null && item.udi != udi) {
        return false;
      }
      if (udis != null && (udis as List).indexOf(item.udi) < 0) {
        return false;
      }
      return true;
    };
  }

  @override
  Future<DataPage<BeaconV1>> getPageByFilter(
      String correlationId, FilterParams filter, PagingParams paging) {
    return super
        .getPageByFilterEx(correlationId, composeFilter(filter), paging, null);
  }

  @override
  Future<BeaconV1> getOneByUdi(String correlationId, String udi) async {
    var item = items.firstWhere((item) => item.udi == udi);

    if (item != null) {
      logger.trace(correlationId, 'Found beacon by %s', [udi]);
    } else {
      logger.trace(correlationId, 'Cannot find beacon by %s', [udi]);
    }

    return item;
  }
}

```


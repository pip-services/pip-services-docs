
```dart
  dynamic composeFilter(FilterParams filter) {
    filter = filter ?? FilterParams();

    var criteria = [];

    var id = filter.getAsNullableString('id');
    if (id != null) {
      criteria.add({'_id': id});
    }

    var siteId = filter.getAsNullableString('site_id');
    if (siteId != null) {
      criteria.add({'site_id': siteId});
    }

    var label = filter.getAsNullableString('label');
    if (label != null) {
      criteria.add({'label': label});
    }

    var udi = filter.getAsNullableString('udi');
    if (udi != null) {
      criteria.add({'udi': udi});
    }

    var labelLike = filter.getAsNullableString('label_like');
    if (labelLike != null) {
      var regexp = RegExp(r'^' + labelLike, caseSensitive: false);
      criteria.add({r'$regex': regexp.pattern});
    }

    var udis = filter.getAsObject('udis');
    if (udis is String) {
      udis = (udis as String).split(',');
    }
    if (udis is List) {
      criteria.add({
        'udi': {r'$in': udis}
      });
    }

    return criteria.isNotEmpty ? {r'$and': criteria} : null;
  }



```


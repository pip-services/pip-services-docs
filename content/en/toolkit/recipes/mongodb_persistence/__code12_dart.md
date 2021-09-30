
```dart
@override
  Future<BeaconV1> getOneByUdi(String correlationId, String udi) async {
    var filter = {'udi': udi};
    var query = mngquery.SelectorBuilder();
    var selector = <String, dynamic>{};

    if (filter != null && filter.isNotEmpty) {
      selector[r'$query'] = filter;
    }

    query.raw(selector);

    var item = await collection.findOne(filter);

    if (item == null) {
      logger.trace(correlationId, 'Nothing found from %s with id = %s',
          [collectionName, udi]);
      return null;
    }

    logger.trace(
        correlationId, 'Retrieved from %s with id = %s', [collectionName, udi]);
    return convertToPublic(item);
  }



```


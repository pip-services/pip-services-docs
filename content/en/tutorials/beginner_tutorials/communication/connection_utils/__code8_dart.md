
```dart
import 'package:mongo_dart/mongo_dart.dart' as mongo;

import 'package:pip_services3_commons/pip_services3_commons.dart';
import 'package:pip_services3_components/pip_services3_components.dart';

void main(List<String> argument) async {
  var options = ConfigParams.fromTuples([
    'host',
    'localhost',
    'port',
    ',27017',
    'username',
    'user',
    'password',
    'pass123',
    'protocol',
    'mongodb',
    'collection',
    'my_db_name'
  ]);

  // Create connection
  var conn = MongoDbConnector();
  conn.configure(options);
  await conn.open(null);
  await conn.close(null);
}

class MongoDbConnector implements IConfigurable, IOpenable {
  // The MongoDB database.
  mongo.Db? _database;

  bool _secureMongo;
  ConfigParams? _config;
  String? databaseName;

  MongoDbConnector({bool secureMongo = false}) : _secureMongo = secureMongo;

  @override
  void configure(ConfigParams config) {
    _config = config;

    // if connection passed as uri
    if (_config!.getAsNullableString('uri') != null) {
      _config = ConnectionUtils.parseUri(
          _config!.getAsString('uri'), 'mongodb', 27017);
    }

    // if mongo without auth
    if (!_secureMongo) {
      _config = ConnectionUtils.exclude(_config!, ['username', 'password']);
    }
  }

  mongo.DbCollection getCollection() {
    return _database!.collection('test');
  }

  @override
  bool isOpen() {
    return _database != null;
  }

  Map<String, dynamic> _composeSettings() {
    var authUser = _config!.getAsNullableString('auth_user');
    var authPassword = _config!.getAsNullableString('auth_password');

    var settings = <String, dynamic>{
      'useNewUrlParser': true,
      'useUnifiedTopology': true
    };

    if (authUser != null) {
      settings['user'] = authUser;
    }
    if (authPassword != null) {
      settings['password'] = authPassword;
    }

    return settings;
  }

  @override
  Future open(String? correlationId) async {
    var collection = _config!.getAsString('collection');

    _config = ConnectionUtils.exclude(_config!, ['collection']);
    var uri = ConnectionUtils.composeUri(_config!, 'mongodb', 27017);
    uri += '/' + collection;

    try {
      var settings = _composeSettings();

      _database = mongo.Db(uri);
      await _database!.open();
      if (settings['username'] != null) {
        await _database!
            .authenticate(settings['username'], settings['password']);
      }

      databaseName = _database?.databaseName;
    } catch (ex) {
      throw ConnectionException(
              correlationId, 'CONNECT_FAILED', 'Connection to mongodb failed')
          .withCause(ex);
    }
  }

  @override
  Future close(String? correlationId) async {
    if (_database == null) {
      return null;
    }
    try {
      await _database!.close();
      _database = null;
      databaseName = null;
    } catch (err) {
      throw ConnectionException(correlationId, 'DISCONNECT_FAILED',
              'Disconnect from mongodb failed: ')
          .withCause(err);
    }
  }
}
```

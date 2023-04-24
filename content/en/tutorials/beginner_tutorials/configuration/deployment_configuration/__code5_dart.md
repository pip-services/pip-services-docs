
```dart
import 'dart:async';
import 'dart:convert';

import 'package:pip_services3_commons/pip_services3_commons.dart';
import 'package:pip_services3_components/pip_services3_components.dart';
import 'package:pip_services3_container/pip_services3_container.dart';
import 'package:pip_services3_mysql/pip_services3_mysql.dart';
import 'package:pip_services3_postgres/pip_services3_postgres.dart';
import 'package:pip_services3_rpc/pip_services3_rpc.dart';
import 'package:shelf/shelf.dart';

class MyFriend implements IStringIdentifiable, ICloneable {
  @override
  String? id;
  String? type;
  String? name;

  MyFriend();

  MyFriend.from(this.id, this.type, this.name);

  Map<String, dynamic> toJson() {
    return <String, dynamic>{'id': id, 'type': type, 'name': name};
  }

  static MyFriend fromJson(Map<String, dynamic> json) {
    var id = json['id'];
    var type = json['type'];
    var name = json['name'];

    return MyFriend.from(id, type, name);
  }

  @override
  MyFriend clone() {
    return MyFriend.from(id, type, name);
  }
}

class HelloFriendRestService extends RestService {
  HelloFriendController? controller;

  HelloFriendRestService() : super() {
    baseRoute = '/hello_friend';
  }

  @override
  void configure(ConfigParams config) {
    super.configure(config);
  }

  @override
  void setReferences(IReferences references) {
    super.setReferences(references);
    controller = references.getOneRequired(
        Descriptor('hello-friend', 'controller', '*', '*', '1.0'));
  }

  FutureOr<Response> greeting(Request req) async {
    var result = await controller?.greeting();
    return await sendResult(req, result);
  }

  FutureOr<Response> create(Request req) async {
    var correlationId = getCorrelationId(req);
    var friend = MyFriend.fromJson(json.decode(await req.readAsString()));
    var result = await controller?.create(correlationId, friend);

    return await sendResult(req, result);
  }

  @override
  void register() {
    registerRoute('GET', '/greeting', null, greeting);
    registerRoute('GET', '/greeting_create', null, create);
  }
}

class HelloFriendController implements IConfigurable, IReferenceable {
  String defaultName;
  IMyDataPersistence? persistence;

  HelloFriendController() : defaultName = 'Pip User';

  @override
  void configure(ConfigParams config) {
    defaultName = config.getAsStringWithDefault('default_name', defaultName);
  }

  @override
  void setReferences(IReferences references) {
    persistence = references.getOneRequired(
        Descriptor('hello-friend', 'persistence', '*', '*', '1.0'));
  }

  Future<String> greeting() async {
    var filter = FilterParams.fromTuples(['type', 'friend']);
    var selectedFilter = await persistence!.getOneRandom(null, filter);
    var name = selectedFilter?.name ?? '';

    return 'Hello, ' + name + ' !';
  }

  Future<MyFriend?> create(String? correlationId, MyFriend item) async {
    var res = await persistence!.create(correlationId, item);
    return res;
  }
}

abstract class IMyDataPersistence {
  Future<MyFriend?> getOneRandom(String? correlationId, FilterParams filter);
  Future<MyFriend?> create(String? correlationId, MyFriend item);
}

class HelloFriendPersistence1
    extends IdentifiableMySqlPersistence<MyFriend, String>
    implements IMyDataPersistence {
  HelloFriendPersistence1() : super('myfriends3', null);

  @override
  void defineSchema_() {
    clearSchema();
    ensureSchema_('CREATE TABLE IF NOT EXISTS `' +
        tableName_! +
        '` (id VARCHAR(32) PRIMARY KEY, `type` VARCHAR(50), `name` TEXT)');
  }

  String _composeFilter(FilterParams? filter) {
    filter ??= FilterParams();
    var type = filter.getAsNullableString('type');
    var name = filter.getAsNullableString('name');

    var filterCondition = '';
    if (type != null) {
      filterCondition += "type='" + type + "'";
    }
    if (name != null) {
      filterCondition += "name='" + name + "'";
    }

    return filterCondition;
  }

  @override
  Future<MyFriend?> getOneRandom(
      String? correlationId, FilterParams filter) async {
    return await getOneRandom_(correlationId, _composeFilter(filter));
  }
}

class HelloFriendPersistence2
    extends IdentifiablePostgresPersistence<MyFriend, String>
    implements IMyDataPersistence {
  HelloFriendPersistence2() : super('myfriends3', null);

  @override
  void defineSchema_() {
    clearSchema();
    ensureSchema_('CREATE TABLE IF NOT EXISTS ' +
        tableName_! +
        ' (id TEXT PRIMARY KEY, type TEXT, name TEXT)');
  }

  String _composeFilter(FilterParams? filter) {
    filter ??= FilterParams();
    var type = filter.getAsNullableString('type');
    var content = filter.getAsNullableString('content');

    var filterCondition = '';
    if (type != null) {
      filterCondition += "type='" + type + "'";
    }
    if (content != null) {
      filterCondition += "content='" + content + "'";
    }

    return filterCondition;
  }

  @override
  Future<MyFriend?> getOneRandom(
      String? correlationId, FilterParams filter) async {
    return super.getOneRandom_(correlationId, _composeFilter(filter));
  }
}

class HelloFriendServiceFactory extends Factory {
  HelloFriendServiceFactory() : super() {
    var HttpServiceDescriptor =
        Descriptor('hello-friend', 'service', 'http', '*', '1.0'); // View
    var ControllerDescriptor = Descriptor(
        'hello-friend', 'controller', 'default', '*', '1.0'); // Controller
    var PersistenceDescriptor1 = Descriptor(
        'hello-friend', 'persistence', 'mysql', '*', '1.0'); // Persistence
    var PersistenceDescriptor2 = Descriptor(
        'hello-friend', 'persistence', 'postgres', '*', '1.0'); // Persistence

    registerAsType(HttpServiceDescriptor, HelloFriendRestService); // View
    registerAsType(ControllerDescriptor, HelloFriendController); // Controller
    registerAsType(
        PersistenceDescriptor1, HelloFriendPersistence1); // Persistence
    registerAsType(
        PersistenceDescriptor2, HelloFriendPersistence2); // Persistence
  }
}

class HelloFriendProcess extends ProcessContainer {
  HelloFriendProcess() : super('hello-friend', 'HelloFriend microservice') {
    configPath = './config.yaml';
    factories.add(HelloFriendServiceFactory());
    factories.add(DefaultRpcFactory());
  }
}

void main(List<String> argument) async {
  // Step 1 - Database selection
  // Env:
  //  'MYSQL_ENABLED': 'true' 
  //    or
  //  'POSTGRES_ENABLED': 'true'

  // Step 2 - The run() command
  var proc = HelloFriendProcess();
  proc.run(argument);
}

```


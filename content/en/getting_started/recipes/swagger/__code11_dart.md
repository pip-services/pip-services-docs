
```dart
import 'dart:async';

import 'package:pip_services3_commons/pip_services3_commons.dart';
import 'package:pip_services3_components/pip_services3_components.dart';
import 'package:pip_services3_container/pip_services3_container.dart';
import 'package:pip_services3_rpc/pip_services3_rpc.dart';
import 'package:pip_services3_swagger/pip_services3_swagger.dart';
import 'package:shelf/shelf.dart';
import 'package:shelf_router/shelf_router.dart';

void main(List<String> argument) {
  // Runner
  try {
    var proc = HelloFriendProcess();
    proc.run(argument);
  } catch (ex) {
    print(ex);
  }
}

// REST service (Swagger UI from YAML file)

class HelloFriendRestService extends RestService {
  HelloFriendController? _controller;

  String? _swaggerContent;
  String? _swaggerPath;

  HelloFriendRestService() : super() {
    baseRoute = '/hello_friend';

    var controllerDescriptor =
        Descriptor('hello-friend', 'controller', '*', '*', '1.0');
    dependencyResolver.put('controller', controllerDescriptor);
  }

  @override
  void configure(ConfigParams config) {
    super.configure(config);

    // swagger
    _swaggerContent = config.getAsNullableString('swagger.content');
    _swaggerPath = config.getAsNullableString('swagger.path');
  }

  @override
  void setReferences(IReferences references) {
    super.setReferences(references);

    _controller =
        dependencyResolver.getOneRequired<HelloFriendController>('controller');
  }

  @override
  void register() {
    registerRoute('get', '/greeting', null, _greeting);

    // swagger
    if (_swaggerContent != null) {
      registerOpenApiSpec_(_swaggerContent!);
    }

    if (_swaggerPath != null) {
      registerOpenApiSpecFromFile(_swaggerPath!);
    }
  }

  FutureOr<Response> _greeting(Request req) {
    var name = req.params['name'];
    var result = _controller!.greeting(name);

    return sendResult(req, result);
  }
}

// Command set

class FriendsCommandSet extends CommandSet {
  HelloFriendController _controller;

  FriendsCommandSet(HelloFriendController controller)
      : _controller = controller,
        super() {
    addCommand(_makeGreeting());
  }

  ICommand _makeGreeting() {
    return Command('greeting', null,
        (String? correlationId, Parameters args) async {
      var name = args.getAsString('name');
      var res = _controller.greeting(name);
      return res;
    });
  }
}

// Commandable REST service (Swagger UI automatically generated from command set)

class FriendCommandableHttpService1 extends CommandableHttpService {
  String? _swaggerPath;

  FriendCommandableHttpService1() : super('commandable_hello_friend1') {
    dependencyResolver.put(
        'controller', Descriptor('hello-friend', 'controller', '*', '*', '*'));
  }

  @override
  set config(ConfigParams? _config) {
    super.config = _config;

    // swagger
    _swaggerPath = config?.getAsNullableString('swagger.path');
  }

  @override
  void register() {
    super.register();

    if (_swaggerPath != null) registerOpenApiSpecFromFile(_swaggerPath!);
  }
}

// Commandable REST service (Swagger UI generated from YAML file)

class FriendCommandableHttpService2 extends CommandableHttpService {
  String? _swaggerPath;

  FriendCommandableHttpService2() : super('commandable_hello_friend2') {
    dependencyResolver.put(
        'controller', Descriptor('hello-friend', 'controller', '*', '*', '*'));
  }

  @override
  set config(ConfigParams? _config) {
    super.config = _config;

    // swagger
    _swaggerPath = config?.getAsNullableString('swagger.path');
  }

  @override
  void register() {
    super.register();

    if (_swaggerPath != null) registerOpenApiSpecFromFile(_swaggerPath!);
  }
}

// Controller

class HelloFriendController implements IConfigurable, ICommandable {
  String defaultName;
  FriendsCommandSet? commandSet;

  HelloFriendController() : defaultName = 'Pip User';

  @override
  void configure(ConfigParams config) {
    defaultName = config.getAsStringWithDefault('default_name', defaultName);
  }

  @override
  CommandSet getCommandSet() {
    if (commandSet == null) commandSet = FriendsCommandSet(this);

    return commandSet!;
  }

  String greeting(String? name) {
    return 'Hello ' + (name ?? defaultName) + ' !';
  }
}

// Factory

class HelloFriendServiceFactory extends Factory {
  HelloFriendServiceFactory() : super() {
    var HttpServiceDescriptor =
        Descriptor('hello-friend', 'service', 'http', '*', '1.0'); // View 1
    var CommandableHttpServiceDescriptor1 = Descriptor(
        'hello-friend', 'service', 'commandable-http1', '*', '1.0'); // View 2
    var CommandableHttpServiceDescriptor2 = Descriptor(
        'hello-friend', 'service', 'commandable-http2', '*', '1.0'); // View 2
    var ControllerDescriptor = Descriptor(
        'hello-friend', 'controller', 'default', '*', '1.0'); // Controller

    registerAsType(HttpServiceDescriptor, HelloFriendRestService); // View 1
    registerAsType(CommandableHttpServiceDescriptor1,
        FriendCommandableHttpService1); // View 2
    registerAsType(CommandableHttpServiceDescriptor2,
        FriendCommandableHttpService2); // View 3
    registerAsType(ControllerDescriptor, HelloFriendController); // Controller
  }
}

// Container

class HelloFriendProcess extends ProcessContainer {
  HelloFriendProcess() : super('hello-friend', 'HelloFriend microservice') {
    configPath = './config.yml';
    factories.add(HelloFriendServiceFactory());
    factories.add(DefaultRpcFactory());
    factories.add(DefaultSwaggerFactory());
  }
}

```

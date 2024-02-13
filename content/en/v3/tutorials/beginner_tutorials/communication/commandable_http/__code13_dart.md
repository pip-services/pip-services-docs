

```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';
import 'package:pip_services3_components/pip_services3_components.dart';
import 'package:pip_services3_container/pip_services3_container.dart';
import 'package:pip_services3_rpc/pip_services3_rpc.dart';
import 'package:pip_services3_swagger/pip_services3_swagger.dart';

void main(List<String> argument) async {
  // Runner
  try {
    var proc = HelloFriendProcess();
    proc.run(argument);
  } catch (ex) {
    print(ex);
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
    Future<dynamic> Function(String correlationId, Parameters args) action =
        (String? correlationId, Parameters args) async {
      var name = args.getAsString('name');
      return _controller.greeting(name);
    };

    return Command(
        'greeting',
        ObjectSchema(true).withRequiredProperty('name', TypeCode.String),
        action);
  }
}

// Service
class FriendCommandableHttpService extends CommandableHttpService {
  FriendCommandableHttpService() : super('commandable_hello_friend') {
    dependencyResolver.put(
        'controller', Descriptor('hello-friend', 'controller', '*', '*', '*'));
  }
}

// Controller
class HelloFriendController implements IConfigurable, ICommandable {
  String _defaultName = 'World';
  FriendsCommandSet? _commandSet;

  HelloFriendController() {
    _defaultName = 'Pip User';
  }

  @override
  void configure(ConfigParams config) {
    _defaultName = config.getAsStringWithDefault('default_name', _defaultName);
  }

  @override
  CommandSet getCommandSet() {
    _commandSet ??= FriendsCommandSet(this);

    return _commandSet!;
  }

  String greeting(String? name) {
    return 'Hello, ${name ?? _defaultName}';
  }
}

// Factory
class HelloFriendServiceFactory extends Factory {
  HelloFriendServiceFactory() : super() {
    var CommandableHttpServiceDescriptor = Descriptor(
        'hello-friend', 'service', 'commandable-http', '*', '1.0'); // View
    var ControllerDescriptor = Descriptor(
        'hello-friend', 'controller', 'default', '*', '1.0'); // Controller

    registerAsType(
        CommandableHttpServiceDescriptor, FriendCommandableHttpService);
    registerAsType(ControllerDescriptor, HelloFriendController);
  }
}

// Container
class HelloFriendProcess extends ProcessContainer {
  HelloFriendProcess() : super('hello-friend', 'HelloFriend microservice') {
    configPath = './config.yaml';

    factories.add(HelloFriendServiceFactory());
    factories.add(DefaultRpcFactory());
    factories.add(DefaultSwaggerFactory());
  }
}

```

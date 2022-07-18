
**lib/src/build/ClientFacadeFactory.dart**

```dart
import 'package:pip_clients_accounts/pip_clients_accounts.dart';
import 'package:pip_clients_activities/pip_clients_activities.dart';
import 'package:pip_clients_beacons_dart/build/BeaconsClientFactory.dart';
import 'package:pip_clients_passwords/pip_clients_passwords.dart';
import 'package:pip_clients_roles/pip_clients_roles.dart';
import 'package:pip_clients_sessions/pip_clients_sessions.dart';
import 'package:pip_services3_components/pip_services3_components.dart';

class ClientFacadeFactory extends CompositeFactory {
  ClientFacadeFactory() : super(null) {
    add(ActivitiesClientFactory());
    add(AccountsClientFactory());
    add(SessionsClientFactory());
    add(PasswordsClientFactory());
    add(RolesClientFactory());
    add(BeaconsClientFactory());
  }
}

```

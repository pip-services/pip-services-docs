Create a /go.mod file at the root of the project with the following content to configure dependencies and project parameters:

**/pubspec.yaml**

```yml
name: pip_facade_sample_dart
version: '1.0.0'
description: Public facade for sample

environment:
  sdk: '>=2.12.0 <3.0.0'

dependencies:
  pip_services3_commons: ^1.1.5
  pip_services3_components: ^1.2.0
  pip_services3_data: ^1.1.2
  pip_services3_mongodb: ^1.1.1
  pip_services3_rpc: ^1.2.1
  pip_services3_container: ^1.1.1
  pip_services_sessions: ^1.1.1
  pip_clients_sessions: ^1.1.3
  pip_services_accounts: ^1.1.0
  pip_clients_accounts: ^1.1.1
  pip_services_passwords: ^1.1.0
  pip_clients_passwords: ^1.1.0
  pip_services_roles: ^1.1.0
  pip_clients_roles: ^1.1.0

  pip_clients_beacons_dart:
    git: https://github.com/pip-services-samples/client-beacons-dart.git

  http: ^0.13.3
  shelf: ^1.2.0
  shelf_router: ^1.1.2

dev_dependencies:
  test: ^1.17.12
  mockito: ^5.0.16
```


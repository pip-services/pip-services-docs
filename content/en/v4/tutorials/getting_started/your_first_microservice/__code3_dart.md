
**/pubspec.yaml**

```yml
name: pip_quickstart
version: "1.0.0"
author: Anonymous <anonymouse@somewhere.com>
description: Quick start for Pip.Services toolkit on Dart
homepage: http://pipservices.org

environment:
  sdk: ">=2.0.0 <3.0.0"

dependencies:
  pip_services4_commons
  pip_services4_components
  pip_services4_rpc
  pip_services4_container
  pip_services4_http
  angel_framework: ^2.1.1

dev_dependencies:
  test: '>=1.14.2 <2.0.0'
```

In the command line, type out the command below to install the dependencies:

```bash
pub get
```

Create the file:

**/lib/src/pip_quickstart.dart**

```dart
library pip_quickstart;
export './src/helloworld.dart';
```

Create a file:

**/lib/helloworld.dart**

```dart
export './HelloWorldController.dart';
export './HelloWorldProcess.dart';
export './HelloWorldRestService.dart';
export './HelloWorldServiceFactory.dart';
```

These files are necessary export classes outside the library.


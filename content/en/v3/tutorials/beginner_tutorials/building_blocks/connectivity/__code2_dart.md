
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';
import 'package:pip_services3_components/pip_services3_components.dart';

class MyPersistence implements IConfigurable, IReferenceable {
    ...
    CredentialResolver _credentialResolver = new CredentialResolver();
    String? _username;
    String? _password;

    @override
    void configure(ConfigParams config) {
        ...
        this._connectionResolver.configure(config);
    }

    @override
    void setReferences(IReferences refs) async {
        ...
        _credentialResolver.setReferences(refs);

        var credentials = await _credentialResolver.lookup(null);
        _username = credentials!.getUsername();
        _password = credentials.getPassword();
    }
}


```

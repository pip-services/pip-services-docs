
```cs
// Case 1: Constructor + ConfigParams object
var config = ConfigParams.FromTuples("user", "user1", "password", "password1");
var credential = new CredentialParams(config); // Returns {'credential.user': 'user1', 'credential.password': 'password1'}

// Case 2: Constructor + set/put methods
credential = new CredentialParams();
credential.Username = "user1";
credential.Password = "password1";
credential.StoreKey = "store key1";
credential.AccessKey = "access key 1";
credential.AccessId = "access id 1";
credential.Add("parameter1", "value1");

credential
// Returns
// {'username': 'user1',
// 'password': 'password1',
// 'store_key': 'store key1',
// 'access_key': 'access key 1',
// 'access_id': 'access id 1'
// 'parameter1': 'value1'}
```

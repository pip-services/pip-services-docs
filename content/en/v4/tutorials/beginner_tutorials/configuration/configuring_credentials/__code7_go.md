
```go
credential[0].AddSection("sectionA", conf.NewConfigParamsFromTuples("key1", "ABCDE"))
// Returns [store_key=store_key2;
// access_key=access_key2;
// my_custom_credential_param=myvalue;
// access_id=access_id2;
// password=userpass457;
// username=user2
// access_key=access_key1;
// password=userpass123;
// username=user1;
// store_key=store_key1;
// access_id=access_id1;
// sectionA.key1=ABCDE]
```

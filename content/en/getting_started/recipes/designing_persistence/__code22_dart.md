
```dart
// Step 1:  we extract the data from the MySQL database
persistence = database1;
var ids3 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
myDataList = await persistence.getListByIds(null, ids3);

// Step 2: we insert the data into the mydata table in the PostgreSQL database.
persistence = database2;
for (var item in myDataList) {
  var result = await persistence.create(null, item);
  print(result);
}
```

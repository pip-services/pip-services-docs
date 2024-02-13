
```cs
// Step 1:  we extract the data from the MySQL database
persistence = database1;
string[] ids = { "1", "2", "3", "4", "5", "6", "7", "8", "9", "10" };
myDataList = await persistence.GetListByIdsAsync("123", ids);

// Step 2: we insert the data into the mydata table in the PostgreSQL database.
persistence = database2;
foreach (var item in myDataList)
    var result = await persistence.CreateAsync("123", item);
```

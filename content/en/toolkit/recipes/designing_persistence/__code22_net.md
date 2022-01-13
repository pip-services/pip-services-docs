
```cs
// Step 1:  we extract the data from the MySQL database
persistence = database1;
string[] ids3 = { "1", "2", "3", "4", "5", "6", "7", "8", "9", "10" };
myDataList = persistence.GetListByIdsAsync("123", ids3).Result;

// Step 2: we insert the data into the mydata table in the PostgreSQL database.
persistence = database2;
foreach (var item in myDataList)
    var dat = persistence.CreateAsync("123", item).Result;
```

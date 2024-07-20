
```go
// Step 1:  we extract the data from the MySQL database
persistence = database1
ids3 := []string{"1", "2", "3", "4", "5", "6", "7", "8", "9", "10"}
myDataList, err = persistence.GetListByIds(context.Background(), ids3)
if err != nil {
	panic(err)
}
// Step 2: we insert the data into the mydata table in the PostgreSQL database.
persistence = database2
for _, item := range myDataList {
	result, err := persistence.Create(context.Background(), item)
	if err != nil {
		panic(err)
	}
	fmt.Println(result)
}
```

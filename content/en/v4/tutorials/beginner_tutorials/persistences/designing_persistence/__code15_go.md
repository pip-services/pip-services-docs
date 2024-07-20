
```go
for i := 0; i < 20; i++ {
	index := strconv.Itoa(i)
	data := MyData{Id: index, Key: "key " + index, Content: "content " + index}
	res, err := persistence.Create(context.Background(), data)
	if err != nil {
		panic(err)
	}
	fmt.Println(res)
}
```

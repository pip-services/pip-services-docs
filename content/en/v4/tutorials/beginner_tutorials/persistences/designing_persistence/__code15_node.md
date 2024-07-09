
```ts
for (var i = 0; i < 20; i++) {
    let data: MyData = { id: i.toString(), key: `key ${i}`, content: `content ${i}`};
    let res = await persistence.create(null, data);
}

```

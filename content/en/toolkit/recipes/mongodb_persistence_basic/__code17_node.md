
```ts
    public getCountByFilter(correlationId: string, filter: FilterParams): Promise<number> {
        return super.getCountByFilter(correlationId, this.composeFilter(filter));
    }

```

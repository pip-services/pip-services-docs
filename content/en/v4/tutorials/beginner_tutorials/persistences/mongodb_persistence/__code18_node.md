
```ts
public getCountByFilter(ctx: Context, filter: FilterParams): Promise<number> {
    return super.getCountByFilter(ctx, this.composeFilter(filter));
}


```

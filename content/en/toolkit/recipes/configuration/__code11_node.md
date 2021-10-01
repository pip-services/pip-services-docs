
```typescript
interface IConfigReader {
	readConfig(correlationId: string, parameters: ConfigParams): Promise<ConfigParams>;
}


```


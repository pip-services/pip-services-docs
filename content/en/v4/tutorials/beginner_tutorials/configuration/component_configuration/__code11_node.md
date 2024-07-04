
```ts
interface IConfigReader {
    readConfig(context: IContext, parameters: ConfigParams): Promise<ConfigParams>;
    addChangeListener(listener: INotifiable): void;
    removeChangeListener(listener: INotifiable): void;
}
```

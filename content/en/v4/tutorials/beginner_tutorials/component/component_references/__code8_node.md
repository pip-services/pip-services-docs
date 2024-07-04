
```ts
class DependencyResolver implements IReferenceable, IReconfigurable {
	private _dependencies: any = {};
	private _references: IReferences;
public configure(config: ConfigParams): void;
	public setReferences(references: IReferences): void;
	public put(name: string, locator: any): void;
	private locate(name: string): any;
	public getOptional<T>(name: string): T[];
	public getRequired<T>(name: string): T[];
	public getOneOptional<T>(name: string): T;
	public getOneRequired<T>(name: string): T;
	public find<T>(name: string, required: boolean): T[];
	public static fromTuples(...tuples: any[]): DependencyResolver;
}


```

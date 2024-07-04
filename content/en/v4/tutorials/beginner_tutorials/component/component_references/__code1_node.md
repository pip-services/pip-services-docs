
```ts
interface IReferences {
	put(locator: any, component: any);
	remove(locator: any): any;
	removeAll(locator: any): any[];
	getAllLocators(): any[];
	getAll(): any[];
	getOptional<T>(locator: any): T[];
	getRequired<T>(locator: any): T[];
	getOneOptional<T>(locator: any): T;
	getOneRequired<T>(locator: any): T;
	find<T>(locator: any, required: boolean): T[];
}


```

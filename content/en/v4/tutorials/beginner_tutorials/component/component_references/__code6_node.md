
```ts
class Descriptor {
	private _group: string;
	private _type: string;
	private _kind: string;
	private _name: string;
	private _version: string;
	public getGroup(): string;
	public getType(): string;
	public getKind(): string;
	public getName(): string;
	public getVersion(): string;
	private matchField(field1: string, field2: string): boolean;
	public match(descriptor: Descriptor): boolean;
	private exactMatchField(field1: string, field2: string): boolean;
	public exactMatch(descriptor: Descriptor): boolean;
	public isComplete(): boolean;

public equals(value: any): boolean;
	public toString(): string;
	public static fromString(value: String): Descriptor;
}


```


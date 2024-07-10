
```ts
import { IConfigurable, ConfigParams } from "pip-services4-components-node";

class MyComponentA implements IConfigurable {
  private _param1: string = "ABC";
  private _param2: number = 123;
  private _open: boolean = false;
  private _status: string;

  // Creates a new instance of the component.
  public constructor(){
      this._status = "Created";
      console.log("MyComponentA has been created.");
  }

  public configure(config: ConfigParams): void {
      this._param1 = config.getAsStringWithDefault("param1", "ABC");
      this._param2 = config.getAsIntegerWithDefault("param2", 123);
      this._status = "Configured";

      console.log("MyComponentA has been configured.");
  }
}
```

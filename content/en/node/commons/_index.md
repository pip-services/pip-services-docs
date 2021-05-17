---
type: docs
title: "Commons"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
no_list: true
description: > 
    Portable Abstractions and Patterns for Node.js  

    This module is a part of the [Pip.Services](http://pipservices.org) polyglot microservices toolkit.
    It provides a set of basic patterns used in microservices or backend services.
    Also the module implemenets a reasonably thin abstraction layer over most fundamental functions across
    all languages supported by the toolkit to facilitate symmetric implementation.
---


### Modules

The module contains the following packages:

* [**Commands**](commands) - commanding and eventing patterns
* [**Config**](config) - configuration pattern
* [**Convert**](convert) - portable value converters
* [**Data**](data) - data patterns
* [**Errors**](errors) - application errors
* [**Random**](random) - random data generators
* [**Refer**](refer) - locator inversion of control (IoC) pattern
* [**Reflect**](reflect) - portable reflection utilities
* [**Run**](run) - component life-cycle management patterns
* [**Validate**](validate) - validation patterns



## Use

Install the NPM package as
```bash
npm install pip-services3-commons-nodex --save
```

Then you are ready to start using the Pip.Services patterns to augment your backend code.

For instance, here is how you can implement a component, that receives configuration, get assigned references,
can be opened and closed using the patterns from this module.

```typescript
import { IConfigurable } from 'pip-services3-commons-nodex';
import { ConfigParams } from 'pip-services3-commons-nodex';
import { IReferenceable } from 'pip-services3-commons-nodex';
import { IReferences } from 'pip-services3-commons-nodex';
import { Descriptor } from 'pip-services3-commons-nodex';
import { IOpenable } from 'pip-services3-commons-nodex';

export class MyComponentA implements IConfigurable, IReferenceable, IOpenable {
    private _param1: string = "ABC";
    private _param2: number = 123;
    private _anotherComponent: MyComponentB;
    private _opened: boolean = true;

    public configure(config: ConfigParams): void {
        this._param1 = config.getAsStringWithDefault("param1", this._param1);
        this._param2 = config.getAsIntegerWithDefault("param2", this._param2);
    }

    public setReferences(refs: IReferences): void {
        this._anotherComponent = refs.getOneRequired<MyComponentB>(
            new Descriptor("myservice", "mycomponent-b", "*", "*", "1.0")
        );
    }

    public isOpen(): boolean {
        return this._opened;
    }

    public open(correlationId: string, callback: (err: any) => void): void {
        this._opened = true;
        console.log("MyComponentA has been opened.");
        callback(null);
    }

    public close(correlationId: string, callback: (err: any) => void): void {
        this._opened = true;
        console.log("MyComponentA has been closed.");
        callback(null);
    }

}
```

Then here is how the component can be used in the code

```typescript
import { ConfigParams } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';
import { Descriptor } from 'pip-services3-commons-nodex';

let myComponentA = new MyComponentA();

// Configure the component
myComponentA.configure(ConfigParams.fromTuples(
  'param1', 'XYZ',
  'param2', 987
));

// Set references to the component
myComponentA.setReferences(References.fromTuples(
  new Descriptor("myservice", "mycomponent-b", "default", "default", "1.0",) myComponentB
));

// Open the component
myComponentA.open("123", (err) => {
   console.log("MyComponentA has been opened.");
   ...
});
```

## Develop

For development you shall install the following prerequisites:
* Node.js 8+
* Visual Studio Code or another IDE of your choice
* Docker
* Typescript

Install dependencies:
```bash
npm install
```

Compile the code:
```bash
tsc
```

Run automated tests:
```bash
npm test
```

Generate API documentation:
```bash
./docgen.ps1
```

Before committing changes run dockerized build and test as:
```bash
./build.ps1
./test.ps1
./clear.ps1
```

## Contacts

The module is created and maintained by **Sergey Seroukhov**.

The documentation is written by **Egor Nuzhnykh**, **Alexey Dvoykin**, **Mark Makarychev**.

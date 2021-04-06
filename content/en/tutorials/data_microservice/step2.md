---
type: docs
no_list: true
title: "Step 2. Data model development"
linkTitle: "Step 2"
---

We’ll start the development of our microservice with defining and implementing the data model that it is going to be working with. We’ll start by adding some folders to our project’s directory structure. In the **src** folder, create a **data** folder and, inside it, a **version1** folder. This is done to allow us to create new versions of the data model later on, without breaking the old one.

Now, in the version1 folder, create a **BeaconV1** class that implements `IStringIdentifiable`. By implementing the `IStringIdentifiable` interface, we can be sure that all objects of that given class have a string key by which they can be identified. Below is a listing of this class’s code:

**/src/data/version1/BeaconV1.ts**

```typescript
import { IStringIdentifiable } from 'pip-services3-commons-node';
‍
export class BeaconV1 implements IStringIdentifiable {
    public id: string;
    public site_id: string;
    public type?: string;
    public udi: string;
    public label?: string;
    public center?: any; // GeoJson
    public radius?: number;
}

```

All fields are of simple data types, and their names give us a good idea of their purpose. The only exception to this is the center field, in which we are going to be storing data of type GeoJSON. The beacon’s type will be represented by a string, but we’re going to have a separate class be responsible for managing the available types, using static fields. This class is going to be called **BeaconTypeV1**, and it’s going to simply contain a list of beacon types:

**/src/data/version1/BeaconTypeV1.ts**

```typescript
export class BeaconTypeV1 {
    public static Unknown: string = "unknown";
    public static AltBeacon: string = "altbeacon";
    public static iBeacon: string = "ibeacon";
    public static EddyStoneUdi: string = "eddystone-udi";
}

```

For checking the validity of the data we are going to be receiving, let’s create a data validation schema in a class called **BeaconV1Schema**:

**/src/data/version1/BeaconV1Schema.ts**

```typescript
import { ObjectSchema } from 'pip-services3-commons-node';
import { TypeCode } from 'pip-services3-commons-node';
‍
export class BeaconV1Schema extends ObjectSchema { 
    public constructor()
    {
        super();
        this.withOptionalProperty('id', TypeCode.String);
        this.withRequiredProperty('site_id', TypeCode.String);
        this.withOptionalProperty('type', TypeCode.String);
        this.withRequiredProperty('udi', TypeCode.String);
        this.withOptionalProperty('label', TypeCode.String);
        this.withOptionalProperty('center', null);
        this.withOptionalProperty('radius', TypeCode.Float);    }
}

```

Let’s take a closer look at what’s going on in this class. First and foremost, we create a new class that extends the standard validation class Schema, implemented in the components module of the Pip.Services Toolkit. This class contains all of the functions that we need for checking the validity of the data we receive. All that we have to do is state which fields we are expecting, what their types should be, and whether or not any of them are required. All of this is done in the class’s constructor.

Since everything we’ve done so far is quite simple and transparent, we’re not going to be writing any tests yet for the data model we’ve created.

With our data model defined, we can now move on to [Step 3. Implementing persistence components.](../step3)
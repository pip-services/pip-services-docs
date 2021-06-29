---
type: docs
no_list: true
title: "Step 2. Data model development"
linkTitle: "Step 2. Data model."
gitUrl: "https://github.com/pip-services-samples/service-beacons-dotnet"
---

We’ll start the development of our microservice with defining and implementing the data model that it is going to be working with. We’ll start by adding some folders to our project’s directory structure. In the **src/interface** folder, create a **data** folder and, inside it, a **version1** folder. This is done to allow us to create new versions of the data model later on, without breaking the old one.

Now, in the version1 folder, create a **BeaconV1** class that implements `IStringIdentifiable`. By implementing the `IStringIdentifiable` interface, we can be sure that all objects of that given class have a string key by which they can be identified. Below is a listing of this class’s code:

**/src/interface/data/version1/BeaconV1.cs**

```cs
namespace Beacons.Data.Version1
{
    [DataContract]
    public class BeaconV1 : IStringIdentifiable
    {
        [DataMember(Name = "id")]
        public string Id { get; set; }

        [DataMember(Name = "site_id")]
        public string SiteId { get; set; }

        [DataMember(Name = "type")]
        public string Type { get; set; }

        [DataMember(Name = "udi")]
        public string Udi { get; set; }

        [DataMember(Name = "label")]
        public string Label { get; set; }

        [DataMember(Name = "center")]
        public CenterObjectV1 Center { get; set; }

        [DataMember(Name = "radius")]
        public double Radius { get; set; }

    }
}

```

All fields are of simple data types, and their names give us a good idea of their purpose. The only exception to this is the center field, in which we are going to be storing data of type GeoJSON. The beacon’s type will be represented by a string, but we’re going to have a separate class be responsible for managing the available types, using static fields. This class is going to be called **BeaconTypeV1**, and it’s going to simply contain a list of beacon types:

**/src/interface/data/version1/BeaconTypeV1.cs**

```cs
namespace Beacons.Data.Version1
{
    public class BeaconTypeV1
    {
        public static string Unknown = "unkown";
        public static string AltBeacon = "altbeacon";
        public static string iBeacon = "ibeacon";
        public static string EddyStoneUdi = "eddystone-udi";
    }
}

```

For checking the validity of the data we are going to be receiving, let’s create a data validation schema in a class called **BeaconV1Schema**: 

**/src/interface/data/version1/BeaconV1Schema.cs**

```cs
namespace Beacons.Data.Version1
{
    public class BeaconV1Schema : ObjectSchema
    {
        public BeaconV1Schema()
        {
            this.WithOptionalProperty("id", TypeCode.String);
            this.WithRequiredProperty("site_id", TypeCode.String);
            this.WithOptionalProperty("type", TypeCode.String);
            this.WithRequiredProperty("udi", TypeCode.String);
            this.WithOptionalProperty("label", TypeCode.String);
            this.WithOptionalProperty("center", null);
            this.WithOptionalProperty("radius", TypeCode.Double);
        }
    }
}
```

Let’s take a closer look at what’s going on in this class. First and foremost, we create a new class that extends the standard validation class Schema, implemented in the components module of the Pip.Services Toolkit. This class contains all of the functions that we need for checking the validity of the data we receive. All that we have to do is state which fields we are expecting, what their types should be, and whether or not any of them are required. All of this is done in the class’s constructor.

Since everything we’ve done so far is quite simple and transparent, we’re not going to be writing any tests yet for the data model we’ve created.

With our data model defined, we can now move on to [Step 3. Implementing persistence components.](../step3)


<span class="hide-title-link">

### [Step 3. Implementing persistence components.](../step3)

</span>
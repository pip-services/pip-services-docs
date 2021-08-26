---
type: docs
no_list: true
title: "Step 2. Data model development"
linkTitle: "Step 3. Data model."
gitUrl: "https://github.com/pip-services-samples/service-beacons-python"
---

We’ll start the development of our microservice with defining and implementing the data model that it is going to be working with. We’ll start by adding some folders to our project’s directory structure. In the **src** folder, create a **data** folder and, inside it, a **version1** folder. This is done to allow us to create new versions of the data model later on, without breaking the old one.

Now, in the version1 folder, create a **BeaconV1** class that implements `IStringIdentifiable`. By implementing the `IStringIdentifiable` interface, we can be sure that all objects of that given class have a string key by which they can be identified. Below is a listing of this class’s code:

**/src/data/version1/BeaconV1.py**

```python
from pip_services3_commons.data import IStringIdentifiable


class BeaconV1(IStringIdentifiable):
    def __init__(self, id: str = None, site_id: str = None, type: str = None, udi: str = None, label: str = None, center: Any = None, radius: float = None):
        super(BeaconV1, self).__init__()
        self.id = id
        self.site_id = site_id
        self.type = type
        self.udi = udi
        self.label = label
        self.center = center
        self.radius = radius

```

All fields are of simple data types, and their names give us a good idea of their purpose. The only exception to this is the center field, in which we are going to be storing data of type GeoJSON. The beacon’s type will be represented by a string, but we’re going to have a separate class be responsible for managing the available types, using static fields. This class is going to be called **BeaconTypeV1**, and it’s going to simply contain a list of beacon types:

**/src/data/version1/BeaconTypeV1.py**

```python
class BeaconTypeV1:
    Unknown = "unknown"
    AltBeacon = "altbeacon"
    iBeacon = "ibeacons"
    EddyStoneUdi = "eddystone-udi"

```

For checking the validity of the data we are going to be receiving, let’s create a data validation schema in a class called **BeaconV1Schema**: 

**/src/data/version1/BeaconV1Schema.py**

```python
from pip_services3_commons.convert.TypeCode import TypeCode
from pip_services3_commons.validate.ObjectSchema import ObjectSchema


class BeaconV1Schema(ObjectSchema):
    def __init__(self):
        super(ObjectSchema, self).__init__()

        self.with_optional_property("id", TypeCode.String)
        self.with_required_property("site_id", TypeCode.String)
        self.with_optional_property("type", TypeCode.String)
        self.with_required_property("udi", TypeCode.String)
        self.with_optional_property("label", TypeCode.String)
        self.with_optional_property("center", TypeCode.Map)
        self.with_optional_property("radius", TypeCode.Float)

```

Let’s take a closer look at what’s going on in this class. First and foremost, we create a new class that extends the standard validation class Schema, implemented in the components module of the Pip.Services Toolkit. This class contains all of the functions that we need for checking the validity of the data we receive. All that we have to do is state which fields we are expecting, what their types should be, and whether or not any of them are required. All of this is done in the class’s constructor.

Since everything we’ve done so far is quite simple and transparent, we’re not going to be writing any tests yet for the data model we’ve created.

With our data model defined, we can now move on to [Step 3. Implementing persistence components.](../step3)


<span class="hide-title-link">

### [Step 3. Implementing persistence components.](../step3)

</span>

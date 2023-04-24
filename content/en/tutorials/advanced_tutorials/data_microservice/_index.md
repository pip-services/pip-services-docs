---
type: docs
no_list: true
title: "Data Microservice"
linkTitle: "Data Microservice" 
gitUrl: "https://github.com/pip-services-samples"
weight: 10
---
---

### Overview

In this tutorial, we'll be writing from scratch a fully-functional Data microservice, using the patterns and mechanisms available in the Pip.Services toolkit, as well as the programming language you have selected. The microservice that we are going to be using as an example in this tutorial is called [The Beacons microservice](https://github.com/pip-services-samples), which is part of [The IoT Microservices Collection](https://github.com/pip-services-iot). This microservice is meant to perform the following simple tasks:

- Store a list of BLE beacons (a.k.a. iBeacons), their unique identifiers, and the positions at which they were installed.
- Calculate the position of a device, using the beacons it "sees" in its vicinity.

![Beacon](/images/tutorials/data_microservice/beacon.png)

Imagine the following situation: you are walking through a building that has beacons installed at various locations throughout the entire building. These beacons are broadcasting signals via bluetooth, at regular time intervals, which can be "seen" from about 200 feet away. The beacons, along with their positions, are stored in our microservice. When your smartphone starts "seeing" some of these signals, it sends a list of the beacons it "sees" to the microservice, which then calculates the position of your phone as being in the middle of the beacons it "sees". Simple, but effective - wouldn't you agree?

The Beacons microservice that we are going to be developing will consist of a number of loosely-coupled components, following the componentized microservice design. The structure of this microservice is displayed on the diagram below:

![BeaconDiagram](./beacon_diagram.svg)

### Creating the data microservice

To make it easier to follow along, we've divided the tutorial into the following 7 steps:

- [Step 1. Setting up the environment](step0)
- [Step 2. Setting up the project](step1)
- [Step 3. Data model development](step2)
- [Step 4. Implementing persistence components (with tests)](step3)
- [Step 5. Implementing a controller (with tests)](step4)
- [Step 6. Implementing an HTTP service (with tests)](step5)
- [Step 7. Wrapping microservice into container](step6)
- [Step 8. Running and testing the microservice](step7)

<span class="hide-title-link">

#### [Step 1. Setting up the environment](step0)
#### [Step 2. Project structure](step1)
#### [Step 3. Data model development](step2)
#### [Step 4. Implementing persistence components (with tests)](step3)
#### [Step 5. Implementing a controller (with tests)](step4)
#### [Step 6. Implementing an HTTP service (with tests)](step5)
#### [Step 7. Wrapping the microservice into a container](step6)
#### [Step 8. Running and testing the microservice](step7)

</span>

### See also

- [Client Library](../client_library)
- [Microservice Dockerization](../microservice_dockerization)

<span class="hide-title-link">

#### [Client Library](../client_library)
#### [Microservice Dockerization](../microservice_dockerization)

</span>

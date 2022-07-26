---
type: docs
no_list: true
title: "Terminology"
linkTitle: "Terminology"
weight: 90
---

<table class="full-width-table entry-table-no-links terminology">
    <thead>
        <tr>
            <th scope="col">Term</th>
            <th scope="col">Definition</th>
            <th scope="col">Helpful article</th>
        </tr>
    </thead>
    <tr>
      <td>Application </td>
      <td>A software package that performs a specific function</td>
    </tr>
    <tr>
      <td>Backend</td>
      <td>The part of an application that is not directly accessed by the user. In general, backends are used to perform business logic and calculations.</td>
    </tr>
    <tr>
      <td>Beacon</td>
      <td>A hardware device that enables data transmission to mobile devices within a specific range of the device.</td>
      <td><a href="../../getting_started/tutorials/data_microservice/">Data microservice</a></td>
    </tr>
    <tr>
      <td>Benchmark</td>
      <td>TA standard or point of reference.</td>
    </tr>
    <tr>
      <td>BFF</td>
      <td>BFF or Backend For Frontend is a design pattern that considers a dedicated backend for each frontend application interface. It is a variant of the API Gateway pattern, where instead of having a single point of entry that manages all the logic, there are several ones that consider specialized cases.</td>
    </tr>
    <tr>
      <td>Boundary Microservice</td>
      <td>A microservice used to expose the functionality of a system to external entities such as consumers, users, and systems. These microservices can be divided into two categories: facades and connectors.</td>
    </tr>
	<tr>
      <td>Build factory</td>
      <td>
       A creational pattern that uses factory methods to deal with the problem of creating objects without having to specify the exact class of the object that will be created.
      </td>
    </tr>	
   <tr>
      <td>Business Process Microservice</td>
      <td>A microservice used to implement business transactions. These microservices can be classified as background workers and sagas.</td>
    </tr>
	<tr>
      <td>Caching</td>
      <td>
        The process of storing and accessing data from a cache, where a cache is a high-speed data storage. Typically, the storage is transient and is used to speed up the retrieval of data. <br> <br>
        Within Pip.Services, the user can create components for caching. Also, there are two components that offer caching: the MemoryCaching class, which caches in memory, and the NullCache, which is a dummy cache with no real effect. And, Pip.Services includes modules for Redis and Memcached.
      </td>
      <td><a href="../../getting_started/caching/">Caching</a></td>
    </tr>
    <tr>
      <td>Circuit Breaker pattern</td>
      <td>A pattern used to detect failure and encapsulate the logic of preventing it from cascading between services. It can also detect when a problem has been resolved. By isolating the failure, this pattern provides fault and latency tolerance.</td>
    </tr>
    <tr>
      <td>Client</td>
      <td>
        A hardware device or software program that requests access to a service provided by a server. Clients are typically used in the client-server architecture.
      </td>
    </tr>
 
	
	
</table>

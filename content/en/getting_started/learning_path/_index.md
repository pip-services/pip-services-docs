---
type: docs
no_list: true
title: "Learning path"
linkTitle: "Learning path"
weight: 10
description: >-
     Fast track learning path.
---

### Course description

Pip.Services is a toolkit used to create microservices. This course provides the student with the basic elements necessary to use it efficiently. The student will learn how to create custom components, use available components, containerize an application, and connect to it via different clients. The course consists of seven modules that are taught in four days (32 hours).

### Day 1
1.	Introduction: Concepts, History, Architecture, Building Blocks       
a.	Brief introduction to Pip.Services         
b.	[Building blocks: a brief description](../../conceptual/building_blocks/)         
c.	[Toolkit architecture](../../conceptual/toolkit_architecture/) 

2.	Basic Patterns: Components, Configurations, Reflection, ...    
a.	[Three-tier architecture](../../conceptual/three_tier_architecture/)        
b.	[Creating a component](../../conceptual/component/creating_a_component/)         
c.	[Communicating between components](../../conceptual/component/component_communication/)            
d.	[Configurations](../../conceptual/configuration/configurations/)            

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_Optional (Self-study)_
  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i.	[Configuring connections](../../getting_started/recipes/configuring_connections/)                
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ii.	[Configuring credentials](../../getting_started/recipes/configuring_credentials/)
&nbsp;&nbsp;&nbsp;&nbsp;iii.	[Config file syntax](../../conceptual/configuration/config_file_syntax/)     
&nbsp;&nbsp;&nbsp;&nbsp;iv.	[Descriptors](../../conceptual/component/descriptors/)     
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v.	[Discovery services](../../getting_started/recipes/discovery_services/)     
&nbsp;&nbsp;&nbsp;&nbsp;vi.	[Connection utilities](../../getting_started/recipes/connection_utils/)     
&nbsp;&nbsp;&nbsp;&nbsp;vii.	[Mustache templates](../../getting_started/recipes/mustache_templates/)
&nbsp;&nbsp;&nbsp;viii. [Reflection](../../conceptual/reflection/)     

### Day 2

3.	Persistence:      
a.	Choose one of the following:      
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i.	Memory         
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - [Memory Persistence Component](../../getting_started/tutorials/data_microservice/step3/)               
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - [Redis](../../conceptual/caching/redis/)       
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - [Memcached](../../conceptual/caching/memcached/)       
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ii.	File storage      
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - [JSON file persistence](../../conceptual/persistences/json_persistence/)        
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;iii.	Document storage            
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -	[MongoDB](../../conceptual/persistences/mongodb_persistence/)                
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;iv.	Relational storage     
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -	[MySQL](../../conceptual/persistences/mysql_persistence/)          
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -	[PostgreSQL](../../conceptual/persistences/postgre_persistence/)         
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -	[SQLServer](../../conceptual/persistences/sqlserver_persistence/)       
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v.	Other      
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - [Cassandra](../../conceptual/persistences/cassandra/)                 
b.	[Designing persistence components](../../getting_started/recipes/designing_persistence/) 

4.	Business Logic: Controllers, Observability, Synchronization, Caching, States...
a.	Controllers         
b.	Observability:              
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i.	[Logging](../../getting_started/recipes/logging/)            
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_Optional (Self-study)_          
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ii.	Metrics          
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -	[Prometheus](../../getting_started/recipes/prometheus/)           
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -	[Datadog](../../getting_started/recipes/datadog/)          
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -	[Elasticsearch](../../getting_started/recipes/elasticsearch/)          
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -	[Fluentd](../../getting_started/recipes/fluentd/)          
c.	Concurrency          
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i.	[Caching](../../conceptual/caching/caching_basic/)           
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_Optional (Self-study)_          
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ii.	[Locking](../../conceptual/locks/memory_locks/)         

### Day 3

5.	Communication: REST, GRPC, Commandable       
a.	Synchronous       
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i.	[REST](../../conceptual/communication/rest_service/)               
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_Optional (Self-study)_        
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ii.	[gRPC](../../conceptual/communication/grpc/)         
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;iii.  [Commandable HTTP](../../conceptual/communication/commandable_http/)         
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;iv.	[Commandable gRPC](../../conceptual/communication/commandable_grpc/)        
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v.	[Command sets](../../conceptual/communication/command_set/)          
b.	Asynchronous        
&nbsp;&nbsp;&nbsp;Choose one of the following:        
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i.  [Messaging](../../conceptual/messaging/messaging_basics/)         
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ii.  [MQTT](../../conceptual/messaging/mqtt/)            
&nbsp;&nbsp;&nbsp;&nbsp;iii.  [Kafka](../../conceptual/messaging/kafka/)         
&nbsp;&nbsp;&nbsp;&nbsp;iv.  [RabbitMQ](../../conceptual/messaging/rabbitmq/)                

### Day 4
6.	Containers: Process, Docker, Serverless         
a.	Containers       
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i.	[Process container](../../conceptual/containers/process_container/)                  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_Optional (Self-study)_        
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ii.	[Docker](../../getting_started/tutorials/microservice_dockerization/)          
b.	Serverless        
Choose one of the following:       
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;iii.  AWS Lambda         
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;iv.  Microsoft Azure         
7.	Clients:           
a.	[REST client](../../conceptual/communication/rest_client/)            
_Optional (Self-study)_        
a.	[Direct client](../../conceptual/communication/direct_client/)               
b.	[Commandable HTTP](../../conceptual/communication/commandable_http/#using-a-commandablehttpclient)           
c.	[gRPC](../../conceptual/communication/grpc/#client)              
d.	[Commandable gRPC](../../conceptual/communication/commandable_grpc/#client)      
e.	Mock      

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
b.	Building blocks: a brief description (https://pip-services.github.io/pip-services-docs/toolkit/building_blocks/)         
c.	Toolkit architecture (http://docs.pipservices.org/toolkit/getting_started/toolkit_architecture/)

2.	Basic Patterns: Components, Configurations, Reflection, ...    
a.	Three-tier architecture (http://docs.pipservices.org/toolkit/recipes/three_tier_architecture/)    
b.	Creating a component (http://docs.pipservices.org/toolkit/recipes/creating_a_component/)     
c.	Communicating between components (http://docs.pipservices.org/toolkit/recipes/component_communication/)     
d.	Configurations (http://docs.pipservices.org/toolkit/getting_started/configurations/)     

&nbsp;&nbsp;_Optional (Self-study)_
  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i.	Configuring connections (http://docs.pipservices.org/toolkit/recipes/configuring_connections/)                
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ii.	Configuring credentials (http://docs.pipservices.org/toolkit/recipes/configuring_credentials/)      
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;iii.	Config file syntax (http://docs.pipservices.org/toolkit/recipes/config_file_syntax/)     
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;iv.	Descriptors (http://docs.pipservices.org/toolkit/getting_started/descriptors/)     
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v.	Discovery services (http://docs.pipservices.org/toolkit/recipes/discovery_services/)     
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;vi.	Connection utilities (http://docs.pipservices.org/toolkit/recipes/connection_utils/)     
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;vii.	Mustache templates (http://docs.pipservices.org/toolkit/recipes/mustache_templates/)     
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;viii. Reflection (http://docs.pipservices.org/toolkit/recipes/reflection/)     

### Day 2

3.	Persistence:      
a.	Choose one of the following:      
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i.	Memory (http://docs.pipservices.org/toolkit/tutorials/data_microservice/step3/)           
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ii.	File storage      
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - JSON file persistence (http://docs.pipservices.org/toolkit/recipes/json_persistence/)        
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;iii.	Document storage            
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -	MongoDB (http://docs.pipservices.org/toolkit/recipes/mongodb_persistence_basic/)                
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v.	Relational storage     
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -	MySQL (http://docs.pipservices.org/toolkit/recipes/mysql_persistence/)          
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -	PostgreSQL (http://docs.pipservices.org/toolkit/recipes/postgre_persistence/)         
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -	SQLServer http://docs.pipservices.org/toolkit/recipes/sqlserver_persistence/         
b.	Designing persistence components 
                               http://docs.pipservices.org/toolkit/recipes/designing_persistence/ 

4.	Business Logic: Controllers, Observability, Synchronization, Caching, States...
a.	Controllers         
b.	Observability:              
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i.	Logging http://docs.pipservices.org/toolkit/recipes/logging/            
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_Optional (Self-study)_          
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ii.	Metrics          
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -	Prometheus http://docs.pipservices.org/toolkit/recipes/prometheus/           
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -	Datadog          
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -	Elasticsearch          
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -	Fluentd          
c.	Concurrency          
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i.	Caching http://docs.pipservices.org/toolkit/getting_started/caching/           
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_Optional (Self-study)_          
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ii.	Locking         

### Day 3

5.	Communication: REST, GRPC, Commandable       
a.	Synchronous       
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i.	REST http://docs.pipservices.org/toolkit/recipes/rest_service/               
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_Optional (Self-study)_        
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ii.	gRPC http://docs.pipservices.org/toolkit/recipes/grpc/         
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;iii.  Commandable HTTP http://docs.pipservices.org/toolkit/recipes/commandable_http_services/         
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;iv.	Commandable gRPC         
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v.	Command sets http://docs.pipservices.org/toolkit/recipes/command_set/          
b.	Asynchronous        
Choose one of the following:        
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;vi.  Messaging         
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;vii.  MQTT http://docs.pipservices.org/toolkit/recipes/mqtt/            
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;viii.  Kafka http://docs.pipservices.org/toolkit/recipes/kafka/         
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ix.  RabbitMQ         

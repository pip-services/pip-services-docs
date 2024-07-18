
Once generated, log messages need to be stored or displayed. PIP.Services provides specific tools for this: [CachedLogger](../../../toolkit_api/node/components/log/cached_logger/) and [ConsoleLogger](../../../toolkit_api/node/components/log/console_logger/). The first class stores log messages in memory. The second class displays them on a console. The toolkit also provides us with the [CompositeLogger](../../../toolkit_api/node/components/log/composite_logger/), which allows for message aggregation and thus, creating a centralized logging point.
	
Additionally, PIP.Services provides implementations of loggers for [CloudWatch](../../../toolkit_api/node/aws/log/cloud_watch_logger/), [ElasticSearch](../../../toolkit_api/node/elasticsearch/log/elasticsearch_logger/), and [DataDog](../../../toolkit_api/node/datadog/log/datadog_logger/).
    

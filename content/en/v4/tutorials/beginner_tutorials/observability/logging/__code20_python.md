
```python
{
  "took" : 5,
  "timed_out" : false,
  "_shards" : {
    "total" : 1,
    "successful" : 1,
    "skipped" : 0,
    "failed" : 0
  },
  "hits" : {
    "total" : {
      "value" : 5,
      "relation" : "eq"
    },
    "max_score" : 1.0,
    "hits" : [
      {
        "_index" : "log-20220125",
        "_type" : "_doc",
        "_id" : "8cd3ef625b804ffdb995827e59bac01f",
        "_score" : 1.0,
        "_source" : {
          "correlation_id" : "123",
          "error" : null,
          "level" : 4,
          "message" : "Composite logger is configured and ready for using",
          "source" : null,
          "time" : "2022-01-25T17:47:53.274931"
        }
      },
      {
        "_index" : "log-20220125",
        "_type" : "_doc",
        "_id" : "e636b3a8b76e44cabea31e9e92f0b451",
        "_score" : 1.0,
        "_source" : {
          "correlation_id" : "123",
          "error" : null,
          "level" : 3,
          "message" : "Example warning",
          "source" : null,
          "time" : "2022-01-25T17:47:53.274931"
        }
      },
      {
        "_index" : "log-20220125",
        "_type" : "_doc",
        "_id" : "144d963d95c74b4a84e1558dde3704f9",
        "_score" : 1.0,
        "_source" : {
          "correlation_id" : "123",
          "error" : {
            "category" : "Unknown",
            "cause" : null,
            "code" : "UNKNOWN",
            "correlation_id" : null,
            "details" : null,
            "message" : "Example error",
            "stack_trace" : null,
            "status" : 500,
            "type" : null
          },
          "level" : 2,
          "message" : "Error message",
          "source" : null,
          "time" : "2022-01-25T17:47:53.274931"
        }
      },
      {
        "_index" : "log-20220125",
        "_type" : "_doc",
        "_id" : "25226536425246fab9b78a3dca4919fd",
        "_score" : 1.0,
        "_source" : {
          "correlation_id" : "123",
          "error" : null,
          "level" : 5,
          "message" : "Debug info",
          "source" : null,
          "time" : "2022-01-25T17:47:53.275937"
        }
      },
      {
        "_index" : "log-20220125",
        "_type" : "_doc",
        "_id" : "d49a4fda786241af98638b0d82c93ec9",
        "_score" : 1.0,
        "_source" : {
          "correlation_id" : "123",
          "error" : {
            "category" : "Unknown",
            "cause" : null,
            "code" : "UNKNOWN",
            "correlation_id" : null,
            "details" : null,
            "message" : "Fatal error",
            "stack_trace" : null,
            "status" : 500,
            "type" : null
          },
          "level" : 1,
          "message" : "Error that crash the process",
          "source" : null,
          "time" : "2022-01-25T17:47:53.275937"
        }
      }
    ]
  }
}
```

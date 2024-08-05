
```python
queue.configure(ConfigParams.from_tuples(
     "topic", "mytopic", # set topic
    'connection.protocol', 'mqtt',
    "connection.host", "localhost",
    "connection.port", 1883,
    'options.autosubscribe', True, # autosubscription on the topic
    'options.serialize_envelope', True # converts object into musquitto values 
))

```

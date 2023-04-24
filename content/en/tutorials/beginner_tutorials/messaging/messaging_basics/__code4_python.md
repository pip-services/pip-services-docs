
```python
Thread(target=messageQueue.listen, args=("123", MyMessageReceiver()), daemon=True).start()
```

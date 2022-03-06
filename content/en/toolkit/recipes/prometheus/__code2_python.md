
```python
console_log = True

class MyComponentA:

    def __init__(self):
        if console_log:
            print("MyComponentA has been created.")

    def mymethod(self):
        counters.increment("mycomponent.mymethod.calls", 1)
        timing = counters.begin_timing("mycomponent.mymethod.exec_time")
        try:
            if console_log:
                print("Hola amigo")
                print("Bonjour mon ami")
        finally:
            timing.end_timing()
        counters.dump()
```


```python
def mymethod(self):
    timing = counters.begin_timing("mycomponent.mymethod.exec_time")
    try:
       # our task
    finally:
       timing.end_timing()
    counters.dump()
```

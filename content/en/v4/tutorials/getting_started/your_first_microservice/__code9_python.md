
**/main.py**

```python

# -*- coding: utf-8 -*- 
from HelloWorldProcess import HelloWorldProcess

if __name__ == '__main__':
    runner = HelloWorldProcess()
    print("run")
    try:
        runner.run()
    except Exception as ex:
        print(ex)

```

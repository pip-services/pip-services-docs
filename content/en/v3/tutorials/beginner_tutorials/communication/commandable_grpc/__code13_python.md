
```python
import sys

from containers.MyDataProcess import MyDataProcess

if __name__ == '__main__':
    runner = MyDataProcess()
    try:
        runner.run()
    except Exception as ex:
        sys.stderr.write(str(ex) + '\n')
```

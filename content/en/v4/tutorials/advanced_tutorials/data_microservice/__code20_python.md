
**/bin/main.py**

```python
import sys
import traceback
import os

from pip_services4_observability.log import ConsoleLogger

# add parent directory to path
#sys.path.append(os.path.dirname(os.path.dirname(os.path.realpath(__file__))))

#from src.containers.BeaconsProcess import BeaconsProcess

if __name__ == '__main__':
    runner = BeaconsProcess()
    try:
        runner.run()
    except Exception as ex:
        ConsoleLogger().fatal("Beacons", ex, "Error: ")
        print(traceback.format_exc())
        sys.stderr.write(str(ex) + '\n')
```

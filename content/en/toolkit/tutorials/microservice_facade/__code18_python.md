
**/bin/main.py**

```python
# -*- coding: utf-8 -*-

import os
import sys

# add parent directory to path
sys.path.append(os.path.dirname(os.path.dirname(os.path.realpath(__file__))))

from pip_facades_sample_python.container.FacadeProcess import FacadeProcess

try:
    FacadeProcess().run()
except Exception as ex:
    sys.stderr.write(str(ex))

```

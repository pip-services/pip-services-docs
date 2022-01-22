
```python
# Step 1 - Database selection
import os

os.environ["MYSQL_ENABLED"] = "True"
#os.environ["POSTGRES_ENABLED"] = "True"

# Step 2 - The run() command
if __name__ == '__main__':
    runner = HelloFriendProcess()
    print("run")
    try:
        runner.run()
    except Exception as ex:
        print(ex)
```

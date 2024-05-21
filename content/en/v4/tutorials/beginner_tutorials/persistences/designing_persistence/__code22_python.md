
```python
# Step 1:  we extract the data from the MySQL database
persistence = database1
ids = [str(i) for i in range(0,10)]
my_data_list = persistence.get_list_by_ids('123', ids)

# Step 2: we insert the data into the mydata table in the PostgreSQL database.
persistence = database2
for i in my_data_list:
    result = persistence.create(None, i)
```

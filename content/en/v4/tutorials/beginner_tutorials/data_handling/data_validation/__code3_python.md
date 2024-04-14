
```python
# Comparing 1 < x < 10 by using the AND rule
my_schema2 = Schema().with_rule(AndRule(ValueComparisonRule("GTE", 1), ValueComparisonRule("LTE", 10)))

```


```cs
public void MyMethod()
{
   var timing = counters.BeginTiming("mycomponent.mymethod.exec_time");

   try
   {
      // our task
   }
   finally { 
      timing.EndTiming(); 
   }
   counters.Dump();
}

```

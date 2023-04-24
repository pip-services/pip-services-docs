
```cs

/// <summary>
/// Creating a process container
/// </summary>
class MyComponent1
{
    string _status;

    /// <summary>
    /// Creates a new instance of the component.
    /// </summary>
    public MyComponent1()
    {
        this._status = "Created";
        Console.WriteLine("MyComponent1 has been created.");
    }

    public void MyTask()
    {
        Console.WriteLine("task executed");
    }
}

```

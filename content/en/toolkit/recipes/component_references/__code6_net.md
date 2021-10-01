
```cs
public class Descriptor
{
    public Descriptor(string group, string type, string kind, string name, string version);

    public string Group { get; private set; }
    public string Type { get; private set; }
    public string Kind { get; private set; }
    public string Name { get; private set; }
    public string Version { get; private set; }

    public bool Match(Descriptor descriptor);
    public bool ExactMatch(Descriptor descriptor);
    public bool IsComplete();
    public override bool Equals(object obj);

    public override int GetHashCode();
    public override string ToString();
    public static Descriptor FromString(string value);
}

```


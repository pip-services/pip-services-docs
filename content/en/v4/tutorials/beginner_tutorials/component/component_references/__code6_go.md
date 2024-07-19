
See: [Descriptor](../../../toolkit_api/golang/components/refer/descriptor/)

```go

type Descriptor struct {
	group   string
	typ     string
	kind    string
	name    string
	version string
}

func NewDescriptor(group string, typ string, kind string, name string, version string) *Descriptor {
	if "*" == group {
		group = ""
	}
	if "*" == typ {
		typ = ""
	}
	if "*" == kind {
		kind = ""
	}
	if "*" == name {
		name = ""
	}
	if "*" == version {
		version = ""
	}

	return &Descriptor{group: group, typ: typ, kind: kind, name: name, version: version}
}

func (c *Descriptor) Group() string {
	return c.group
}

func (c *Descriptor) Type() string {
	return c.typ
}

func (c *Descriptor) Kind() string {
	return c.kind
}

func (c *Descriptor) Name() string {
	return c.name
}

func (c *Descriptor) Version() string {
	return c.version
}

func matchField(field1 string, field2 string) bool {
	return field1 == "" || field2 == "" || field1 == field2
}

func (c *Descriptor) Match(descriptor *Descriptor) bool {
	return matchField(c.group, descriptor.Group()) &&
		matchField(c.typ, descriptor.Type()) &&
		matchField(c.kind, descriptor.Kind()) &&
		matchField(c.name, descriptor.Name()) &&
		matchField(c.version, descriptor.Version())
}

func exactMatchField(field1 string, field2 string) bool {
	if field1 == "" && field2 == "" {
		return true
	}
	if field1 == "" || field2 == "" {
		return false
	}
	return field1 == field2
}

func (c *Descriptor) ExactMatch(descriptor *Descriptor) bool {
	return exactMatchField(c.group, descriptor.Group()) &&
		exactMatchField(c.typ, descriptor.Type()) &&
		exactMatchField(c.kind, descriptor.Kind()) &&
		exactMatchField(c.name, descriptor.Name()) &&
		exactMatchField(c.version, descriptor.Version())
}

func (c *Descriptor) IsComplete() bool {
	return c.group != "" && c.typ != "" && c.kind != "" &&
		c.name != "" && c.version != ""
}

func (c *Descriptor) Equals(value interface{}) bool {
	descriptor, ok := value.(*Descriptor)
	if ok {
		return c.Match(descriptor)
	}
	return false
}

func (c *Descriptor) String() string {
	result := ""
	if c.group == "" {
		result += "*"
	} else {
		result += c.group
	}
	if c.typ == "" {
		result += ":*"
	} else {
		result += ":" + c.typ
	}
	if c.kind == "" {
		result += ":*"
	} else {
		result += ":" + c.kind
	}
	if c.name == "" {
		result += ":*"
	} else {
		result += ":" + c.name
	}
	if c.version == "" {
		result += ":*"
	} else {
		result += ":" + c.version
	}
	return result
}

func ParseDescriptorFromString(value string) (*Descriptor, error) {
	if value == "" {
		return nil, nil
	}

	tokens := strings.Split(value, ":")
	if len(tokens) != 5 {
		return nil, errors.NewConfigError("", "BAD_DESCRIPTOR", "Descriptor "+value+" is in wrong format")
	}

	return NewDescriptor(strings.TrimSpace(tokens[0]), strings.TrimSpace(tokens[1]),
		strings.TrimSpace(tokens[2]), strings.TrimSpace(tokens[3]), strings.TrimSpace(tokens[4])), nil
}
```


```cs
public class MyGrpcService : GrpcService
{
    public MyGrpcService() : base("my_data_v1") { }

    private async Task<Number2> Sum(Number1 number, ServerCallContext context)
    {
        var res = Calculations.Summator.Sum(number.Value1, number.Value2);
        return new Number2() { Value= res };
    }

    protected override void OnRegister()
    {
        RegisterMethod<Number1, Number2>("Sum", Sum);
    }
}
```

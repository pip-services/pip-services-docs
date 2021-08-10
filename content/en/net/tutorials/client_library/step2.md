---
type: docs
no_list: true
title: "Step 2. Designing a Direct Client"
linkTitle: "Step 2. Direct Client" 
gitUrl: "https://github.com/pip-services-samples/client-beacons-dotnet"
---

Oftentimes systems that are created using a microservices architecture end up being assembled and installed as monoliths. Sometimes this is required as a transitional step, when the operations department isn’t quite yet ready to install and support such a fragmented system. It’s also common for startups, who usually have to deal with limited financial resources, to use this approach. Packing a large amount of microservices into a monolith allows teams to significantly reduce the amount of containers needed to get the system up and running. Such a system can easily be broken up into microservices in the future, when the startup is ready to support an increasing number of clients.

Direct clients are key to creating microservice-based monoliths. A direct client uses direct calls to the microservice’s controller from the shared address space, bypassing external interfaces in the process. On this step, we are going to create such a client. We’ll be placing our code in the **src/version1** folder.

First off, let's define an interface for our clients to implement. This interface should contain a list of all the methods that are provided by our microservice’s API. As a result, we get the following code:

**/src/version1/IBeaconClientV1.cs**

```cs
public interface IBeaconsClientV1
{
    Task<DataPage<BeaconV1>> GetBeaconsAsync(string correlationId, FilterParams filter, PagingParams paging);
    Task<BeaconV1> GetBeaconByIdAsync(string correlationId, string id);
    Task<BeaconV1> GetBeaconByUdiAsync(string correlationId, string udi);
    Task<CenterObjectV1> CalculatePositionAsync(string correlationId, string siteId, string[] udis);
    Task<BeaconV1> CreateBeaconAsync(string correlationId, BeaconV1 beacon);
    Task<BeaconV1> UpdateBeaconAsync(string correlationId, BeaconV1 beacon);
    Task<BeaconV1> DeleteBeaconByIdAsync(string correlationId, string id);
}


```

Let’s start writing our direct client. This will be a class that implements the interface we defined above, that has our controller set as a dependency in the controller, and that will call the controller’s methods when asked to. To learn more about the referencing and linking mechanisms, be sure to read [The Referenceable Recipe](../../recipes/component_references/). Ultimately, this will just be a wrapper class for the container. 
The direct client’s code is listed below:

**src/version1/BeaconsDirectClientV1.cs**

```cs
public class BeaconsDirectClientV1 : DirectClient<IBeaconsController>, IBeaconsClientV1
{
    public BeaconsDirectClientV1() : base()
    {
        _dependencyResolver.Put("controller", new Descriptor("beacons", "controller", "*", "*", "1.0"));
    }

    public async Task<DataPage<BeaconV1>> GetBeaconsAsync(
        string correlationId, FilterParams filter, PagingParams paging)
    {
        var methodName = "beacons.get_beacons";
        try
        {
            using (Instrument(correlationId, methodName))
            {
                return await _controller.GetBeaconsAsync(correlationId, filter, paging);
            }
        }
        catch (Exception ex)
        {
            InstrumentError(correlationId, methodName, ex);
            throw ex;
        }
    }

    public async Task<BeaconV1> GetBeaconByIdAsync(string correlationId, string id)
    {
        var methodName = "beacons.get_beacon_by_id";
        try
        {
            using (Instrument(correlationId, methodName))
            {
                return await _controller.GetBeaconByIdAsync(correlationId, id);
            }
        }
        catch (Exception ex)
        {
            InstrumentError(correlationId, methodName, ex);
            throw ex;
        }
    }

    public async Task<BeaconV1> GetBeaconByUdiAsync(string correlationId, string udi)
    {
        var methodName = "beacons.get_beacon_by_udi";
        try
        {
            using (Instrument(correlationId, methodName))
            {
                return await _controller.GetBeaconByUdiAsync(correlationId, udi);
            }
        }
        catch (Exception ex)
        {
            InstrumentError(correlationId, methodName, ex);
            throw ex;
        }
    }

    public async Task<CenterObjectV1> CalculatePositionAsync(string correlationId, string siteId, string[] udis)
    {
        var methodName = "beacons.calculate_position";
        try
        {
            using (Instrument(correlationId, methodName))
            {
                return await _controller.CalculatePositionAsync(correlationId, siteId, udis);
            }
        }
        catch (Exception ex)
        {
            InstrumentError(correlationId, methodName, ex);
            throw ex;
        }
    }

    public async Task<BeaconV1> CreateBeaconAsync(string correlationId, BeaconV1 beacon)
    {
        var methodName = "beacons.create_beacon";
        try
        {
            using (Instrument(correlationId, methodName))
            {
                return await _controller.CreateBeaconAsync(correlationId, beacon);
            }
        }
        catch (Exception ex)
        {
            InstrumentError(correlationId, methodName, ex);
            throw ex;
        }
    }

    public async Task<BeaconV1> UpdateBeaconAsync(string correlationId, BeaconV1 beacon)
    {
        var methodName = "beacons.update_beacon";
        try
        {
            using (Instrument(correlationId, methodName))
            {
                return await _controller.UpdateBeaconAsync(correlationId, beacon);
            }
        }
        catch (Exception ex)
        {
            InstrumentError(correlationId, methodName, ex);
            throw ex;
        }
    }

    public async Task<BeaconV1> DeleteBeaconByIdAsync(string correlationId, string id)
    {
        var methodName = "beacons.delete_beacon_by_id";
        try
        {
            using (Instrument(correlationId, methodName))
            {
                return await _controller.DeleteBeaconByIdAsync(correlationId, id);
            }
        }
        catch (Exception ex)
        {
            InstrumentError(correlationId, methodName, ex);
            throw ex;
        }
    }
}


```

Now that we’re done writing the client, we should test it. 
To be sure that our code works as intended, we need to perform some functional testing. Let’s start with creating, in a separate class, a set of tests that will be common to all our clients. This will help us simplify the process of testing multiple clients, as well as make sure that they all work the same. We’ll place the code for our tests in the **test/version1** folder. 

Now, let’s test the direct client. To do this, we create an instance of the direct client and pass it as a parameter to our set of tests. 
The code for this class and tests can be found in the [repository](https://github.com/pip-services-samples/client-beacons-dotnet).

We run the tests using the testing methods that are standard for the programming language we are using. All tests should pass successfully.This finishes the development of the Direct client.
    
Let's move on to [Step 3 to create the HTTP client](../step3).


<span class="hide-title-link">

### [Step 3 to create the HTTP client](../step3)

</span>

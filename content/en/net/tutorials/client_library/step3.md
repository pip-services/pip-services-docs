---
type: docs
no_list: true
title: "Step 4. Designing an HTTP Client"
linkTitle: "Step 4. HTTP Client" 
gitUrl: "https://github.com/pip-services-samples/client-beacons-dotnet"
---

The standard way of communicating with a microservice is via the HTTP protocol. It allows calling microservices that work on a separate server, or in their own container. Our example microservice uses a simplified version of the HTTP protocol that is automatically generated using the Commandable pattern.    
    
Then, creates a new class for the Commandable REST client and an implementation for each of the microservice’s methods. This is done by calling the REST API’s methods using the methods of the parent Commandable REST client, passing the necessary set of parameters, and then processing the response’s result. Since the answer from the client is returned as JSON, some programming languages will require that we first convert it to an instance with a specific type. We must always remember this when writing our HTTP clients.

The client’s resulting code is listed below:

**/src/version1/BeaconsHttpClientV1.cs**

```cs
public class BeaconsHttpClientV1 : RestClient, IBeaconsClientV1
{
	public BeaconsHttpClientV1(object config = null)
	{
		_baseRoute = "v1/beacons";

		if (config != null)
			Configure(ConfigParams.FromValue(config));
	}

	public async Task<CenterObjectV1> CalculatePositionAsync(string correlationId, string siteId, string[] udis)
	{
		var methodName = "beacons.calculate_position";
		try
		{
			using (Instrument(correlationId, methodName))
			{
				return await ExecuteAsync<CenterObjectV1>(correlationId, HttpMethod.Post, "/calculate_position", new
				{
					site_id = siteId,
					udis = udis
				});
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
				return await ExecuteAsync<BeaconV1>(correlationId, HttpMethod.Post, "", new
				{
					beacon = beacon
				});
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
				return await ExecuteAsync<BeaconV1>(correlationId, HttpMethod.Put, "", new
				{
					beacon = beacon
				});
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
				return await ExecuteAsync<BeaconV1>(correlationId, HttpMethod.Delete, $"/{id}", new { });
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
				return await ExecuteAsync<BeaconV1>(correlationId, HttpMethod.Get, $"/{id}", new { });
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
				return await ExecuteAsync<BeaconV1>(correlationId, HttpMethod.Get, $"/udi/{udi}", new { });
			}
		}
		catch (Exception ex)
		{
			InstrumentError(correlationId, methodName, ex);
			throw ex;
		}
	}

	public async Task<DataPage<BeaconV1>> GetBeaconsAsync(string correlationId, FilterParams filter, PagingParams paging)
	{
		var methodName = "beacons.get_beacons";
		try
		{
			using (Instrument(correlationId, methodName))
			{
				return await ExecuteAsync<DataPage<BeaconV1>>(correlationId, HttpMethod.Get, "/", new
				{
					filter,
					paging
				});
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

To be sure that our code works as intended, we should perform some functional testing. We must test the Commandable HTTP REST client using the class with tests that we developed in the previous step. To do this, ew create an instance of the HTTP REST client and pass it as a parameter to our set of tests.
An example implementation of the tests can be found in the example’s [repository](https://github.com/pip-services-samples/client-beacons-dotnet)

All tests should pass successfully.This finishes the development of our clients. As a result, we ended up with 2 clients: one for working from within a monolithic application, and another for working with the microservice from a different application, when utilizing a distributed architecture.

To simulate the service, let's create a test client in [Step 5. Implementing Test Memory Client.](../step4)


<span class="hide-title-link">

### [Step 5. Implementing Test Memory Client.](../step4)

</span>

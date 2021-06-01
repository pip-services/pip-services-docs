---
type: docs
title: "Benchmarking Framework"
linkTitle: "Benchmarking"
no_list: true
weight: 1
---

Performance, resilience and data integrity are a priority in microservice development. To make your life easier, we implemented a benchmarking framework to keep critical non-functional characteristics under constant control.  In a similar vein with Pip.Service Toolkit, the framework has symmetrical implementations to make it easier to switch between programming languages.

![Benchmarks diagram](/images/extras/benchmarks/benchmarks_diagram.png)

- What benchmarking framework does:
- Sets up environment before the test and tears it down after the test
- Executes test transactions
- Measures performance in transactions per second or TPS
- Supports active (by calling Execute method) or passive (by reporting via Context) measurement methods
- Supports configuration parameters to set connection strings or other settings for benchmarks
- Runs benchmarks sequential or in proportional by allocating % of calls to each benchmark
- Measures peak or nominal measurement at specified transaction rate
- Measures system utilization (RAM and CPU) during benchmarking process
- Measures overall environment performance (CPU, Video, Disk) for objective interpretation of results
- Capture and errors or validation results
- Console and GUI runners to execute benchmarks


<div class="btn-group" role="group" aria-label="Lnguage selector">
  <button id="select-node" type="button" class="btn btn-outline-secondary lang-select-btn">Node</button>
  <button id="select-dotnet" type="button" class="btn btn-outline-secondary lang-select-btn">.NET</button>
  <button id="select-golang" type="button" class="btn btn-outline-secondary lang-select-btn">Golang</button>
  <button id="select-dart" type="button" class="btn btn-outline-secondary lang-select-btn">Dart</button>
  <button id="select-python" type="button" class="btn btn-outline-secondary lang-select-btn">Python</button>
  <button id="select-java" type="button" class="btn btn-outline-secondary lang-select-btn">Java</button>
</div>


<div  id="node">

Example of use:

Create your own benchmark in file **SampleBenchmark.ts**

```typescript
import { Benchmark } from 'pip-benchmark-node';
import { RandomBoolean } from 'pip-services3-commons-node';
export class SampleBenchmark extends Benchmark {    
    private _greeting: string;
    public constructor() {        
      super("SampleBenchmark", "Measures performance of updating");    
    }
    public setUp(callback: (err: any) => void): void {        
      	this._greeting = this.context.parameters.Greeting.getAsString();        
      	callback(null);    
  }
  	public execute(callback: (err: any) => void): void {        
    	// Randomly generate message or errors        
    	if (RandomBoolean.chance(1, 10))            
    	  	this.context.sendMessage(this._greeting);        
    	else if (RandomBoolean.chance(1, 10))            
    	  	this.context.reportError("Something bad happend...");        
    	// Just wait and do nothing        
    	var sleep = require('sleep');        
    	sleep.sleep(5000); // sleep for 5 seconds        
    	callback(null);    
  }
}
```

Now make suit with DemoBenchmark. See code of **SampleBenchmarkSuite.ts** below:

```typescript
‍let sleep = require('sleep');
import { BenchmarkSuite } from 'pip-benchmark-node';
import { SampleBenchmark } from './SampleBenchmark'
export class SampleBenchmarkSuite extends BenchmarkSuite {
  	public constructor() {        
    	super("Samples", "Provides sample benchmarks")        
    	this.createParameter("Greeting", "Greeting message", "Hello world!");        
    	this.addBenchmark(new SampleBenchmark());    
  	}
}
```

Create **run.ts**:

```typescript
‍let process = require('process');
import { BenchmarkBuilder } from 'pip-benchmark-node';
import { SampleBenchmarkSuite } from './SampleBenchmarkSuite';
var benchmark = new BenchmarkBuilder()    
  	.addSuite(new SampleBenchmarkSuite())    
  	.forDuration(15)    
  	.forceContinue(true)    
  	.withAllBenchmarks()    
  	.create();
benchmark.run((err: any) => {    
  	if (err) console.error(err);
});
var report = benchmark.report.generate();
console.log(report);
```

Compile and run benchmark:

```bash
tsc
node ./bin/run.js
```
</div>

<div id="dotnet">

Example of use:
Create your own benchmark in file **SampleBenchmark.cs**

```cs
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using PipBenchmark.Utilities.Random;
namespace PipBenchmark.Sample.NetCore20
{
    public class SampleBenchmark : Benchmark
    {
        private string _greeting;
        public SampleBenchmark()
            : base("Sample", "Sample benchmark that does nothing")
        { }
        public override void SetUp()
        {
            // Do nothing...
            _greeting = Context.Parameters["Greeting"].AsString;
        }
        public override void Execute()
        {
            // Randomly generate message or errors
            if (RandomBoolean.Chance(1, 10))
                Context.SendMessage(_greeting);
            else if (RandomBoolean.Chance(1, 10))
                Context.ReportError("Something bad happend...");
            // Just wait and do nothing
            Thread.Sleep(500);
        }
    }
}
```

Now make suit with SampleBenchmark. See code of **SampleBenchmarkSuite.cs** below:

```cs
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
namespace PipBenchmark.Sample.NetCore20
{
    public class SampleBenchmarkSuite : BenchmarkSuite
    {
        public SampleBenchmarkSuite()
            : base("Samples", "Provides sample benchmarks")
        {
            CreateParameter("Greeting", "Greeting message", "Hello world!");
            AddBenchmark(new SampleBenchmark());
        }
    }
}
```

Create **Program.cs** and run this:

```cs
using PipBenchmark.Runner;
using PipBenchmark.Runner.Config;
using PipBenchmark.Runner.Console;
using PipBenchmark.Sample.NetCore20;
using System;
using PipBenchmark.Console;
using PipBenchmark.Utilities;
namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            var benchmark = new ConsoleBenchmarkBuilder()
                .AddSuite(new SampleBenchmarkSuite())
                .InThreads(1)
                .ForDuration(15)
                .ForceContinue(true)
                .WithAllBenchmarks()
                .Create();
            benchmark.Run();
            var report = benchmark.Report.Generate();
            Console.Out.WriteLine();
            Console.Out.Write(report);
        }
    }
}
```

</div>

<div id="golang">

Example of use:
**main.go**

```go
package main
import (    
  	"errors"    
  	"time"
  	bench "github.com/pip-benchmark/pip-benchmark-go/benchmark"    
  	benchconsole "github.com/pip-benchmark/pip-benchmark-go/console"    
  	rnd "github.com/pip-services3-go/pip-services3-commons-go/random"
)
‍
type SampleBenchmark struct {    
  	*bench.Benchmark    
  	greeting string
}
‍
func NewSampleBenchmark() *SampleBenchmark {    
  	c := SampleBenchmark{}    
  	c.Benchmark = bench.NewBenchmark("SampleBenchmark", "Measures performance of updating", "Type")     
	c.Benchmark.IExecutable = &c    
  	c.greeting = "test"    
  	return &c
}
‍
func (c *SampleBenchmark) SetUp() error {    
  	c.greeting = c.Context.GetParameters()["Greeting"].GetAsString()    
  	return nil
}
‍
func (c *SampleBenchmark) TearDown() error {    
  	return nil
}
‍
func (c *SampleBenchmark) Execute() error {    
  	// Randomly generate message or errors    
  	if rnd.RandomBoolean.Chance(1, 10) == true {        
  	  c.Context.SendMessage(c.greeting)    
  	} else if rnd.RandomBoolean.Chance(1, 10) == true {        
  	  c.Context.ReportError(errors.New("Something bad happend..."))    
  	}    
  	// Just wait and do nothing    
  	time.Sleep(10 * time.Millisecond)    
  	return nil
}
‍
type SampleBenchmarkSuite struct {    
  	*bench.BenchmarkSuite
}
‍
func NewSampleBenchmarkSuite() *SampleBenchmarkSuite {    
  	c := SampleBenchmarkSuite{}    
  	c.BenchmarkSuite = bench.NewBenchmarkSuite("Samples", "Provides sample benchmarks")      
  	c.CreateParameter("Greeting", "Greeting message", "Hello world!")      
  	c.AddBenchmark(NewSampleBenchmark().Benchmark)    
  	return &c
}
‍
func main() {    
  	var benchmark = benchconsole.NewConsoleBenchmarkBuilder()      
  	benchmark.AddSuite(NewSampleBenchmarkSuite().BenchmarkSuite).        
  	  	ForDuration(5).        
  	  	ForceContinue(true).        
  	  	WithAllBenchmarks()    
  	runner := benchmark.Create()      
	runner.Parameters().Set(map[string]string{"General.Benchmarking.MeasurementType": "Nominal"})      
	runner.Parameters().Set(map[string]string{"General.Benchmarking.ExecutionType": "Sequential"})
  	runner.Run(func(err error) {        
  	  	if err != nil {            
  	    	print(err.Error())        
  	  	}    
  	})
  	print(runner.Report().Generate())
}

```

Run benchmark:
```bash
go run ./main.go
```

</div>

<div id="dart">

Example of use:

**TODO**

</div>

<div id="python">

Example of use:

**TODO**

</div>

<div id="java">

Example of use:

**TODO**

</div>
---
type: docs
no_list: true
title: "Frequently Asked Questions"
linkTitle: "FAQ"
weight: 40
---

**Q: Why does Pip.Services name start with pip? Is it only for Python?**
**A:** There is no relation between Python pip tool and Pip.Services. The name comes from Pip.Life, a goal oriented social network, which was the first system built by our team and where Pip.Services were born. Pip there meant “exceptional, spiritual person”, “mark on the radar” which is associated with a target/goal to hit, or could be just short of “people”. Currently pip is our signature mark.

**Q: Why does Pip.Services have its own container? Why not use unity / spring containers?**
**A:** The central idea of Pip.Services is symmetric implementation across all supported languages. Popular containers are great. But, unfortunately, they are too specific to languages they are written in. Moreover, the popular containers are based on dependency injection that requires runtime reflection which is not available in some compiled languages. However, it doesn’t mean you can’t use other containers. Pip.Services toolkit uses composition and can be easily mixed with other libraries or frameworks.

**Q: Why does Pip.Services have its own loggers / converters / reflection utilities / etc.?**
**A:** It is done to provide symmetric code across all supported languages. Please, see the answer to the previous question.

**Q: My company already has a microservices framework and full rewrite is not an option. How can I introduce Pip.Services?**
**A:** It is important to understand two things. First: microservices by design are components with independent lifecycle. Nothing shall prevent you from keeping old microservices the way they are and start implementing new microservices using new technologies. Second: Pip.Services toolkit was designed for composition and can be easily mixed with other libraries and frameworks. That allows to incrementally adopt Pip.Services without pain.

**Q: What is a recommended strategy for incremental adoption of Pip.Services?**
**A:** Irrelevant to implementation details, the first step in microservices development is always to establish consolidated logging and metrics across all microservices. Whether you instrument your existing microservices using loggers and performance counters from Pip.Services toolkit, or wrap your existing logging and monitoring into Pip.Services components. Then you shall go through 3 steps in any order: decompose microservice code into loosely coupled components, implement properly versioned interfaces, package microservice components into appropriate containers.

**Q: How stable is Pip.Services toolkit?**
**A:** It depends. Core of the toolkit (commons, components, container, data, rpc, messaging) is stable, while some technology-specific modules can be less stable. Also it depends on the language. Our team developed hundreds of microservices in .NET and Node.js in many projects and that implementation is very stable. Golang and Dart are quite new. Golang is being quickly adopted and maturing fast. Many 3rd party libraries in Dart are still low quality and using Dart in production carries a lot of risks (mid 2020). Python was added mainly to experiment with BigData, AI and Natural Languages and hasn’t been used a lot. And Java implementation didn’t get much attention yet. SpringBoot is a great framework which dominates the Java world. We are not trying to compete with it directly. We keep the Java version for clients who value code symmetry more than bells and whistles that SpringBoot provides.

**Q: I’m not sure microservices is the right approach or/and there is a resistance to microservice in my organization. What shall I do?**
**A:** Any architecture whether it is monolithic, course services or microservices has its own pros and cons. You shall carefully consider it’s short-term as well as long-term impact. And Pip.Services toolkit is not just for microservices. It is simply a collection of patterns that can be used in any architecture. It just happens that we use it for microservices more often. Moreover, we created a special technique using containers and direct clients when we develop microservices, but deploy them as a monolithic system. That helps to lower initial barrier/cost and can be highly valuable for startups or organizations that are cost sensitive or just not ready for microservices yet. Later that code can be decoupled and redeployed as independent microservices without changing a line of code!

**Q: Does Pip.Services support backward compatibility?**
**A:** We focus on enterprise systems that can live for decades. For that reason, backward compatibility is extremely important for us. The code written today shall compile in 10 years without problems. For that reason we use semantic version, making sure that all minor and bigfix releases are backward compatible and major versions can coexist in the same code base. That’s our goal at least. If you step on any issue, please, let us know about it.

**Q: Can Pip.Services be used for commercial projects?**
**A:** Absolutely! All Pip.Services code is provided under MIT license and it is safe to be used in commercial projects free of charge.

**Q: I like Pip.Services and would like to contribute. What can I do?**
**A:** Oh, there are lots of things where you can help: writing and maintaining code, writing documentation and tutorials, supporting other developers or just spreading the word about the project. Any help is welcome and appreciated. Just send us a message and we’ll get you into the project.

**Q: I haven’t found an answer to my question. What shall I do?**
**A:** Ask you question on [stackoverflow] or send us a message, and we may add you question to this FAQ
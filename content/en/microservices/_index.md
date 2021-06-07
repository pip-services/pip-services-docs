---
type: docs
title: "Microservices"
linkTitle: "Microservices"
no_list: true
exclude_from_list: true
weight: 70
---
---

### Overview

When creating enterprise systems, functions tend to be duplicated in various parts of these systems. For example: registering system events, working with large binary objects, collecting analytical data, generating keys, managing users, notifications, help systems, and so on.

Until recently, companies had just a few options available: either develop this functionality on their own, or pay for a third party SaaS solution. Buying and integrating an existing solution was pretty much impossible, as the microservice market was close to non-existent. The reason for this was lack of standards. Each company has its own unique technological stack, consisting of certain chosen programming languages, databases, and infrastructure services. Creating a set of reusable microservices that would be able to satisfy all or even just the most common technological combinations is not a simple task.

Over the course of the past few years, our team has been creating different enterprise systems for various clients, which lead us to creating a set of standard solutions. The Pip.Services Toolkit helped us develop a set of reusable microservices that could be integrated into most technological platforms, used by enterprises. Seeing how helpful such a Toolkit can be, we decided to help out other developers as well by making these microservices open source. We named them the Pip.Services Library, and made them free for commercial usage under an MIT licence.
As of today, there are dozens of reusable microservice available in the Pip.Services Library. We’ve divided them up into the following 6 main groups, for ease of use and navigation:

![Microservices groups diagram](/images/microservices/microservices_groups.png)

### Categories

<div class="card-deck">

  <div class="card">
    <div class="card-body">
      <h5 class="card-title"><b>Infrastructure Management Microservices</b></h5>
      <p class="card-text">Set of tools for managing infrastructure. Includes tools for collecting logs, metrics, events, statistics, and so on.</p>
      <a href="infrastructure" class="stretched-link"></a>
    </div>
  </div>

  <div class="card">
    <div class="card-body">
      <h5 class="card-title"><b>Users Management Microservices</b></h5>
      <p class="card-text">
        Full array of instruments for user registration, access control, watching over users’ actions, setting up communication channels, and broadcasting messages.
      </p>
      <a href="users" class="stretched-link"></a>
    </div>
  </div>

</div>

<br>

<div class="card-deck">

  <div class="card">
    <div class="card-body">
      <h5 class="card-title"><b>Product Support Microservices</b></h5>
      <p class="card-text">Provides two-way communication with users, processes user requests.</p>
      <a href="support" class="stretched-link"></a>
    </div>
  </div>

  <div class="card">
    <div class="card-body">
      <h5 class="card-title"><b>Content Management Microservices</b></h5>
      <p class="card-text">Work with articles, images, comments, context help and other multimedia content.</p>
      <a href="content" class="stretched-link"></a>
    </div>
  </div>
  
</div>

<br>

<div class="card-deck">

  <div class="card">
    <div class="card-body">
      <h5 class="card-title"><b>eCommerce Microservices</b></h5>
      <p class="card-text">Product catalogs, user reviews, credit card processing, and carrying out electronic payments.</p>
      <a href="ecommrce" class="stretched-link"></a>
    </div>
  </div>

  <div class="card">
    <div class="card-body">
      <h5 class="card-title"><b>Internet of Things Microservices</b></h5>
      <p class="card-text">Lists of devices, status and movement tracking, and others.</p>
      <a href="iot" class="stretched-link"></a>
    </div>
  </div>
  
</div>

<br>

All of these microservices have been tested and used in actual production systems. Thanks to the use of the Pip.Services Library, we’ve been able to cut time spent on backend development by up to 30% in our projects.
‍
The Pip.Services Library is actively evolving. Practically every month new microservices are added, and existing ones are improved/expanded. Feel free to go on over and check out what microservices each of these categories contains and get some more information on each one of them.


<span class="hide-title-link">

#### [Infrastructure Management Microservices](infrastructure)
#### [Users Management Microservices](users)
#### [Product Support Microservices](support)
#### [Content Management Microservices](content)
#### [eCommerce Microservices](ecommrce)
#### [Internet of Things Microservices](iot)

</span>
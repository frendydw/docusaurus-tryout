---
id: microservice-features
title: Features
---

there are 6 defining features of microservices.

## Multiple Individually Deployable Components

Microservices architecture encourages you to break your application into smaller components. This makes it easy to apply changes. Deploying such components does not end up impacting a large part of the codebase.

This, in turn, makes it easier to introduce new features in an application since the deployment units are small and manageable.

## Service Distribution-Based on Business Capability

Technical boundaries decide the overall architecture of monolithic applications. You would have one team working on the user interface, one working on databases, and one working on the integration layer.

Microservices actively discourages such a model. Business functionalities decide the overall landscape of your microservices.

In microservices, teams are based on expertise in a particular business function. Each team strives to be self-sufficient in terms of their technology stack.

For example, in a typical microservices-based application, you could think of user registration as one microservice and billing management as another. Different teams manage these different services.

## Decentralized

Microservices architecture invariably leads to distributed systems. It embraces the concept of decentralized data management.

There won't be a monolithic database containing all the data belonging to the application.

Rather, each service will have ownership of the data related to the business functionality supported by that particular service.

This isolates the impact of schema changes. Development teams can be more in control of the impact when planning releases.

## Build it, Run It
Microservices also embrace the concept of DevOps.

The idea is that the team responsible for building a service is also responsible for operating and maintaining its code in production.

This is a big mindset shift from monolithic applications. In monolithic applications, developers were often only concerned about just writing their feature code. In the end, they would simply commit the changes to a central repository. The responsibility of deploying the changes would rest with another team.

This introduces an extra layer of process. It makes deploying changes slower. If an issue occurred, the same process overhead might cause even more delays.

DevOps eliminates this by pushing the responsibility of deploying and running a service to the team developing it. Thus, if there's an issue, these teams can react much faster. These teams can also plan their own releases and hot-fixes. This increases customer satisfaction.

## Polyglot
Another significant aspect of microservices is its technology independence.

Each microservice is its own world. It communicates with other services through standard channels. They don't rely on technology-related bindings.

This gives an incredible amount of feature to the developers. Teams maintaining a service are now free to choose the technology stack for their service.

The team can make informed choices based on the problem that is being solved. For example, certain problems lend themselves better to the use of a particular pattern or database choice. Guess what, the teams are free to decide what's best for their use case. This directly feeds into independence and ownership of the teams.

## Black Box
Each microservice is defined as a black box. This means that details of their complexity are hidden from other components.

Services communicate to each other using a set of well-defined APIs or messaging channels. This prevents the proliferation of dependencies between microservices.

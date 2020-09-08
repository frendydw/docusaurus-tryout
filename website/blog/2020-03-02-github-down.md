---
title: Github Was Down Last February
author: Sergio De Simone
authorURL: https://www.infoq.com/profile/Sergio-De-Simone/
authorFBID: 611217057
---

GitHub completed its internal investigation about what caused multiple service interruptions that affected its service last February for over eight hours. The root cause for this was a combination of unexpected database load variation and database configuration issues.

All incidents affected GitHub's main database cluster, mysql1, which originally was the only MySQL cluster at GitHub.

Over time, as mysql1 grew larger and busier, we split functionally grouped sets of tables into new clusters and created new clusters for new features. However, much of our core dataset still resides within that original cluster.

The first incident happened when GitHub engineers inadvertently sent a resource intensive query against the database master instead of its read-only replicas. As a consequence of this, ProxySQL, which is responsible for connection pooling, was overloaded and started serving queries inconsistently.

A similar issue occurred two days later due to a planned master database promotion aimed at investigating potential issues when a master goes read-only for a while. This also generated an unexpected load and a similar ProxySQL failure.

In both cases, reducing the load was enough to fix the failure.

More critical was the third incident, which lasted over two hours. Again in this case, ProxySQL was the failure point due to active database connection crossing a given threshold.

The major issue in this case was related to the fact that active connections remained above the critical threshold after remediation, which made the system enter a degraded service state. It turned out ProxySQL was configured improperly and due to a clash between the system-wide and process-local LimitNOFILE setting its descriptor limit was downgraded to 65536.

The fourth incident was caused by a change in GitHub application logic. This change generated queries that rapidly increased load on mysql1 master, which affected all dependent services.

According to GitHub engineers, all issues were easy to remediate once their root cause was identified, but the interaction between systems was not always immediate to understand. Consequently, they explain, a first focus area for improvement has been observability, followed by more thorough system integration and performance testing before deploying to production.

Going to the heart of the problem, though, requires improving data partitioning with the aim of reducing load on mysql1 cluster master, according to GitHub engineers. This would help fulfilling the requirement of zero downtime and reduce user impact of any future incidents.

In particular, they worked on one table, the abilities table, which is used with any authentication request and is thus central for performance. After two month's work, the abilities table runs now in its own cluster, which previously required making it independent (read, JOIN-free) from any other table in the system. Thanks to this change only, load on mysql1 cluster master was reduced by 20%, say GitHub engineers.

While the effort to further partition their database will going on, with the aim to further reduce write-load on the mysql1 cluster by 60% and move 12 schema domains out of it, GitHub engineers also identified a number of other initiatives to improve things. Those include reducing the number of reads from a master when the same data is available from replicas; using feature flags to disable code changes that might prove problematic; improving GitHub internal dashboard to better identify deployment problems; and using sharding to improve horizontal scalability.

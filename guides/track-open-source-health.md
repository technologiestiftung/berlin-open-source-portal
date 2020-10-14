---
explains: Understanding the impact and health of Open Source projects
---

# How we track Open Source health

## Reusability

We strive to make our code generally reusable for everyone who would like to solve the same problems as we do, our projects are not all at that level yet. We grade our project on the following scale:

1. **Custom, opaque**: Very specific and not easy to learn from. Might lack documentation, have non-English code and documentation, contain copyrighted content or lack an [Open Source licence](https://opensource.org/licenses).
2. **Custom, reference**: Specific to our case and documented, can be used to learn from.
3. **Adaptable**. Documented and possible to adapt.
4. **Reusable, configured**. Configured specifically for our use, easily reconfigurable. 
5. **Reusable**. Fully (externally) configurable and useful for anyone.

As our goal is to make as much of the code we develop as reusable as possible. We would love to collaborate with you on implementing it in your situation, improving the reusability in the process. File an issue in the GitHub repository belonging to the project or send us an email and we'll try to help you as soon as possible.

## Basic project requirements

Any of our Open Source projects should have all of the following:

#### Using

* A [good `README`](write-a-readme.md) with a good project description and a good user guide.
* Complete user documentation.

#### Developing

* A readme with clear instructions on how to develop.
* Complete inline documentation, tracked and with a high code coverage.
* High automated test code coverage.
* A section on the architecture or the background to the construction of the project.

#### Contributing

* A [`CONTRIBUTING`](../CONTRIBUTING.md) explaining how someone can contribute issues, code, documentation or tests to the project.
* A clear governance so that contributors can understand what they can expect when they decide to contribute to the project, preferably in the `CONTRIBUTING` or in a `GOVERNANCE`.
* Reply to incoming issues and Pull Requests [within 48 hours](https://docs.google.com/presentation/d/1hsJLv1ieSqtXBzd5YZusY-mB8e1VJzaeOmh8Q4VeMio/edit#slide=id.g43d857af8_0177).
* Timely resolution to incoming issues.
* Timely resolution to incoming pull requests.
* A CI server to make contributing easier and safer.

## Community Metrics

A set of metrics to track per project. Most of these can be found in the GitHub repository Insights page.

### Usage

By measuring both the views the repo is receiving and the amount of clones it is getting we can see how many people discover the project, and how many of those use the project.

Measure:

* Views
* Clones
* Download from package managers

### Contributions

Insights into contributions can help understand where the project should be going and what kind of governance structure you need.

Measure:

* Total contributor count
* First time, casual, and repeat contributors
* Number of open issues and PRs
* Number of opened issues and PRs per user

### Maintainer activity

Track how long it takes to reply to an issue or pull request, if this is longer than 48 hours [the likelyhood that the contributor will contribute again drops off](https://docs.google.com/presentation/d/1hsJLv1ieSqtXBzd5YZusY-mB8e1VJzaeOmh8Q4VeMio/edit#slide=id.g43d857af8_0177).

Measure:

* Time to reply to an issue or PR
* Average time an issue remains open
* Whether issues get closed by PRs
* Whether stale issues get closed
* Average time to merge a pull request

## Automation

Friendly bots 🤖 can help you make great reusable code and help you grow a community around it. Automated test and code coverage reports are a great start. Integrating incoming issues and PRs in existing project management software can also make it a lot easier to respond and react timely to incoming contributions by the community. And consider having a bot generate reports on the health of individual products.

---

## Further reading
* [opensource.guide: Open Source Metrics](https://opensource.guide/metrics/)
* [Mozilla Community Metrics](https://docs.google.com/presentation/d/1hsJLv1ieSqtXBzd5YZusY-mB8e1VJzaeOmh8Q4VeMio/edit#slide=id.g43d857af8_0177)
* [opensource.guide: Building Welcoming Communities](https://opensource.guide/building-community/)
---
explains: The goto file to see what a project is and how to use it
---

# How to write a `README`

The `README` is the first thing almost anyone sees and perhaps one of the critical parts of the project. It serves as an advertisement for the product, indicator of for what users it can be relevant, the primary user’s guide and the way to get new collaborators up to speed.

When writing the `README` keep your users in mind, they include:

* Your teammates
* Developers new to our organisation
* (Potential) users of our projects
* Contributors, both in and external
* People interested in our work

This guide goes into the primary elements any `README` should have, the bare minimum: what the project is; how to install, run and deploy; how to develop and test; and how to contribute.

## 1. The project name and description

> The `README` is an introduction. It should assume the reader knows absolutely nothing about the software and should provide a brief introduction. If software were a screenplay, the `README` would be the elevator pitch. If a person finishes reading the first 10 lines of `frobnicator/README` and still does not know if `frobnicator` is a widget library, accounting software, or a video game, then the author of the README has failed. — [William Pursell on StackOverflow](https://stackoverflow.com/a/2305173)

Give your project a short name by which people can refer to it. Preferably the repository name is similar. Descriptive names are great. However, feel free to get creative.

The description is a high-level overview of what the project is for, what it does and in what way it should be used. The description can double as a mission to keep you focussed and on track, so it is wise to define this as early in the process as possible.

Be sure to answer these questions in your description:

* What is this project?
* How does it work?
* Who are the users?
* What is the benefit for the users?
* What is the goal of this project?

Start with the most important things so people can continue their search if this project is not what they are looking for.

Make this section shine: If your project has a front-end include a screenshot here; if there is a demo or there are live examples, include links; if there are features, list them.

## 2. How to install, configure, run and deploy

The basics a user needs to know to use the project. Be sure to document every necessary step and some common edge cases to get started and point to relevant further documentation if available.

These sections can be quite technical. You don’t need to explain everything and you can expect users to search the web for what they don’t understand.

> We find it works really well if you follow a two-step approach to develop the content for this section: first, help someone setup the site who has never done it before, and then write down the exact instructions. Next, ask someone to follow those instructions and see if you’ve missed anything. — [18F: Making `README`s Readable](https://open-source-guide.18f.gov/making-readmes-readable/)

Make sure that these sections are always up-to-date. If you change functionality in the code, update the `README` concurrently.

Tip: If this section gets long and tedious it might be worth it to try and simplify the process of getting started, as ease of use is one of the key reasons for developers to use a project.

## 3. How to develop and test

Everything a developer needs to know to work on this project, including style guides, how tests work and how to use the development tools.

## 4. How to contribute and ask questions

Here you can describe how to get involved in the project, contribute and ask questions. 

If you have a `CONTRIBUTING` file, be sure to point to it from your `README`.

## Other things to include

Add more information if you think it is necessary as long as the `README` stays a document that is readable by every new user. For instance, if your install guide becomes very long consider creating a separate guide for this in the form of an `INSTALL` file or a guide in your documentation.

Depending on your project you might also need to explain more about:

* Nomenclature: what words are used in the code and what do they mean
* Architecture: what is the structure you’ve decided on, and what do developers need to know about this
* Dependencies: what software does this project depend on
* Licence: what licence the project has and point to the `LICENCE` file.

---

## Inspirations and further reading

* [18Fs Open Source Guide on `README`s](https://open-source-guide.18f.gov/making-readmes-readable/)
* [Jesse Luotos `README` best practices](https://github.com/jehna/readme-best-practices/)
* [`README`s for GOV.UK applications](https://docs.publishing.service.gov.uk/manual/readmes.html)
* [How to write a good `README` on StackOverflow](https://stackoverflow.com/questions/2304863/how-to-write-a-good-readme)

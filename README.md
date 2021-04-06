# Berlin Open Source

## _Für eine offene Stadt_ (for an open city)

A prototype to showcase Open Source Software that is built, maintained and/or funded by Berlin state governmental agencies.

We built this prototype in order to make a case for the use of FOSS (Free and Open Source Software) in government and to convince the related stakeholders that there is value in making your Open Source infrastructure more visible and accessible.

---

## Adding content

Feel free to make pull requests, we'll review and merge them as soon as we can. Feel free to edit the MarkDown files, if you are unfamilliar with this, the [Mastering MarkDown](https://guides.github.com/features/mastering-markdown/) guide is pretty good.

### Adding a project

To add a project just create a new markdown file in `src/projects/`. Take a look at the already existing projects and define your own front matter accordingly.

#### Example project markdown front matter:

```yaml
---
layout: layouts/project.liquid
tags: ["Unwelt"] # optional
id: giessdenkiez
title: Gieß den Kiez
abstract: Alle Berliner Stadtbäume in einer Anwendung
languages: ["Typescript"] # optional
license: MIT # optional
link: https://www.giessdenkiez.de # optional
repository: https://github.com/technologiestiftung/giessdenkiez-de
has-hero: true # optional
has-thumb: true # optional
date: 2021-02-16
---

```

If you want your project to be presented with images, you add them in `src/assets/images/projects/`. Make sure to name your images according to your `id` value in the markdown front matter, e.g. `giessdenkiez_thumb.png` or `giessdenkiez_hero.jpg`.

> Optional: After you've created your project, you may run `npm run fetch:repos` to manually add the latest GitHub repository data to your project page. If you do not do this, don't worry. Repository data is automatically fetched once a day, so you may just need to wait a bit to see your GitHub repository data appear after merge.

> Also take a look at our (German-language) [contribution guidelines](/CONTRIBUTING.md).

### Adding an external link

To add a link with external information regarding Open Source software simply create a new markdown file in `/src/links/`. In order to give your link the right title you should add the `title` in the front matter. Keep the `title` short and simple to understand. Also add a short description, `link: YOUR-LINK-HERE` and `tags: document` in order to associate the document with the right category.

Example:

```yaml
---
title: Choose a License
tags: document
link: https://choosealicense.com/
---
Welche Lizenz passt zu meinem Open Source-Projekt?
```

## Installing, running and building

This site is built with [Eleventy (11ty)](https://www.11ty.dev/docs/).

### Developing

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

### Building the site

```bash
npm run build
```

## Testing

For frontend testing we use [Cypress](https://docs.cypress.io/guides/overview/why-cypress.html) and [Cypress Testing Library](https://testing-library.com/docs/cypress-testing-library/intro/).

Make a test run:

```bash
npm run test
```

Launch test runner in watch mode:

```bash
npm run test:watch
```

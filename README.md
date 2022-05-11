![](https://img.shields.io/badge/Built%20with%20%E2%9D%A4%EF%B8%8F-at%20Technologiestiftung%20Berlin-blue)

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
tags: ["Umwelt"] # optional
id: giessdenkiez
title: Gieß den Kiez
abstract: Alle Berliner Stadtbäume in einer Anwendung
languages: ["Typescript"] # optional
license: MIT # optional
link: https://www.giessdenkiez.de # optional
repository: https://github.com/technologiestiftung/giessdenkiez-de
developers: ["Technologiestiftung Berlin"]
backers: ["Senatskanzlei Berlin"]
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

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/dnsos"><img src="https://avatars.githubusercontent.com/u/15640196?v=4?s=64" width="64px;" alt=""/><br /><sub><b>Dennis Ostendorf</b></sub></a><br /><a href="https://github.com/technologiestiftung/berlin-open-source-portal/commits?author=dnsos" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/Lisa-Stubert"><img src="https://avatars.githubusercontent.com/u/61182572?v=4?s=64" width="64px;" alt=""/><br /><sub><b>Lisa-Stubert</b></sub></a><br /><a href="https://github.com/technologiestiftung/berlin-open-source-portal/commits?author=Lisa-Stubert" title="Code">💻</a></td>
    <td align="center"><a href="http://toridykes.com/"><img src="https://avatars.githubusercontent.com/u/12991433?v=4?s=64" width="64px;" alt=""/><br /><sub><b>Tori Boeck</b></sub></a><br /><a href="https://github.com/technologiestiftung/berlin-open-source-portal/commits?author=tori-d" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/bnjmnsbl"><img src="https://avatars.githubusercontent.com/u/11134234?v=4?s=64" width="64px;" alt=""/><br /><sub><b>Benjamin Seibel</b></sub></a><br /><a href="https://github.com/technologiestiftung/berlin-open-source-portal/commits?author=bnjmnsbl" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/inesweigand"><img src="https://avatars.githubusercontent.com/u/79520450?v=4?s=64" width="64px;" alt=""/><br /><sub><b>inesweigand</b></sub></a><br /><a href="https://github.com/technologiestiftung/berlin-open-source-portal/commits?author=inesweigand" title="Code">💻</a></td>
    <td align="center"><a href="http://www.awsm.de/"><img src="https://avatars.githubusercontent.com/u/434355?v=4?s=64" width="64px;" alt=""/><br /><sub><b>Ingo Hinterding</b></sub></a><br /><a href="https://github.com/technologiestiftung/berlin-open-source-portal/commits?author=Esshahn" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/knudmoeller"><img src="https://avatars.githubusercontent.com/u/1128115?v=4?s=64" width="64px;" alt=""/><br /><sub><b>Knud Möller</b></sub></a><br /><a href="https://github.com/technologiestiftung/berlin-open-source-portal/commits?author=knudmoeller" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://www.technologiestiftung-berlin.de/de/startseite/"><img src="https://avatars.githubusercontent.com/u/15638947?v=4?s=64" width="64px;" alt=""/><br /><sub><b>edgalindo</b></sub></a><br /><a href="https://github.com/technologiestiftung/berlin-open-source-portal/commits?author=edgalindo" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/evelynebrie"><img src="https://avatars.githubusercontent.com/u/32559774?v=4?s=64" width="64px;" alt=""/><br /><sub><b>evelynebrie</b></sub></a><br /><a href="https://github.com/technologiestiftung/berlin-open-source-portal/commits?author=evelynebrie" title="Code">💻</a></td>
    <td align="center"><a href="https://volligohne.de/"><img src="https://avatars.githubusercontent.com/u/1699298?v=4?s=64" width="64px;" alt=""/><br /><sub><b>Timur Çelikel</b></sub></a><br /><a href="https://github.com/technologiestiftung/berlin-open-source-portal/commits?author=timurc" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/denisyilmaz"><img src="https://avatars.githubusercontent.com/u/4189607?v=4?s=64" width="64px;" alt=""/><br /><sub><b>Denis Yılmaz</b></sub></a><br /><a href="https://github.com/technologiestiftung/berlin-open-source-portal/commits?author=denisyilmaz" title="Code">💻</a></td>
    <td align="center"><a href="https://vogelino.com/"><img src="https://avatars.githubusercontent.com/u/2759340?v=4?s=64" width="64px;" alt=""/><br /><sub><b>Lucas Vogel</b></sub></a><br /><a href="https://github.com/technologiestiftung/berlin-open-source-portal/commits?author=vogelino" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## Content Licencing

Texts and content available as [CC BY](https://creativecommons.org/licenses/by/3.0/de/).

## Credits

<table>
  <tr>
    <td>
      A project by <a src="https://www.technologiestiftung-berlin.de/">
        <br />
        <br />
        <img width="150" src="https://citylab-berlin.org/wp-content/uploads/2021/05/tsb.svg" />
      </a>
    </td>
    <td>
      Supported by <a src="https://www.berlin.de/">
        <br />
        <br />
        <img width="150" src="https://berlinopensource.de/assets/images/senweb-logo.svg" />
      </a>
    </td>
  </tr>
</table>

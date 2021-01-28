# Berlin Open-Source Portal

A prototype to showcase Open Source Software that is built, maintained and/or funded by Berlin state governmental agencies.

We built this prototype in order to make a case for the use of FOSS (Free and Open Source Software) in government and to convince the related stakeholders that there is value in making your Open Source infrastructure more visible and accessible.

---

## Adding content

Feel free to make pull requests, we'll review and merge them as soon as we can. Feel free to edit the MarkDown files, if you are unfamilliar with this, the [Mastering MarkDown](https://guides.github.com/features/mastering-markdown/) guide is pretty good.

### Adding a project

To add a project just make a new markdown file in `src/projects/`. Add a `title` and an `abstract` in the front matter.

```yaml
---
title: Catalog
abstract: A drop in replacement for CKAN
---

```

---

### Adding a document

To add a document just make a new markdown file in `/src/documents/`. In order to give your document the right title on the documents page you should add the `title` in the font matter. Keep the `title` short and simple to understand.

```yaml
---
title: How to add guides, add pages and change this website
---

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

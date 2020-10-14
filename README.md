Live at [https://bnjmnsbl.github.io/berlinOS-demo/](https://bnjmnsbl.github.io/berlinOS-demo/)

# Berlin Open Source

A prototype to showcase Open Source Software that is built, maintained and/or funded by Berlin state governmental agencies.

We built this prototype in order to make a case for the use of FOSS (Free and Open Source Software) in government and to convince the related stakeholders that there is value in making your Open Source infrastructure more visible and accessible.  

This site is based on a fork of the [Amsterdam Open Source Repository](https://github.com/Amsterdam/amsterdam.github.io), because not reinventing the wheel is kind of the point of Open Source. 

---

## Adding content

Feel free to make pull requests, we'll review and merge them as soon as we can. Feel free to edit the MarkDown files, if you are unfamilliar with this, the [Mastering MarkDown](https://guides.github.com/features/mastering-markdown/) guide is pretty good.

For some German language info on how to contribute, be sure to read the [CONTRIBUTING.md](CONTRIBUTING.md).

### Adding a Project

To add a project just make a new markdown file in `/projects/`. Add an `abstract` in the front matter as a short description of what the product is. 

You can either make a new Project page on this site or link directly to an external repo or product page by adding a `link` property to the front matter.

```yaml
---
title: Catalog
abstract: A drop in replacement for CKAN
link: https://github.com/YOUR_REPO
---
```

---

### Adding a Guide

Our guides are for everyone, whatever their affiliation. They should be general, understandable for ‘beginners’ and not contain too much technical detail. The content of this website should be broadly applicable to every one of our projects, and thus not feature 'style guides' etc, those are better at home with projects in their repositories.

To add a guide just make a new markdown file in `/guides/`. In order to give your guide the right subtitle on the guides page you should add the `explains` in the [Jekyll front matter](https://jekyllrb.com/docs/frontmatter/). Keep the `explains` short and simple to understand.

```yaml
---
explains: How to add guides, add pages and change this website
---
```


## Installing, running and building

This site and it's contents are served over [GitHub pages](http://pages.github.com) and redered in it's native static site genrator [Jekyll](http://jekyllrb.com).

More on [Jekyll as a static site generator with GitHub](https://help.github.com/articles/using-jekyll-as-a-static-site-generator-with-github-pages/).

### Installing locally

[Install Ruby and it's package manager Bundler](https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/) with 

```bash
gem install bundler
```

Install the dependencies and Jekyll using 

```bash
bundle install
```

### Running and serving locally

Run Jekyll, generate the site, watch for changes and serve over a local webserver with 

```bash
jekyll serve --livereload
```

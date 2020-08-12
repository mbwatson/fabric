<p align="center">
  <a href="https://www.fabric-testbed.org">
    <img alt="Gatsby" src="https://www.dropbox.com/s/26lsgihw277bfgm/2019_NRIG_FABRIC%20logo%20Dark.png?raw=1" />
  </a>
</p>

# FABRIC Testbest Website

## Overview

This is the marketing website for FABRIC Testbed. This site is built with [Gatsby](https://www.gatsbyjs.org), which is a free and open source framework based on [React](https://reactjs.org). Sites built with Gatsby are modern and _fast_.

## Project Structure

The portion of the project one mostly interacts with lives within the `src` directory. Its structure is shown below, and the directories described in this document are expanded to their state at the time of its writing.

```bash
$ tree -L 1 ./src
./src
├── components
├── contexts
├── data
├── fonts
├── hooks
├── images
├── layouts
├── pages
├── styles
└── templates

```

## Source Data

Much of the static content lives directly in the pages themselves (React components in the `./pages` directory). Because Gatsby is capable of [sourcing data](https://developer.mozilla.org/en-US/docs/Tools/Debugger/How_to/Use_a_source_map) from almost any location _at build time_, the content relating to partner organizations and service platforms lives in Markdown, YAML, JSON, and JavaScript files in the `./data` directory for injection into the site during the build process.

```bash
$ tree -L 1 ./src/data
./src/data
├── capabilities
├── contributors.js
├── events
├── index.js
├── menu.js
├── news
├── resources
├── sac
├── status.js
└── timeline
```

### News

FABRIC News articles live in the `./src/data/news/` directory. Each article has its own directory (named `YYYY-MM-article-slug` for convenience), inside of which is an `index.md` Markdown file and any images that are embedded into the article. For example, below is source file for the first article FABRIC ever posted.

```yaml
---
path: /news/fabric-award
date: 2019-09-17
title: "FABRIC project launches with $20 Million NSF grant to test a reimagined Internet"
subtitle: "Collaboration will establish a nationwide network infrastructure"
tags: ["press release", "NSF"]
seo:
    title: "FABRIC project launches with $20 Million NSF grant to test a reimagined Internet"
    description: "The National Science Foundation (NSF) announces a collaborative project to create a platform for testing novel internet architectures that could enable a faster, more secure Internet called FABRIC."
    keywords: ["NSF", "grant award", "press release"]
---

The [National Science Foundation](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=2ahUKEwiiyLPkyI_lAhUuh-AKHayxA2QQFjAAegQIBRAC&url=https%3A%2F%2Fwww.nsf.gov%2F&usg=AOvVaw1pYBfoPO9qDuWI1bNcNaHV) (NSF) [announced this week](https://nsf.gov/awardsearch/showAward?AWD_ID=1935966&HistoricalAwards=false) a collaborative project to create a platform for testing novel internet architectures that could enable a faster, more secure Internet. 

# the rest is omitted for space
```

#### News Article Fields

- **path** - (String) the part of the URL for the article's page after "https://fabric-testbed.net/news`
- **date** - (String) the publication date for the article in `YYYY-MM-DD` format
- **title** - (String) the title of the article
- **subtitle** - (String) subtitle of the article
- **tags** - (Array) free list of tags
- **seo**
    + title: (String) title for search engine results
    + description: (String) brief summary for search engine results
    + keywords: (Array) keywords to match for search engine results

### Events

Event source Markdown files live in `./src/data/events`. An event is sourced from Markdown file that looks like the following:

```markdown
---
title: FABRIC Experimentation Workshop
path: /events/fabric-experimentation-workshop-2021
date: 2021-01-01
display_date: Q1 2021
location:  TBD
url: 
tags:  [] 
fabricHosted: true
seo:
    title: "FABRIC Experimentation Workshop 2021"
    description: 
    keywords: []
---
```

#### Event Fields

- **title**: (String) event title
- **path**: (String) (String) the part of the URL for the article's page after "https://fabric-testbed.net/events`
- **date**: (String) the sortable date for the event in `YYYY-MM-DD` format
- **display_date**: (String) the date to render on the site
- **location**: (String) 
- **url**: (String) event URL if, commonly usually used for registration pages
- **tags**: (String) (Array) free list of tags
- **fabricHosted**: (Boolean) indicated whether this event is managed in-house or external
- **seo**
    + title: (String) title for search engine results
    + description: (String) brief summary for search engine results
    + keywords: (Array) keywords to match for search engine results


### Capabilities

TBA

### Resources

TBA

### SAC

TBA

### Timeline

TBA

## Development

Contributing to the development of this site is easy. The `master` branch will always represent the deployed production version of the site, so please branch feature branches off this branch. The `staging` branch will used to demo new features and will not be a reliable source branch, as it will likely experience forced pushes and rebases while those features converge to their final states. Similarly for the `dev` branch.

For local development you will need [Node JS](https://nodejs.org/) and [Gatsby CLI](https://www.gatsbyjs.com/docs/gatsby-cli/), which can be installed with [NPM](https://www.npmjs.com/package/npm).

Once those tools are installed, cloned this repo, and execute `gatsby develop` from the project root to spin up the development server which can be accessed on port 8000 by default. With the development server's built-in hot module reloading, you'll be able to see changes as they are made to the source code.

The following GatsbyCLI commands are useful for development and pre-release:

- `gatsby develop` (spin up local dev server),
- `gatsby clean` (clears cached files),
- `gatsby build` (builds site), and
- `gatsby serve` (serves build files on port 9000)

The `gatsby serve` command is useful to test production deploys locally.

## Deployment

This site is deployed with [Netlify](https://app.netlify.com/), and the deployment process is automated. Changes to the `dev`, `staging`, and `master` branches in this repo trigger build and deployment to `https://dev.fabric-testbed.net/`, `https://staging.fabric-testbed.net/`, and `https://fabric-testbed.net/`, respectively. The statuses of current and previous builds are visible from within the Netlify dashboard.


## Resources

- [Netlify](https(https://app.netlify.com/))
- Data Sources
    + [Markdown](https://www.markdownguide.org/basic-syntax/)
    + [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)
    + [YAML](https://en.wikipedia.org/wiki/YAML)
- JavaScript
    + [Node JS](https://nodejs.org/)
    + [React](https://reactjs.org/)
    + [Gatsby](https://www.gatsbyjs.org/)

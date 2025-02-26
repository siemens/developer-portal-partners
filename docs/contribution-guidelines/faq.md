---
tags:
  - Guidelines / Contribution
---
# Frequently Asked Questions

<!-- markdownlint-disable MD026 -->
<!-- Disable Trailing punctuation in heading (This is an FAQ) -->

## What are the benefits of using developer.siemens.com?

### Developer Benefits

* One stop shop for development of/ with siemens products:
    * Findability & Searchability
    * Credibility (Quality Control  “Made by Siemens”)
    * Single source of truth
* Xcelerator Ecosystem Benefits:
    * Design support (Xcelerator Branding, UX, Trainings)
    * Reusable automation services
    * Organization wide collaboration through cross unit developer community
    * “I built this” (stage to showcase)

### Organizational Benefits

* Increases customer attractiveness due to common UX across different products
* Lower costs to serve due to self-service functionalities & community support
* Internal cost reduction (reuse & elimination of redundancies)
* Step towards standardization of development tooling and processes

## What information should be included in the documentation?

To create a comprehensive documentation, it is recommended to include the documents that provides an overview of what the product is, how to get started with the product, technical documentation of the product, API specifications etc. The file [Documentation.md](documentation.md) provides a detailed overview of this. However, you can adapt the list of documentation according to the specific requirements of your product.

In addition to developer documentation, the Developer portal needs additional files in order to create en entry in the [Developer portal](https://developer.siemens.com/). Please refer to the [Developer Documentation](./documentation.md#developer-documentation) section of the guidelines for further details.

## How do I publish documentation to consumers?

The ´docs´ folder is the home for the product documentation. Every product has a subfolder with respective product documentation. Please create a folder for your project in ´docs´ folder and add your documentation in the markdown format to it.
Please refer to [Documentation](./documentation.md) for contents and structure of developer documentation.

In addition, we have a docker image that can be used to preview your documentation.

## Are there any checks done on the documentation?

Every documentation provider is responsible for their documentation. We do not validate the correctness of the documentation.

However, we check for broken links in the Developer portal documentation. [Linkinator](https://github.com/JustinBeckwith/linkinator) is used to crawl the Developer Portal public site and report broken links in our internal issue tracker.

## Whom should I contact if I have any questions?

If you have any questions, please create an issue in the Github repository.

## How do I ask support or report issues?

Please create an issue in the Github repository.

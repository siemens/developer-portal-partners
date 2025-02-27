# Contributing to Developer Portal

The Developer Portal uses Markdown and [MkDocs](https://www.mkdocs.org/), which are used in almost all documentation projects across Siemens.

For the First Time Contributors:
If you're looking for a comprehensive guide on how to use markdown, you can find a [helpful overview of its available elements](https://squidfunk.github.io/mkdocs-material/reference/).
Keep in mind that "Insiders" features are not supported.

Please refer to [faq.md](./faq.md) for FAQs

## Developer Documentation

The `docs` in Developer Portal folder is the home for the product documentation. Every product has a subfolder with respective product documentation.

Note:
    If you are adding product documentation for the first time, please create a new folder under the `docs` folder and name it in *lower case* after your product with the prefix `ext`. Please don't use blanks in folder names, use dashes `-` instead.

There is an example how to structure your documentation in the `docs/ext-anybotics` folder.

Following list specifies the files and changes that are needed to contribute to developer portal :

* Developer documentation in Markdown format
* [Navigation file](#navigation-configuration)
* [An API card per API Service](#api-cards)
* [Maintainers file](#maintainers-file)
* Add product line information to `mkdocs-public.yml`. For example, `- Name Of The Product: product-folder/`
* Add API card to `apis.external.yml` in each product folder. See example in `docs/ext-anybotics`
* Add an empty `_public_signed_off` file to the root folder of your documentation folder to confirm that you sign off your files for public deployment on Github

## Structure for Developer Documentation

API Product

* A single API product can have multiple APIs.
* If there is only one API in the product you can skip the API/Service Overview page. See example in `docs/ext-anybotics`.
* Please describe authentication and authorization concepts in getting started guide!

We recommend the following structure to provide documentation:

* **Product Overview Page** (mandatory)
* **API/Service**:
    * Overview (the landing page for the API)
    * Custom Sections: Any additional documentation relevant to the service
    * OpenAPI Specification (if applicable)
    * Async API Specification (if applicable)
    * [Postman](https://postman.com) collection for OpenAPI specs (optional)
    * Changelog (optional)
    * Examples (optional)
    * Getting Started guide
    * Links to Sandbox Environment (optional)
    * Links to own Developer portals (optional)
* **Contact information** (mandatory)

You can find an example in the repository here `./docs/ext-anybotics/` or take a look at the rendered version when running the portal.

## Images

* Please provide images which look good on all devices.
* Images should be optimized and the right format should be chosen.
* Images shouldn't exceed the file size of `500 kB`.
* Preferred formats for static images are `.svg`, `.jpg`, `.png`.
* The preferred format for animated images is `.webp` instead of `.gif`.

## What to do if you already have a developer portal or an existing repository with the documentation

If you already have a developer portal for your product, and you don't want to migrate to this repository,
you can create an overview page and a contact page, and create relevant links to your developer portal.

## Navigation Configuration

Navigation configuration file `nav.md` is required under each `docs/<name of your product line>` folder.

Further details on navigation configuration can be found at [mkdocs-literate-nav plugin](https://github.com/oprypin/mkdocs-literate-nav).

## API cards

The following information is required per product in order to create the API cards in the [API catalogue](https://developer.siemens.com/apis.html)

* Product Name
* API name
* A short description in plain text
* Tags (maximum of 3 tags)
* Link to technical documentation

**Note:** *Tags* can be selected from a predefined list of allowed tags. If a new tag needs to be added, please contact maintainers of the project.

The `View technical documentation` section on the API card will redirect you to detailed documentation.

The above API card information must be added to `apis.external.yml` in each product folder. See [Anybotics example](../anybotics/apis.external.yml)

## Maintainers File

For every first-level directory within `docs/`, a maintainers file must be included.

### File Name

This file should be called `maintainers.yml` and located in the root directory within your project documentation, alongside `apis.external.yml` file.

### File Structure

* `product`: The name of the API or product.
* `site`: The site (`internal` or `external`, for the Internal or External Developer Portal).
* `operating_company`: The company operating the product.
* `saas_offering`: Indicates if the product is offered as SaaS (`true` or `false`).
* `owner`:
    * `department`: The department owning the product.
    * `person`: The email address or full name of the primary owner.
* `maintainer`: A list of the maintainers' email addresses or full names.
* `contribution`:
    * `workflow`: The contribution workflow. Please specify `push` as the value.
* `comment`: Additional comments about the product or its maintenance.

### Example

```yaml
- product: Carbon Footprint Indicator
  site: external
  operating_company: DI
  saas_offering: true
  owner:
      department: DI SW PLM DM
      person: example@siemens.com
  maintainer:
      - example@siemens.com
  contribution:
      workflow: monorepo
  comment:
```

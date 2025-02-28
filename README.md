# Siemens Xcelerator Developer Portal - Documentation onboarding for Partners

This project can be used to provide developer documentation to [Siemens Xcelerator Developer Portal](https://developer.siemens.com/).

The project contains a docker image that provides a "lightweight" version of Siemens Xcelerator Developer Portal. You can use this docker image to preview you documentation and get a sense of how the documentation would look like once it is in the Developer Portal

## Documentation

The developer portal is the central hub for developers to access Siemens Xcelerator APIs, SDKs, and other developer resources.

### Steps for contribution

1. Familiarize yourself with our [contribution guidelines](./docs/contribution-guidelines/documentation.md)
2. Fork the GitHub repository and clone the project to your local machine
3. Prepare documentation according to [How to structure Developer Documentation](./docs/contribution-guidelines/documentation.md#structure-for-developer-documentation).
    Note: Only documents in markdown format is supported.
4. Create a subfolder in '/docs' folder and add your documentation to the created sub folder
   Note: The subfolder name should be name of your product in small letters with the prefix `ext`. Please use `-` instead of spaces. Example: `ext-productname`
5. Create API card according to [How to create an API card](./docs/contribution-guidelines/documentation.md#api-cards)
6. Create `Maintainers file` and empty `_public_signed_off`. An example can be found in folder `./docs/anybotics`. Add product and API card information to `mkdocs-public.yml` and `apis.external.yml` respectively .
7. Adapt and configure the documentation with [Navigation Configuration](./docs/contribution-guidelines/documentation.md#navigation-configuration)
8. To preview your documentation, run the Docker image by executing `docker-compose up -d`
9. Once the documentation is ready to be published, create a  pull request
10. Maintainers of the developer portal will review the request and merge

Refer to [Documentation](./docs/contribution-guidelines/documentation.md) for detailed information on required docs and folder structure.

### Documentation structure

The docs folder is the home for the product documentation. Every product (or collection of internal resources) has a subfolder with respective product documentation.
Please refer to [folder structure](./docs/contribution-guidelines/documentation.md#developer-documentation) for further details.

[mkdocs-literate-nav](https://oprypin.github.io/mkdocs-literate-nav/) is used to specify navigation in markdown file. For example [nav.md](./docs/anybotics/nav.md).

We recommend the following structure to provide documentation:

- overview.md: Product Overview Page (mandatory)
- API/Service:
    - overview.md: The landing page for the API
    - api-spec.yaml: OpenAPI Specification (if applicable)
    - changelog.md: Changelog (optional)
    - Async API Specification (if applicable)
    - Postman collection for OpenAPI specs (optional)
    - Examples (optional)
- contact.md: Contact information. In case of public documentations, Please use functional email address used for business communication regarding your service.
- getting-started.md: Getting Started guide for the service or an API
- faq.md: Frequently asked Questions about the service or API
- Links to Sandbox Environment (optional)
- Links to own Developer portals (optional)
- Custom Sections: Any additional documentation relevant to the service

## Building locally using docker

- Run `docker-compose up -d` to see a preview of the documentation

## Development

- To immediately apply any markdown changes, hot reload ensures instant reloading.
- For any file changes, `docker-compose restart` needs to be run for rebuilding docker with latest changes.

Refer to [Documentation](./docs/contribution-guidelines/documentation.md) for any further information

## 📝 License

Copyright © 2025 [Siemens AG](https://www.siemens.com/).

---
tags:
  - Guidelines / Contribution
---

# Getting Started

Developer Portal project uses [Python](https://www.python.org/) and [Node.js](https://nodejs.org/) toolkit.

## Docker Image

The project contains a docker image that provides a "lightweight" version of Developer Portal. This image can be used to preview documentation in Developer portal.

## Steps for contribution

1. Familiarize yourself with our [contribution guidelines](./documentation.md#contributing-to-developer-portal)
2. Fork the GitHub repository and clone the project to your local machine
3. Prepare documentation according to [How to structure Developer Documentation](./documentation.md#structure-for-developer-documentation)
4. Create a subfolder in '/docs' folder and add your documentation to the created sub folder
   Note: The subfolder name should be name of your product in small letters with the prefix `ext`. Please use `-` instead of spaces. Example: `ext-productname`
5. Create API card according to [How to create an API card](./documentation.md#api-cards).
6. Create `Maintainers file` and empty `_public_signed_off`. An example can be found in folder `./docs/anybotics`. Add product and API card information to `mkdocs-public.yml` and `apis.external.yml` respectively .
7. Adapt and configure the documentation with [Navigation Configuration](./documentation.md#navigation-configuration)
8. To preview your documentation, run the Docker image by executing `docker-compose up -d`
9. Once the documentation is ready to be published, create a  pull request
10. Maintainers of the developer portal will review the request and merge

For more details, please refer to our [documentation guidelines](./documentation.md).

## Reporting Issues

Check Github issues to see if the issue you are facing is reported already. If not, Please open a ticket to report issues

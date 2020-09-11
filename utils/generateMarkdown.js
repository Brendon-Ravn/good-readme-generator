function generateMarkdown(data) {
  console.log(data);
  return `
# ${data.project}
  ![](https://img.shields.io/badge/license-${data.license}-blue.svg)
## Description
  ${data.description}

## Table of Contents

* [Project URL](#project-url)
* [Installation](#installation)
* [License](#license)
* [Contribute](#contribute)
* [Usage](#usage)
* [Tests](#test)
* [Questions](#questions)

## Project URL
  ${data.url}
  <br />
## Installation 
  ${data.install}
  <br />
## License 
  ${data.license}
  <br />
## Contribute
  ${data.contribute}
  <br />
## Usage
  ${data.repo}
  <br />
## Test
  ${data.test}
  <br />
## Questions
  My email: ${data.email}
  <br />
  My GitHub: ${data.username}
`;
}

module.exports = generateMarkdown;
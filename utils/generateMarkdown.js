function generateMarkdown(data) {
  console.log(data);
  return `
# ${data.project}
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
## Description
  ${data.description}

## Table of Contents

* Project URL
* Installation
* License
* Contribute
* Repo
* Tests
* Questions?

## Project URl
  ${data.url}
## Installation 
  ${data.install}
## License 
  ${data.license}
## Contribute
  ${data.contribute}
## Repo Info
  ${data.repo}
## Test
  ${data.test}
## Questions?
  My email: ${data.email}
  My GitHub: ${data.username}
`;
}

module.exports = generateMarkdown;
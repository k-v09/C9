function generateMarkdown(data) {
    return `# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions, please reach out to me via:
- GitHub: [${data.questions}](https://github.com/${data.questions})
- Email: ${data.email}
`;
}

module.exports = generateMarkdown;

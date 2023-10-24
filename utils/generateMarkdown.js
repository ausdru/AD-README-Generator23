// Array of license badges + URLs.
const licenseBadgeUrls = {
  Apache:'[![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)(https://opensource.org/licenses/Apache-2.0)',

  GNU:'[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)(https://www.gnu.org/licenses/gpl-3.0)',

  MIT:'[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)(https://opensource.org/licenses/MIT)',

  Mozilla:'[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)(https://opensource.org/licenses/MPL-2.0)',

  Unlicense:'[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)(http://unlicense.org/)',
}  

const renderLicenseBadge = (license) =>
(license === 'None' ? '' : `${licenseBadgeUrls[license]}`)

// Function to take generateMarkdown data into a README file.
function generateMarkdown(data) {
  
  const licenseSection = renderLicenseBadge(data.license)

  return `
  ## ${data.title}
  ${licenseSection}

  ## License:
  ${data.license}

  ## Description:
  ${data.description}

  ## Table of Contents:
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Testing](#testing)
  - [Questions](#questions)
  - [Contact](#contact)

  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## Contributing:
  ${data.contributing}

  ## Testing:
  ${data.testing}

  ## Questions:
  ${data.questions}

  ## Contact:
  If you have any questions, feel free to contact me at ${data.email}. \n
  GitHub Profile: ${data.github}

`;
}

module.exports = {generateMarkdown}; 

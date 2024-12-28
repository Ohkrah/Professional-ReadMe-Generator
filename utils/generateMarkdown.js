// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license){
    return '';
  }else{
    return 
    `
    ### License Badge

    [License Badge](${license.licenseBadge})
    
    `
    ;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license){
    return '';
  }else{
    return 
    `
    ### License Link

    [License Link](${license.licenseLink})
    
    `
    ;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license){
    return '';
  }else{
    renderLicenseBadge(license);
    renderLicenseLink(license);
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
   ${data.description}
  
  ## How to install
  ${data.installation}

  ## How to
  ${data.usage}

  ## Features
  ${data.features}

  ## How can tests be run on this app?
  ${data.tests}

  ## How can others contribute?
  ${data.contribution}

  ## Motive for development
  ${data.motive}

  ## Reason for development
  ${data.reasoning}

  ## What problems does this application solve
  ${data.problem}

  ## What was learned through creating this application
  ${data.learnings}

  ## Things unique to this project
  ${data}

  ## License 
  ${renderLicenseSection(data)}

`;
}

module.exports = generateMarkdown;

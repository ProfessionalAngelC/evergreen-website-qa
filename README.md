# Evergreen Website QA

Quality assurance testing performed on the public WA Evergreen Insulation LLC website.

I took on this small QA project to evaluate the website from a customer perspective, document reproducible issues, and build clear testing evidence that could be used internally or shared with the website platform provider when appropriate.

The website uses Housecall Pro services and was tested primarily as a black box application without access to the website source code or production database.

## Project Scope

Testing included:

* Functional testing
* Exploratory testing
* Negative testing
* Mobile and responsive testing
* Cross browser testing
* Regression testing
* Defect reporting
* Chrome DevTools investigation
* Browser automation
* API testing

## Tools

### Test Management

* Jira Cloud
* Xray Test Management

### Technical Testing

* Chrome DevTools
* Playwright
* Postman

### Development and Version Control

* TypeScript
* Node.js
* npm
* Visual Studio Code
* Git
* GitHub

## Manual Testing

I created and executed test cases in Jira and Xray for the main customer facing areas of the website.

Coverage included:

* Services navigation
* About Us navigation
* Book Online
* Customer Login
* Mobile navigation
* Mobile layout
* Services mobile menu behavior

Regression executions were documented using PASS, FAIL, and blocked results.

## Defects Identified

### EWQA 16

The mobile homepage hero heading displayed poor word wrapping and partially hidden text at a 390 x 844 viewport.

### EWQA 17

The review widget attribution was partially obscured on mobile.

### EWQA 19

The Services submenu did not collapse correctly during the tested mobile navigation workflow after navigating to the Services page.

Each defect was documented in Jira with reproduction steps and supporting screenshots.

The purpose of the defect documentation was to create enough evidence for the issue to be reproduced and reviewed internally or escalated to the website platform provider if needed.

## Chrome DevTools

I used Chrome DevTools to investigate issues beyond the visible user interface.

Testing included:

* DOM inspection
* Computed style review
* Console investigation
* Network request analysis
* HTTP response review
* Responsive viewport testing
* Comparison of website information with data returned through network requests

DevTools helped separate visible UI behavior from network and application behavior without assuming a root cause that had not been confirmed.

## Playwright Automation

I created Playwright tests using TypeScript for selected regression scenarios.

### Desktop Automation

Automated scenarios included:

* Services navigation
* About Us navigation
* Housecall Pro Book Online integration

The tests were executed across:

* Chromium
* Firefox
* WebKit

Final result:

**9 of 9 cross browser executions passed**

### Mobile Automation

I created a separate mobile test using a 390 x 844 viewport.

The test verifies:

1. The mobile menu button is visible
2. The navigation menu opens
3. The close state appears
4. The navigation menu closes successfully

The test was repeated three times in Chromium to check basic stability.

**3 of 3 executions passed**

## API Testing

I used Postman to test a public website endpoint independently from the frontend.

### Positive API Test

I validated:

* HTTP status 200
* JSON response format
* Correct business name
* Correct public phone number

**4 of 4 assertions passed**

### Negative API Test

I also tested an intentionally invalid endpoint.

I validated:

* HTTP status 404
* Resource not found response

**2 of 2 assertions passed**

Additional API testing details are documented in:

`docs/api-testing.md`

## API Workflow

Because this project involved black box testing of the public website, I identified the API endpoint by reviewing network traffic in Chrome DevTools.

In most company environments, I know that QA would typically be given API documentation, Swagger or OpenAPI documentation, developer specifications, or an existing Postman collection. In that case, I would work directly from the documented endpoints and use Chrome DevTools mainly to investigate how the frontend communicates with the API or to troubleshoot issues between the UI and backend services.

## Evidence

Testing evidence is organized in the `evidence` folder.

It includes:

* Jira and Xray test results
* Defect screenshots
* Chrome DevTools evidence
* Playwright results
* Postman results

Sensitive looking configuration values returned by the website were excluded from portfolio documentation and screenshots.

## Project Structure

```text
evergreen-website-qa/
├── README.md
├── docs/
│   ├── requirements.md
│   └── api-testing.md
├── evidence/
│   ├── jira/
│   ├── xray/
│   ├── defects/
│   ├── devtools/
│   ├── playwright/
│   └── postman/
└── automation/
    └── tests/
        ├── evergreen-navigation.spec.ts
        └── evergreen-mobile.spec.ts
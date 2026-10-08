# Website Requirements

## Application

**WA Evergreen Insulation LLC Customer Website**

## Purpose

This document defines the expected customer facing behavior used as the basis for QA testing of the WA Evergreen Insulation website.

These requirements were derived from the expected behavior of the production website as part of black box testing. No internal Housecall Pro source code or formal software requirements specification was available for this project.

Test coverage and execution results are documented separately through Jira and Xray.

## In Scope

* Homepage functionality
* Primary website navigation
* Service pages
* Book Online entry points
* Customer Login entry points
* Customer facing buttons and links
* Mobile and responsive behavior
* Cross browser behavior
* Website content display
* Website to Housecall Pro booking integration where safely testable

## Out of Scope

* Housecall Pro source code
* Housecall Pro administrative functionality unrelated to the public website
* Destructive production testing
* Security penetration testing
* Production load testing
* High volume automated submissions
* Unauthorized access attempts
* Payment processing
* Real customer data
* Completed production booking submissions

## Functional Requirements

### REQ 001: Homepage Availability

The website homepage should load successfully and display its primary customer facing content.

### REQ 002: Primary Navigation

Primary navigation links should direct users to the intended website pages without producing broken pages or unexpected errors.

### REQ 003: Services Navigation

Users should be able to access the Services section and navigate to available service pages.

### REQ 004: About Us Navigation

Users should be able to access the About Us section from the primary website navigation.

### REQ 005: Book Online

Book Online controls should provide access to the intended Housecall Pro booking experience.

### REQ 006: Customer Login

Customer Login controls should direct users to the intended customer login experience.

### REQ 007: Calls to Action

Customer facing calls to action should direct users to the page, workflow, or action indicated by their label.

### REQ 008: External Links

External links should direct users to the intended external destination without unexpectedly breaking the website experience.

### REQ 009: Content Display

Customer facing text, images, buttons, widgets, and other visible components should display without unintended overlap, truncation, obstruction, or rendering errors.

### REQ 010: Contact Information

Public business contact information displayed on the website should match the information provided by the website content data where that comparison is available.

## Responsive Requirements

### REQ 011: Desktop Usability

Core website functionality should remain usable at common desktop screen sizes.

### REQ 012: Mobile Usability

Core website functionality should remain usable at common mobile screen sizes.

### REQ 013: Responsive Navigation

Navigation controls should remain accessible and usable when the viewport changes between desktop and mobile sizes.

### REQ 014: Mobile Menu Behavior

The mobile navigation menu should open and close successfully and provide access to the expected navigation options.

### REQ 015: Mobile Content Display

Customer facing content should remain readable and usable on mobile without unintended overlap, hidden text, or layout obstruction.

## Booking Integration Requirements

### REQ 016: Booking Entry

A user selecting Book Online should be able to enter the intended Housecall Pro booking workflow.

### REQ 017: Booking Interface Availability

The booking interface should load successfully after the user selects Book Online.

### REQ 018: Booking Integration

The website should load the expected Housecall Pro booking integration without producing a broken page or unexpected website error.

## Additional Booking Validation

Form validation, completed booking submissions, and resulting Housecall Pro records were not tested as part of this project because testing was performed against a production business website.

Those areas would be appropriate for additional testing in an authorized test or staging environment where submissions could be completed without affecting real business operations or customer data.

## Cross Browser Requirements

### REQ 019: Browser Compatibility

Core website navigation and selected customer workflows should function consistently across supported browser engines.

Cross browser automation was performed using:

* Chromium
* Firefox
* WebKit

## Testing Constraints

Testing was performed against a live production business website.

Testing therefore avoided:

* Repeated automated submissions
* Intentionally harmful input
* Production load testing
* Unauthorized access attempts
* Real customer information
* Completed test bookings that could create production records
* Actions that could disrupt normal business operations

Testing focused on safe, read only or non destructive interactions whenever possible.

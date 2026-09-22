# Website Requirements

## Application

**WA Evergreen Insulation LLC Customer Website**

## Purpose

This document defines the expected customer-facing behavior that will be used as the basis for QA testing.

These requirements were inferred from the functionality available on the production website. No internal Housecall Pro source code or formal software requirements specification was used.

## In Scope

* Homepage functionality
* Primary website navigation
* Service pages
* Book Online entry points
* Customer Login entry points
* Phone and email contact links
* Customer-facing buttons and links
* Form validation where safely testable
* Responsive behavior
* Cross-browser behavior
* Website-to-booking workflow where safely testable

## Out of Scope

* Housecall Pro source code
* Housecall Pro administrative functionality unrelated to the website
* Destructive production testing
* Security penetration testing
* High-volume automated form submissions
* Real customer data
* Payment processing

---

## Functional Requirements

### REQ-001 — Homepage Availability

The website homepage should load successfully and display its primary customer-facing content.

### REQ-002 — Primary Navigation

Primary navigation links should direct users to the intended website pages without producing broken pages or unexpected errors.

### REQ-003 — Services Navigation

Users should be able to access the Services section and navigate to available individual service pages.

### REQ-004 — Book Online

Book Online buttons should direct users to the intended online booking workflow.

### REQ-005 — Customer Login

Customer Login links should direct users to the intended customer login experience.

### REQ-006 — Phone Contact

Displayed company phone links should allow supported devices or browsers to initiate the expected phone-contact action.

### REQ-007 — Email Contact

Displayed company email links should direct users toward the expected email-contact action where the link is enabled.

### REQ-008 — Calls to Action

Customer-facing calls to action should direct users to the page, workflow, or action indicated by their label.

### REQ-009 — External Links

External links should direct users to the intended external destination without unexpectedly breaking the website experience.

### REQ-010 — Content Display

Customer-facing text, images, buttons, and other visible components should display without unintended overlap, truncation, or rendering errors.

---

## Responsive Requirements

### REQ-011 — Desktop Usability

Core website functionality should remain usable at common desktop screen sizes.

### REQ-012 — Mobile Usability

Core website functionality should remain usable at common mobile screen sizes.

### REQ-013 — Responsive Navigation

Navigation elements should remain accessible and usable when the viewport changes between desktop and mobile sizes.

---

## Booking Workflow Requirements

### REQ-014 — Booking Entry

A user selecting Book Online should be able to enter the website's intended booking workflow.

### REQ-015 — Required Fields

If the booking workflow contains required fields, users should receive appropriate validation when attempting to continue or submit without completing those fields.

### REQ-016 — Valid Input

The booking workflow should accept properly formatted customer information where the field permits that information.

### REQ-017 — Invalid Input

Fields with defined formatting requirements should appropriately handle invalid input.

### REQ-018 — Successful Submission

A valid test submission should produce the expected confirmation or completion behavior.

### REQ-019 — Housecall Pro Record

Where authorized and safely testable, a successful website booking should produce the expected corresponding record in Housecall Pro.

### REQ-020 — Data Accuracy

Where authorized and safely testable, customer information received in Housecall Pro should match the information submitted through the website.

---

## Testing Constraints

Testing is being performed against a production business website.

Testing will therefore avoid:

* Repeated automated submissions
* Intentionally harmful input
* Production load testing
* Unauthorized access attempts
* Real customer information
* Actions that could disrupt normal business operations

Test data will be clearly identifiable as QA/test data when production submissions are necessary.

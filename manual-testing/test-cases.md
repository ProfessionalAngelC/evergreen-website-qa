# Manual Test Cases

## Test Environment

**Application:** WA Evergreen Insulation Customer Website
**Testing Type:** Black-box manual testing
**Environment:** Production
**Status:** In Progress

---

## TC-001 — Verify Homepage Loads Successfully

**Requirement:** REQ-001
**Priority:** High

### Preconditions

* User has an active internet connection.
* A supported web browser is available.

### Steps

1. Open the WA Evergreen Insulation website.
2. Wait for the homepage to finish loading.
3. Review the visible page content.

### Expected Result

The homepage loads successfully without an obvious error page, and the primary customer-facing content is visible.

### Actual Result

Not yet tested.

### Status

NOT RUN

---

## TC-002 — Verify View All Services Navigation

**Requirement:** REQ-003
**Priority:** High

### Preconditions

* Homepage is loaded.

### Steps

1. Locate the **View All Services** link.
2. Click the link.
3. Observe the destination page.

### Expected Result

The user is taken to the website's Services section or services page.

### Actual Result

Not yet tested.

### Status

NOT RUN

---

## TC-003 — Verify Learn More Navigation

**Requirement:** REQ-002, REQ-008
**Priority:** Medium

### Steps

1. Open the homepage.
2. Locate the **Learn More** link in the About Us section.
3. Click the link.
4. Observe the destination.

### Expected Result

The user is taken to the intended About Us page.

### Actual Result

Not yet tested.

### Status

NOT RUN

---

## TC-004 — Verify Book Online Navigation

**Requirement:** REQ-004, REQ-014
**Priority:** High

### Steps

1. Open the website.
2. Locate a **Book Online** button.
3. Click the button.
4. Observe the resulting page or workflow.

### Expected Result

The user enters the intended online booking workflow without encountering an unexpected error.

### Actual Result

Not yet tested.

### Status

NOT RUN

---

## TC-005 — Verify Customer Login Navigation

**Requirement:** REQ-005
**Priority:** High

### Steps

1. Open the website.
2. Locate **Customer Login**.
3. Click the link.
4. Observe the resulting destination.

### Expected Result

The user is taken to the intended customer login experience.

### Actual Result

Not yet tested.

### Status

NOT RUN

---

## TC-006 — Verify Phone Number Link

**Requirement:** REQ-006
**Priority:** High

### Steps

1. Locate the displayed company phone number.
2. Click the phone number.
3. Observe the browser or device response.

### Expected Result

The phone link attempts to initiate the expected telephone action on a supported device or browser.

### Actual Result

Not yet tested.

### Status

NOT RUN

---

## TC-007 — Verify Email Contact Link

**Requirement:** REQ-007
**Priority:** Medium

### Steps

1. Locate the displayed company email address.
2. Click the email address if it is presented as a link.
3. Observe the result.

### Expected Result

If enabled as a link, the email address initiates the expected email-contact action.

### Actual Result

Not yet tested.

### Status

NOT RUN

---

## TC-008 — Verify Review Link

**Requirement:** REQ-009
**Priority:** Low

### Steps

1. Open the homepage.
2. Locate **Read More Reviews**.
3. Click the link.
4. Observe the destination.

### Expected Result

The user is taken to the intended external review destination.

### Actual Result

Not yet tested.

### Status

NOT RUN

---

## TC-009 — Verify Homepage at Mobile Viewport

**Requirement:** REQ-012
**Priority:** High

### Steps

1. Open the homepage in a browser.
2. Open browser developer tools.
3. Enable responsive/mobile device mode.
4. Select a common mobile viewport.
5. Review the homepage.
6. Scroll through the page.
7. Check navigation, text, images, and major buttons.

### Expected Result

The homepage remains readable and usable without unintended horizontal scrolling, overlapping elements, inaccessible navigation, or major visual defects.

### Actual Result

Not yet tested.

### Status

NOT RUN

---

## TC-010 — Verify Booking Required-Field Validation

**Requirement:** REQ-015
**Priority:** High

### Preconditions

* The Book Online workflow is available.
* Testing can be performed without creating an unintended real customer request.

### Steps

1. Open the Book Online workflow.
2. Proceed to a point where required information is requested.
3. Leave required fields blank.
4. Attempt to continue or submit without completing the required fields.

### Expected Result

The workflow prevents progression or submission and clearly identifies the required information.

### Actual Result

Not yet tested.

### Status

NOT RUN

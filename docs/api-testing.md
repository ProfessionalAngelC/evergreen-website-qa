# API Testing

## Objective

Validate a public website content endpoint used by the WA Evergreen Insulation website and confirm expected behavior for both valid and invalid requests.

## Tool

Postman

## Endpoint Tested

GET /_dm/s/rt/actions/sites/be8daca5/contentLibrary

## Positive Test

A valid GET request was sent to the website content endpoint.

### Validations

- HTTP status code is 200
- Response content type is JSON
- Business name matches WA Evergreen Insulation LLC
- Contact phone number matches the expected public value

### Result

4/4 assertions passed.

## Negative Test

A GET request was sent to an intentionally invalid endpoint:

GET /_dm/s/rt/actions/sites/be8daca5/contentLibrary-invalid

### Validations

- HTTP status code is 404
- Error response indicates that the requested resource could not be found

### Result

2/2 assertions passed.

## Notes

Testing was limited to safe, read-only GET requests against publicly accessible website resources.

No production data was modified.

Sensitive-looking configuration values returned by the endpoint were excluded from portfolio documentation and screenshots.
# User Registration API Documentation

## Register User Endpoint

### HTTP METHOD
'post'

**Endpoint:** `POST /user/register`

### Description
Creates a new user account with the provided information. Upon successful registration, returns an authentication token and user details.

### Request Body
```json
{
  "fullname": {
    "firstname": "string",  // minimum 3 characters
    "lastname": "string"    // minimum 3 characters
  },
  "email": "string",        // valid email format, minimum 5 characters
  "password": "string"      // minimum 6 characters
}
### Example Response

```json
{
  "fullname": {
    "firstname": "string",  // minimum 3 characters
    "lastname": "string"    // minimum 3 characters
  },
  "email": "string",        // valid email format, minimum 5 characters
  "password": "string"      // minimum 6 characters,
}
'token' string:JWT Token
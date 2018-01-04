# Helping Hand (In Progress)

This application provides a smooth user experience for signing up for volunteer shifts in the San Francisco Bay Area. Getting people interested in volunteering is hard enough already, lets not make signing up another hurdle.

## Minimum Viable Product

- [ ] Organizations
    - [ ] Sign up your organization
- [ ] Create an event
    - [ ] description
    - [ ] time
    - [ ] location
    - [ ] number of volunteers needed
    - [ ] volunteer requirements
    - [ ] Cancel an Event
- [ ] Volunteers
    - [ ] Sign up for events
        - [ ] View upcoming events
        - [ ] Cancel
    - [ ] Track volunteer hours
- [ ] Bonus
    - [ ] Volunteer with group
    - [ ] Organizations have Volunteer Types
    - [ ] Organization Manager can add other Admins

## Schema

- Users
  - username
  - password_digest
  - session_token

- Organization
  - title
  - manager_id

- Events
  - org_id
  - date
  - location
  - time
  - volunteers_needed (remove for volunteer type)

- Volunteers
  - event_id
  - user_id
  - volunteer_type_id (needed for volunteer type bonus)

Bonus:

- Administrators
  - user_id
  - org_id

- Volunteer Type
  - Title
  - Description
  - Default: general

- Event Volunteers
  - event_id
  - volunteer_type_id
  - number

Icons found here: https://fontawesome.com/icons?d=gallery

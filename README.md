# Helping Hand

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

## Schema

- Users
  - username
  - password_digest
  - session_token

- Organization
  - manager_id

- Events
  - org_id
  - date
  - location
  - time
  - volunteers_needed

- Signups
  - event_id
  - user_id

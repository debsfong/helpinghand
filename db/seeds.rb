# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Organization.delete_all
Event.delete_all
Volunteer.delete_all

user1 = User.create!(username: "Eric", password: "password")
user2 = User.create!(username: "Debra", password: "password")
user3 = User.create!(username: "guest", password: "guestpassword")

org1 = Organization.create!(title: "Toy Drive", manager_id: user1.id)
org2 = Organization.create!(title: "Library", manager_id: user2.id)

event1 = Event.create!(title: "Toy Collection", org_id: org1.id, date: Date.new(2018, 2, 3), lat: 37.774929, long: -122.419416, start_time: Time.new(2018, 2, 3, 10, 0), end_time: Time.new(2018, 2, 3, 18, 0), volunteers_needed: 20)

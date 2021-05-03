# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Seeding data..."

puts "Creating locations"
25.times do
  Location.create(
    location: Faker::Fantasy::Tolkien.location
  )
end

locations = Location.all.to_a

puts "Creating characters"
500.times do
  Character.create(
    name: Faker::Fantasy::Tolkien.character,
    poem: Faker::Fantasy::Tolkien.poem,
    race: Faker::Fantasy::Tolkien.race,
    location: locations.sample
  )
end

puts "Done!"

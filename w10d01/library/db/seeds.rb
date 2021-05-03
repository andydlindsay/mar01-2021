# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Seeding data..."

# create authors
puts "Creating authors"
10.times do
  Author.create(name: Faker::Book.author)
end

# grab the newly created authors
authors = Author.all.to_a

# create books
puts "Creating books"
100.times do
  Book.create(
    author: authors.sample,
    title: Faker::Book.title,
    publisher: Faker::Book.publisher,
    genre: Faker::Book.genre
  )
end

puts "Done!"

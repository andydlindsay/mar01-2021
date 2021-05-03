# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Seeding data..."

# create authors
puts "creating authors"
author_one = Author.create(name: Faker::Book.author)
author_two = Author.create(name: Faker::Book.author)
author_three = Author.create(name: Faker::Book.author)

# grab the newly created authors
authors = Author.all.uniq.to_a

# create books
puts "creating books"
50.times do
  Book.create(
    author: authors.sample,
    title: Faker::Book.title,
    publisher: Faker::Book.publisher,
    genre: Faker::Book.genre
  )
end

puts "Done!"

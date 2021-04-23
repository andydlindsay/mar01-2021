# collections of key/value pairs
# objects, dictionaries, hashes, associative arrays

user = {
  "first_name" => "Egg",
  "last_name" => "Eggerson"
}

puts user["first_name"]

user = {
  :first_name => "Egg",
  :last_name => "Eggerson"
}

p user[:last_name]
p user["first_name".to_sym]

user = {
  first_name: "Egg",
  last_name: "Eggerson"
}

p user[:last_name]
p user

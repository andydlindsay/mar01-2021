# functions === methods
def say_hello first_name, last_name = 'Eggerson'
  puts "hello #{first_name} #{last_name}"
end

say_hello 'Bob'

# def change_it num
#   num = 10
# end

# num = 5
# puts num
# change_it num
# puts num

# implicit return
def add_two num
  p num + 2
end

sum = add_two 5
puts sum

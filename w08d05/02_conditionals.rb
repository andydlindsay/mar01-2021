num = 5

if num > 3 && num < 10
  puts "it is larger than 3"
elsif num > 0
  puts "it is greater than zero"
else 
  puts "it must not be the right number"
end

name = 'Alice'
name = 'Bob'

unless name == 'Alice'
  puts "not Alice"
end

if name == 'Alice'
  puts "hello there Alice"
end

puts "hello there Alice" if name == 'Alice'

sunny = false

puts "take an umbrella" unless sunny

# ruby version of switch
last_name = 'Eggerson'
case last_name
  when "Stamos"
    puts "hello there John"
  when "Eggerson"
    puts "hello there Egg"
  else
    puts "Choose a better name" 
end

num = 7

puts num == 7 ? "seven ate nine" : "you are safe"

breads = ['sourdough', 'elvish', 'naan', 'rye', 'cheese', 'baguette']

# breads.each do |bread|
#   puts "my fave bread is #{bread}"
# end
# block

fave_breads = lambda { |bread|
  puts "my fave bread is #{bread}"
}

breads.each &fave_breads

def takes_in_a_lambda &my_lamb
  my_lamb.call
end

say_something = -> { puts "I'm giving up on you" }

takes_in_a_lambda &say_something

class Car
  def initialize color, year, make
    @color = color
    @year = year
    @make = make
  end

  attr_reader :year
  attr_writer :year

  attr_accessor :make

  def color
    @color
  end

  def color= new_color
    @color = new_color
  end
end

my_car = Car.new 'red', '1986', 'Toyota'

p my_car.color
my_car.color = 'pink'
p my_car

puts

p my_car.year
my_car.year = 2009
p my_car

puts

p my_car.make
my_car.make = 'Honda'
p my_car

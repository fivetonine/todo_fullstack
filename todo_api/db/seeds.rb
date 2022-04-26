# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
['Walk Dog', 'Write Code', 'Brush Teeth', 'Call Mom', 'Get Groceries'].each do |name|
  Todo.where(title: name, completed: false).first_or_create
end

puts "5 uncompleted todos created"

['Watch Netflix', 'Make Lunch', 'Check Twitter', 'Shower', 'Feed Goldfish'].each do |name|
  Todo.where(title: name, completed: true).first_or_create
end

puts "5 completed todos created"
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Brand.destroy_all
Granola.destroy_all

brand1 = Brand.create(name: "Rolling Hill Grains")
brand2 = Brand.create(name: "Campfire Farms")

Granola.create(name: "Vanilla Cranberry", description: "For those with a sweet tooth", brand: brand1)
Granola.create(name: "Oat Hemp", description: "No, it can't get you high", brand: brand1)
Granola.create(name: "Almond Raisin", description: "For moms who love to hike", brand: brand2)
Granola.create(name: "Sugarfree Rye", description: "Basically muesli", brand: brand2)

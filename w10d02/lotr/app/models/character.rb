class Character < ApplicationRecord
  belongs_to :location

  validates :name, presence: true
  validates :race, presence: true
end

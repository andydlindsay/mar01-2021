class Character < ApplicationRecord
  belongs_to :location

  validates :name, presence: true
  validates :poem, presence: true
end

require 'rails_helper'

RSpec.describe Character, type: :model do
  # pending "add some examples to (or delete) #{__FILE__}"

  before :each do
    @character = Character.new(
      name: 'Bulbo Baggins',
      poem: 'Pies',
      race: 'Hobbit',
      location: Location.new(
        location: 'The Shire'
      )
    )
  end

  it 'is valid with all fields present' do
    expect(@character).to be_valid
  end

  it 'is invalid if name is not present' do
    @character.name = nil

    @character.save

    # p character.errors.full_messages

    expect(@character).to be_invalid
    expect(@character.errors.full_messages[0]).to eq("Name can't be blank")
  end

  it 'is invalid if race is not present' do
    @character.race = nil

    @character.save

    # p character.errors.full_messages

    expect(@character).to be_invalid
    expect(@character.errors.full_messages[0]).to eq("Race can't be blank")
  end

end

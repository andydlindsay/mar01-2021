require 'rails_helper'

RSpec.describe Character, type: :model do
  # pending "add some examples to (or delete) #{__FILE__}"

  describe 'Validations' do

    before :each do
      @character = Character.new(
        name: 'Bilbo',
        poem: 'Hello world',
        race: 'Hobbit',
        location: Location.new(
          location: 'The Shire'
        )
      )
    end

    it 'is valid with all attributes given' do
      expect(@character).to be_valid
    end

    it 'is not valid without a name' do
      @character.name = nil

      @character.save

      # p character.errors.full_messages

      expect(@character).to be_invalid
      expect(@character.errors.full_messages[0]).to eq('Name can\'t be blank')
    end

    it 'is not valid without a poem' do
      @character.poem = nil

      @character.save

      # p character.errors.full_messages

      expect(@character).to be_invalid
      expect(@character.errors.full_messages[0]).to eq('Poem can\'t be blank')
    end

    it 'is valid without a race' do
      @character.race = nil

      expect(@character).to be_valid
    end

  end

end

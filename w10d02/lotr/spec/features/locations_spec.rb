require 'rails_helper'
require 'support/database_cleaner'

RSpec.feature "Locations", type: :feature, js: true do
  # pending "add some scenarios (or delete) #{__FILE__}"

  before :each do
    Location.create(
      location: 'Fangorn Forest'
    )
    Location.create(
      location: 'Mines of Moria'
    )
    Location.create(
      location: 'Bag End'
    )
    Location.create(
      location: 'Edmonton'
    )

    visit locations_path
  end

  scenario 'display the Locations page' do
    save_screenshot 'test_one_locations_page.png'
  end

  scenario 'display the Locations page and see 4 locations' do
    save_screenshot 'test_two_locations_page.png'

    expect(page).to have_text(/ALL the locations!/i)

    expect(page).to have_css('.location', count: 4)
  end

  scenario 'visit the Locations page, click on a link, visit the Characters page' do
    save_screenshot 'test_three_locations_page.png'

    click_link('Characters', match: :first)

    save_screenshot 'test_three_characters_page.png'

    expect(page).to have_text 'All the characters'
  end

end

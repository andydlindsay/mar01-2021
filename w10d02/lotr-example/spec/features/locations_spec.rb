require 'rails_helper'

RSpec.feature "Locations", type: :feature, js: true do
  # pending "add some scenarios (or delete) #{__FILE__}"

  before :each do
    @loc1 = Location.create(
      location: 'Minas Morgul'
    )
    @loc2 = Location.create(
      location: 'The Shire'
    )
    @loc3 = Location.create(
      location: 'One of the Two Towers'
    )
  end

  scenario 'display the Locations page' do
    visit locations_path

    save_screenshot 'test_one_locations_page.png'
  end

  scenario 'display the Locations page and show 3 locations' do
    visit locations_path

    save_screenshot 'test_two_locations_page.png'

    expect(page).to have_css('.location', count: 3)
  end

  scenario 'display the Locations page, click on a link for one of the locations, visit the characters page' do
    visit locations_path

    save_screenshot 'test_three_locations_page.png'

    click_link('Characters', match: :first)

    save_screenshot 'test_three_characters_page.png'

    expect(page).to have_text 'All the characters'
  end
end

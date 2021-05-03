require "application_system_test_case"

class EnemiesTest < ApplicationSystemTestCase
  setup do
    @enemy = enemies(:one)
  end

  test "visiting the index" do
    visit enemies_url
    assert_selector "h1", text: "Enemies"
  end

  test "creating a Enemy" do
    visit enemies_url
    click_on "New Enemy"

    click_on "Create Enemy"

    assert_text "Enemy was successfully created"
    click_on "Back"
  end

  test "updating a Enemy" do
    visit enemies_url
    click_on "Edit", match: :first

    click_on "Update Enemy"

    assert_text "Enemy was successfully updated"
    click_on "Back"
  end

  test "destroying a Enemy" do
    visit enemies_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Enemy was successfully destroyed"
  end
end

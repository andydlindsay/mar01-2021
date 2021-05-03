class CharactersController < ApplicationController
  def index
    @location = Location.find(params[:location_id])
  end
end

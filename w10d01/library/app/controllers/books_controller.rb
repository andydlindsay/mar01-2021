class BooksController < ApplicationController
  def index
    @author = Author.find(params[:author_id])
  end
end

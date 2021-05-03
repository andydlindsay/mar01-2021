Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # resources :authors
  # resources :authors, only: [:show]
  # resources :authors, except: [:edit, :update, :show]

  # resources :books

  resources :authors do
    resources :books
  end

  # resources :books
end

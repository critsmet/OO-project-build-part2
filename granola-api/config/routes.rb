Rails.application.routes.draw do
  resources :brands, only: [:index, :show]
  resources :granolas, only: [:index, :show, :create, :destroy]

  #get '/most_popular_granola', to: "granolas#most_popular"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

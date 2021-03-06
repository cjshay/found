Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :update] do
      resources :follows, only: [:create, :destroy]
    end
    resource :session, only: [:create, :destroy]
    resources :stories, only: [:index, :show, :create, :update, :destroy] do
      resources :responses, only: [:index]
      resources :likes, only: [:create, :destroy]
    end
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

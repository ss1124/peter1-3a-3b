Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy] 
    resources :meetings, only: [:index, :update,  :show, :create, :destroy]
  end
  debugger
  get 'api/meetings/show_slots_of_doctor/:id/:time_zone', to: 'api/meetings#show_slots_of_doctor'
end

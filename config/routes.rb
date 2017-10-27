Rails.application.routes.draw do
  get 'signups/index'

  get 'signups/new'

  get 'signups/show'

  get 'signups/create'

  get 'signups/update'

  get 'signups/edit'

  get 'events/index'

  get 'events/new'

  get 'events/show'

  get 'events/create'

  get 'events/update'

  get 'events/edit'

  get 'organizations/index'

  get 'organizations/new'

  get 'organizations/show'

  get 'organizations/create'

  get 'organizations/update'

  get 'organizations/edit'

  get 'sessions/new'

  get 'sessions/create'

  get 'sessions/destroy'

  get 'users/new'

  get 'users/create'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

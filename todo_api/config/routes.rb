Rails.application.routes.draw do
  namespace :api do
    root "todos#index"
    get "todos/all_todos"
    put "todos/update"
    post "todos/create"
  end
end

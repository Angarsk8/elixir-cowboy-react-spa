defmodule TodoApp.User do
  use TodoApp.BaseModel

  schema "users" do
    has_many :todos, TodoApp.Todo
    has_many :comments, TodoApp.Comment

    timestamps()
  end
end

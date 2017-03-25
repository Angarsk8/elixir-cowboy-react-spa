defmodule TodoApp.TodoView do
  use TodoApp.BaseView

  def render(:index, %{todos: todos}) do
    %{
      data: Enum.map(todos, & render(:todo, %{todo: &1}))
    }
  end
  def render(:show, %{todo: todo}) do
    %{
      data: render(:todo, %{todo: todo})
    }
  end

  def render(:todo, %{todo: todo}) do
    %{
      id: todo.id,
      title: todo.title,
      description: todo.description,
      completed: todo.completed,
      insertedAt: todo.inserted_at,
      updatedAt: todo.updated_at
    }
  end
end

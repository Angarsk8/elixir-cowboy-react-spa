defmodule TodoApp.TodoView do
  use TodoApp.BaseView

  def render(:index, %{todos: todos}) do
    %{
      data: Enum.map(todos, & render(:todo, %{todo: &1}))
    }
  end
  def render(:errors, %{changeset: changeset}) do
    errors =
      Enum.reduce(changeset.errors, %{}, fn {field, detail}, acc ->
        Map.put(acc, field, render_detail(detail))
      end)

    %{
      errors: errors
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
      completed: todo.completed
    }
  end
end

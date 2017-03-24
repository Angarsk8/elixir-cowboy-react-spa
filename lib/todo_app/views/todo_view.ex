defmodule TodoApp.TodoView do
  use TodoApp.BaseView
  alias TodoApp.CommentView

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
    comments =
      :index
      |> CommentView.render(comments: todo.comments)
      |> Map.get(:data)

    %{
      id: todo.id,
      title: todo.title,
      description: todo.description,
      completed: todo.completed,
      insertedAt: todo.inserted_at,
      comments: comments,
    }
  end
end

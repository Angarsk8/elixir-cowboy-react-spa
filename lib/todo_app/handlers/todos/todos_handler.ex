defmodule TodoApp.TodosHandler do
  alias TodoApp.{Todo, Entities, Authorization}

  use Entities.BaseHandler
  use Authorization.BaseHandler

  import TodoApp.TodoView, only: [render: 2]

  # REST Handlers

  def index(req, user, _params) do
    todos =
      user
      |> assoc(:todos)
      |> order_by(desc: :inserted_at)
      |> Repo.all

    req
    |> set_body(render(:index, todos: todos))
    |> reply(200)
  end

  def create(req, user, %{body: post_params}) do
    changeset =
      user
      |> build_assoc(:todos)
      |> Todo.changeset(post_params)

    case Repo.insert(changeset) do
      {:ok, todo} ->
        req
        |> set_body(render(:show, todo: todo))
        |> reply(200)
      {:error, cs} ->
        req
        |> set_body(render(:errors, changeset: cs))
        |> reply(422, false)
    end
  end
end

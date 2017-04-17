defmodule TodoApp.TodosHandler do
  alias TodoApp.{Todo, Entities, Authorization}

  use Entities.BaseHandler
  use Authorization.BaseHandler

  import TodoApp.TodoView, only: [render: 2]

  # REST Handlers

  def handle_get(req, user) do
    todos =
      user
      |> assoc(:todos)
      |> order_by(desc: :inserted_at)
      |> Repo.all

    req
    |> set_body(render(:index, todos: todos))
    |> reply(200)
  end

  def handle_post(req, user) do
    {:ok, params, req} = :cowboy_req.body(req)
    decoded_params = Poison.decode!(params)

    changeset =
      user
      |> build_assoc(:todos)
      |> Todo.changeset(decoded_params)

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

defmodule TodoApp.TodosHandler do
  use TodoApp.Entities.BaseHandler

  import TodoApp.TodoView, only: [render: 2]
  alias TodoApp.Todo

  # REST Handlers

  def handle_get(req, _state) do
    todos = Todo
      |> order_by(desc: :inserted_at) 
      |> Repo.all

    req
    |> set_headers(default_headers)
    |> set_body(render(:index, todos: todos))
    |> reply(200)
  end

  def handle_post(req, _state) do
    {:ok, params, req} = :cowboy_req.read_body(req)
    decoded_params = Poison.decode!(params)
    changeset = Todo.changeset(%Todo{}, decoded_params)

    case Repo.insert(changeset) do
      {:ok, todo} ->
        req
        |> set_headers(default_headers)
        |> set_body(render(:show, todo: todo))
        |> reply(200)
      {:error, cs} ->
        req
        |> set_headers(default_headers)
        |> set_body(render(:errors, changeset: cs))
        |> reply(422, false)
    end
  end
end

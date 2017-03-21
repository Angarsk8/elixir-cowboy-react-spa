defmodule TodoApp.TodoHandler do
  use TodoApp.Entity.BaseHandler

  import TodoApp.TodoView, only: [render: 2]
  alias TodoApp.Todo

  # REST Handlers

  def handle_get(req, _state) do
    id = :cowboy_req.binding(:id, req)
    case Repo.get(Todo, id) do
      %Todo{} = todo ->
        req
        |> set_headers(default_headers)
        |> set_body(render(:show, todo: todo))
        |> reply(200)
      nil ->
        req
        |> set_headers(default_headers)
        |> set_body(render(:not_found, []))
        |> reply(404, false)
    end
  end

  def handle_update(req, _state) do
    id = :cowboy_req.binding(:id, req)
    {:ok, params, req} = :cowboy_req.read_body(req)
    decoded_params = Poison.decode!(params)

    case Repo.get(Todo, id) do
      %Todo{} = todo ->
        changeset = Todo.changeset(todo, decoded_params)
        case Repo.update(changeset) do
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
      nil ->
        req
        |> set_headers(default_headers)
        |> set_body(render(:not_found, []))
        |> reply(404, false)
    end
  end

  def handle_delete(req, _state) do
    id = :cowboy_req.binding(:id, req)
    todo = Repo.get!(Todo, id)

    Repo.delete!(todo)

    req
    |> set_headers(default_headers)
    |> set_body(%{ok: true})
    |> reply(200)
  end
end

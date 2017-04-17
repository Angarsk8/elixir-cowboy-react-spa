defmodule TodoApp.TodoHandler do
  alias TodoApp.{Todo, Entity, Authorization}

  use Entity.BaseHandler
  use Authorization.BaseHandler

  import TodoApp.TodoView, only: [render: 2]

  # REST Handlers

  def handle_get(req, user) do
    {id, req} = :cowboy_req.binding(:id, req)
    query = assoc(user, :todos)

    case Repo.get(query, id) do
      %Todo{} = todo ->
        req
        |> set_body(render(:show, todo: todo))
        |> reply(200)
      nil ->
        req
        |> set_body(render(:not_found, []))
        |> reply(404, false)
    end
  end

  def handle_update(req, user) do
    {id, req} = :cowboy_req.binding(:id, req)
    {:ok, params, req} = :cowboy_req.body(req)
    decoded_params = Poison.decode!(params)
    query = assoc(user, :todos)

    case Repo.get(query, id) do
      %Todo{} = todo ->
        changeset = Todo.changeset(todo, decoded_params)
        case Repo.update(changeset) do
          {:ok, todo} ->
            req
            |> set_body(render(:show, todo: todo))
            |> reply(200)
          {:error, cs} ->
            req
            |> set_body(render(:errors, changeset: cs))
            |> reply(422, false)
        end
      nil ->
        req
        |> set_body(render(:not_found, []))
        |> reply(404, false)
    end
  end

  def handle_delete(req, user) do
    {id, req} = :cowboy_req.binding(:id, req)

    user
    |> assoc(:todos)
    |> Repo.get!(id)
    |> Repo.delete!

    req
    |> set_body(%{ok: true})
    |> reply(200)
  end
end

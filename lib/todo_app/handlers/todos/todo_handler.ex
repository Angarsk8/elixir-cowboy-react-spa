defmodule TodoApp.TodoHandler do
  alias TodoApp.{Todo, Entity, Authorization}

  use Entity.BaseHandler
  use Authorization.BaseHandler

  import TodoApp.TodoView, only: [render: 2]

  # REST Handlers

  def index(req, user, %{id: id}) do
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

  def update(req, user, %{id: id, body: todo_params}) do
    query = assoc(user, :todos)

    case Repo.get(query, id) do
      %Todo{} = todo ->
        changeset = Todo.changeset(todo, todo_params)
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

  def delete(req, user, %{id: id}) do
    user
    |> assoc(:todos)
    |> Repo.get!(id)
    |> Repo.delete!

    req
    |> set_body(%{ok: true})
    |> reply(200)
  end
end

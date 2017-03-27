defmodule TodoApp.CommentHandler do
  alias TodoApp.{Comment, Entity, Authorization}

  use Entity.BaseHandler
  use Authorization.BaseHandler

  import TodoApp.CommentView, only: [render: 2]

  # REST Handlers

  def handle_get(req, user) do
    {todo_id, req} = :cowboy_req.binding(:todo_id, req)
    {comment_id, req} = :cowboy_req.binding(:comment_id, req)

    query =
      user
      |> assoc(:todos)
      |> Repo.get(todo_id)
      |> assoc(:comments)

    case Repo.get(query, comment_id) do
      %Comment{} = comment ->
        req
        |> set_headers(default_headers)
        |> set_body(render(:show, comment: comment))
        |> reply(200)
      nil ->
        req
        |> set_headers(default_headers)
        |> set_body(render(:not_found, []))
        |> reply(404, false)
    end
  end

  def handle_update(req, user) do
    {todo_id, req} = :cowboy_req.binding(:todo_id, req)
    {comment_id, req} = :cowboy_req.binding(:comment_id, req)
    {:ok, params, req} = :cowboy_req.body(req)
    decoded_params = Poison.decode!(params)

    query =
      user
      |> assoc(:todos)
      |> Repo.get(todo_id)
      |> assoc(:comments)

    case Repo.get(query, comment_id) do
      %Comment{} = comment ->
        changeset = Comment.changeset(comment, decoded_params)
        case Repo.update(changeset) do
          {:ok, comment} ->
            req
            |> set_headers(default_headers)
            |> set_body(render(:show, comment: comment))
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

  def handle_delete(req, user) do
    {todo_id, req} = :cowboy_req.binding(:todo_id, req)
    {comment_id, req} = :cowboy_req.binding(:comment_id, req)

    user
    |> assoc(:todos)
    |> Repo.get(todo_id)
    |> assoc(:comments)
    |> Repo.get(comment_id)
    |> Repo.delete!

    req
    |> set_headers(default_headers)
    |> set_body(%{ok: true})
    |> reply(200)
  end
end

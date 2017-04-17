defmodule TodoApp.CommentsHandler do
  alias TodoApp.{Comment, Entities, Authorization}

  use Entities.BaseHandler
  use Authorization.BaseHandler

  import TodoApp.CommentView, only: [render: 2]

  # REST Handlers

  def handle_get(req, user) do
    {todo_id, req} = :cowboy_req.binding(:todo_id, req)
    comments =
      user
      |> assoc(:todos)
      |> Repo.get(todo_id)
      |> assoc(:comments)
      |> order_by(desc: :inserted_at)
      |> Repo.all

    req
    |> set_body(render(:index, comments: comments))
    |> reply(200)
  end

  def handle_post(req, user) do
    {todo_id, req} = :cowboy_req.binding(:todo_id, req)
    {:ok, params, req} = :cowboy_req.body(req)
    decoded_params = Poison.decode!(params)

    changeset =
      user
      |> assoc(:todos)
      |> Repo.get(todo_id)
      |> build_assoc(:comments)
      |> Comment.changeset(decoded_params)

    case Repo.insert(changeset) do
      {:ok, comment} ->
        req
        |> set_body(render(:show, comment: comment))
        |> reply(200)
      {:error, cs} ->
        req
        |> set_body(render(:errors, changeset: cs))
        |> reply(422, false)
    end
  end
end

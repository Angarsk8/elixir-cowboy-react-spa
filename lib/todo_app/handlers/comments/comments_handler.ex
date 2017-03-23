defmodule TodoApp.CommentsHandler do
  use TodoApp.Entities.BaseHandler

  import TodoApp.CommentView, only: [render: 2]
  alias TodoApp.{Comment, Todo}

  # REST Handlers

  def handle_get(req, _state) do
    todo_id = :cowboy_req.binding(:todo_id, req)
    comments =
      Comment
      |> order_by(desc: :inserted_at)
      |> where(todo_id: ^todo_id)
      |> Repo.all

    req
    |> set_headers(default_headers)
    |> set_body(render(:index, comments: comments))
    |> reply(200)
  end

  def handle_post(req, _state) do
    todo_id = :cowboy_req.binding(:todo_id, req)
    {:ok, params, req} = :cowboy_req.read_body(req)
    decoded_params = Poison.decode!(params)

    changeset =
      Todo
      |> Repo.get(todo_id)
      |> build_assoc(:comments)
      |> Comment.changeset(decoded_params)

    case Repo.insert(changeset) do
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
  end
end

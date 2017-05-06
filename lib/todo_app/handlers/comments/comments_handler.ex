defmodule TodoApp.CommentsHandler do
  alias TodoApp.{Comment, Entities, Authorization}

  use Entities.BaseHandler
  use Authorization.BaseHandler

  import TodoApp.CommentView, only: [render: 2]

  # REST Handlers

  def index(req, user, %{todo_id: todo_id}) do
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

  def create(req, user, %{todo_id: todo_id, body: comment_params}) do
    changeset =
      user
      |> assoc(:todos)
      |> Repo.get(todo_id)
      |> build_assoc(:comments)
      |> Comment.changeset(comment_params)

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

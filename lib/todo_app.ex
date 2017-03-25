defmodule TodoApp do
  use Application

  def start(_type, _args) do
    import Supervisor.Spec, warn: false

    children = [
      supervisor(TodoApp.Repo, [])
    ]

    dispatch = :cowboy_router.compile(hosts)
    {:ok, _} = :cowboy.start_clear(:http, 100,
      [port: port],
      %{env: %{dispatch: dispatch}}
    )

    opts = [strategy: :one_for_one, name: TodoApp.Supervisor]
    Supervisor.start_link(children, opts)
  end

  defp hosts do
    [
      _: api(:v1, routes)
    ]
  end

  defp routes do
    [
      {"/registrations", TodoApp.RegistrationsHandler, []},
      {"/current_user", TodoApp.CurrentUserHandler, []},
      {"/todos", TodoApp.TodosHandler, []},
      {"/todos/:id", TodoApp.TodoHandler, []},
      {"/todos/:todo_id/comments", TodoApp.CommentsHandler, []},
      {"/todos/:todo_id/comments/:comment_id", TodoApp.CommentHandler, []},
    ]
  end

  defp api(:v1, routes) do
    for {path, handler, opts} <- routes do
      {"/api/v1" <> path, handler, opts}
    end
  end

  defp port do
     %{port: port} = Application.get_env(:todo_app, :http)
     port
  end
end

defmodule TodoApp do
  use Application

  def start(_type, _args) do
    import Supervisor.Spec, warn: false

    children = [
      supervisor(TodoApp.Repo, [])
    ]

    dispatch = :cowboy_router.compile(hosts())
    {:ok, _} = :cowboy.start_http(:http_listener, 100,
      [port: port(:todo_app)],
      [env: [dispatch: dispatch]]
    )

    opts = [strategy: :one_for_one, name: TodoApp.Supervisor]
    Supervisor.start_link(children, opts)
  end

  defp hosts do
    [
      _: static_routes() ++ api(:v1, api_routes())
    ]
  end

  defp static_routes do
    [
      {"/", :cowboy_static, {:priv_file, :todo_app, "build/index.html"}},
      {"/static/[...]", :cowboy_static, {:priv_dir, :todo_app, "build/static"}}
    ]
  end

  defp api_routes do
    [
      {"/registrations", TodoApp.RegistrationsHandler, []},
      {"/current_user", TodoApp.CurrentUserHandler, []},
      {"/todos", TodoApp.TodosHandler, []},
      {"/todos/:id", TodoApp.TodoHandler, []},
      {"/todos/:todo_id/comments", TodoApp.CommentsHandler, []},
      {"/todos/:todo_id/comments/:comment_id", TodoApp.CommentHandler, []},
    ]
  end

  defp api(version, routes) do
    for {path, handler, opts} <- routes do
      {"/api/#{version}#{path}", handler, opts}
    end
  end

  defp port(app) do
    app
    |> Env.fetch!(:http)
    |> Access.get(:port)
    |> handle_port
  end

  defp handle_port(port) when is_integer(port), do: port
  defp handle_port(port) when is_binary(port), do: String.to_integer(port)
end

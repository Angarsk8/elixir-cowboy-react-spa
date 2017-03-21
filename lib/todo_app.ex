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
      _: routes
    ]
  end

  defp routes do
    [
      {"/api/v1/todos", TodoApp.TodosHandler, []},
      {"/api/v1/todos/:id", TodoApp.TodoHandler, []}
    ]
  end

  defp port do
     %{port: port} = Application.get_env(:todo_app, :http)
     port
  end
end

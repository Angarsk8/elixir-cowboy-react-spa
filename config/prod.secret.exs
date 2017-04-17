use Mix.Config

config :todo_app, TodoApp.Repo,
  adapter: Ecto.Adapters.Postgres,
  username: System.get_env("DB_USERNAME"),
  password: System.get_env("DB_PASSWORD"),
  database: System.get_env("DB_NAME") || "todo_app_prod",
  pool_size: System.get_env("DB_POOL_SIZE") || 20

use Mix.Config

config :todo_app, TodoApp.Repo,
  adapter: Ecto.Adapters.Postgres,
  username:  {:system, "DB_USERNAME"},
  password:  {:system, "DB_PASSWORD"},
  database:  {:system, "DB_NAME", "todo_app_prod"},
  pool_size: {:system, "DB_POOL_SIZE", 20}

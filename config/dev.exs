use Mix.Config

config :logger, :console, format: "[$level] $message\n"

config :todo_app, http: [port: {:system, "PORT", 8080}]

config :todo_app, TodoApp.Repo,
  adapter: Ecto.Adapters.Postgres,
  database: "todo_app_dev",
  username: "postgres",
  password: "postgres",
  hostname: "localhost",
  pool_size: 10

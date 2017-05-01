use Mix.Config

config :todo_app, http: [port: {:system, "PORT", 80}]

config :logger, level: :info

config :todo_app, TodoApp.Repo,
  adapter: Ecto.Adapters.Postgres,
  url: {:system, "DB_URL"},
  pool_size: {:system, "DB_POOL_SIZE", 20}

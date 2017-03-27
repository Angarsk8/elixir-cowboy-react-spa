use Mix.Config

config :todo_app, TodoApp.Repo,
  adapter: Ecto.Adapters.Postgres,
  username: "<USERNAME>",
  password: "<PASSWORD>",
  database: "<PRODUCTION_DB_NAME>",
  pool_size: 20

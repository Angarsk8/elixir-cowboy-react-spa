use Mix.Config

config :todo_app, TodoApp.Repo,
  adapter: Ecto.Adapters.Postgres,
  username: "<USERNAME>",
  password: "<PASSWORD>",
  database: "todo_app_prod",
  pool_size: 20

use Mix.Config

config :todo_app, TodoApp.Repo,
  adapter: Ecto.Adapters.Postgres,
  username: "postgres",
  password: "posgres",
  database: "todo_app_prod",
  pool_size: 20

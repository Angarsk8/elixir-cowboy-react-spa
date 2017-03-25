# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
use Mix.Config

config :todo_app, TodoApp.Repo,
  adapter: Ecto.Adapters.Postgres,
  database: "todo_app_repo",
  username: "postgres",
  password: "postgres",
  hostname: "localhost"

config :todo_app, ecto_repos: [TodoApp.Repo]

config :todo_app, http: %{port: 8080}

config :guardian, Guardian,
  allowed_algos: ["HS512"],
  verify_module: Guardian.JWT,
  issuer: "TodoApp",
  ttl: { 30, :days },
  allowed_drift: 2000,
  verify_issuer: true,
  secret_key: %{
    "alg" => "HS512",
    "k" => "QNsANyS4CyvAxSNyUuFtBJfJt3kxg4f9Lkk4Zg3Ack13xU59uf-RBdQFtz1ZQqIJ9h3RncQc-nH6BkuL6tShUQ",
    "kty" => "oct",
    "use" => "sig"
  },
  serializer: TodoApp.GuardianSerializer


# This configuration is loaded before any dependency and is restricted
# to this project. If another project depends on this project, this
# file won't be loaded nor affect the parent project. For this reason,
# if you want to provide default values for your application for
# 3rd-party users, it should be done in your "mix.exs" file.

# You can configure for your application as:
#
#     config :todo_app, key: :value
#
# And access this configuration in your application as:
#
#     Application.get_env(:todo_app, :key)
#
# Or configure a 3rd-party app:
#
#     config :logger, level: :info
#

# It is also possible to import configuration files, relative to this
# directory. For example, you can emulate configuration per environment
# by uncommenting the line below and defining dev.exs, test.exs and such.
# Configuration from the imported file will override the ones defined
# here (which is why it is important to import them last).
#
#     import_config "#{Mix.env}.exs"

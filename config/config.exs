# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
use Mix.Config

config :todo_app, ecto_repos: [TodoApp.Repo]

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


import_config "#{Mix.env}.exs"

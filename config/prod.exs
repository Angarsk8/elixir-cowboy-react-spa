use Mix.Config

config :todo_app, http: [port: System.get_env("PORT") || 80]

config :logger, level: :info

import_config "prod.secret.exs"

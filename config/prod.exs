use Mix.Config

config :todo_app, http: %{port: 4000}

config :logger, level: :info

import_config "prod.secret.exs"

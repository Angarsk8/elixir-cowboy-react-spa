defmodule TodoApp.Mixfile do
  use Mix.Project

  def project do
    [app: :todo_app,
     version: "0.1.0",
     elixir: "~> 1.3",
     build_embedded: Mix.env == :prod,
     start_permanent: Mix.env == :prod,
     aliases: aliases(),
     deps: deps()]
  end

  # Configuration for the OTP application
  #
  # Type "mix help compile.app" for more information
  def application do
    [mod: {TodoApp, []},
     applications: [:logger, :cowboy, :ecto, :postgrex, :env],
     included_applications: [:plug, :guardian, :poison, :faker]]
  end

  # Dependencies can be Hex packages:
  #
  #   {:mydep, "~> 0.3.0"}
  #
  # Or git/path repositories:
  #
  #   {:mydep, git: "https://github.com/elixir-lang/mydep.git", tag: "0.1.0"}
  #
  # Type "mix help deps" for more examples and options
  defp deps do
    [
      {:ecto, "~> 2.1"},
      {:postgrex, "~> 0.13.2"},
      {:faker, "~> 0.7.0"},
      {:cowboy, "~> 1.1"},
      {:poison, "~> 3.0"},
      {:guardian, "~> 0.14.2"},
      {:distillery, "~> 1.1.0"},
      {:env, "~> 0.2.0"}
    ]
  end

  defp aliases do
    ["ecto.setup": ["ecto.create", "ecto.migrate"],
     "ecto.reset": ["ecto.drop", "ecto.setup"],
     "test": ["ecto.create --quiet", "ecto.migrate", "test"]]
  end
end
